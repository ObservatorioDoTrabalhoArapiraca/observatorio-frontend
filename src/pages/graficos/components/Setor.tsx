import { AgregacaoFilter } from "@/components/AgregacaoFilter";
import { getDistribuicaoPorSetor } from "@/core/services/cagedArapiracaServices";

import { useAgregacaoFilter } from "@/hooks/useAgregacaoFilter";
import { BarChartCard } from "@/pages/graficos/components/BarChartCard";
import { setorChartConfig } from "@/pages/graficos/components/chartConfigData";
import { transformSetorData } from "@/pages/graficos/components/transformToChartData";
import { Setor } from "@/types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";


export default function SetorChart() {
  const [dados, setDados] = useState<Setor[]>([])

  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const {
    isAnual,
    ano,
    anosDisponiveis,
    setIsAnual,
    setAno,
    agregacao,
  } = useAgregacaoFilter();

  useEffect(() => { 
      const fetchData = async () => { 
        setLoading(true);
        setError(null);
        try { 
          const response = await getDistribuicaoPorSetor({
            ...(!isAnual && ano !== null && { ano }),
            agregacao, pagination: false
          })
          const rawData = response?.results || (Array.isArray(response) ? response : []);
      setDados(rawData);
        } catch (error) {
          console.error("❌ Erro ao buscar dados:", error)
          toast.error("Erro ao buscar dados")
        setError("Erro ao buscar dados")
      } finally {
        setLoading(false)
      }
      }
      if (isAnual || ano !== null) {
        fetchData()
      }
  }, [isAnual, ano, agregacao])
  
  const chartData = transformSetorData(dados, isAnual);
  const dataKeys = Object.keys(setorChartConfig);
  return (
    <div className="flex flex-col justify-between">
       <div className="text-red-500 text-sm pb-3">
            * Valores referentes a movimentações com salário abaixo do mínimo legal foram suprimidos para preservar a qualidade dos dados. Isso inclui casos de salário zero, valores negativos ou outros registros que possam indicar inconsistências ou erros de digitação. A exclusão desses dados visa garantir que as análises e insights gerados a partir desta tabela sejam mais precisos e representativos da realidade do mercado de trabalho em Arapiraca de acordo com a <Link to="/salario-base" className="underline hover:text-blue-500">
              tabela
            </Link>.
          </div>
            <AgregacaoFilter
            isAnual={isAnual}
            ano={ano}
            anosDisponiveis={anosDisponiveis}
            onAgregacaoChange={setIsAnual}
            onAnoChange={setAno}
            />
          <BarChartCard
            title="Distribuição por Setor*"
            description={isAnual ? "Dados anuais" : `Dados mensais de ${ano}`}
            data={chartData}
            config={setorChartConfig}
            isAnual={isAnual}
            loading={loading}
            error={error}
            dataKeys={dataKeys}
            />
            </div>
  )
}
