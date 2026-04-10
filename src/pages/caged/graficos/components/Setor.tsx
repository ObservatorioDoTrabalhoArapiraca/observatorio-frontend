import { AgregacaoFilter } from "@/components/AgregacaoFilter";
import { getDistribuicaoPorSetor } from "@/core/services/cagedArapiracaServices";

import { useAgregacaoFilter } from "@/hooks/useAgregacaoFilter";
import { BarChartCard } from "@/pages/caged/graficos/components/BarChartCard";
import { setorChartConfig } from "@/pages/caged/graficos/components/chartConfigData";
import { transformSetorData } from "@/pages/caged/graficos/components/transformToChartData";
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
          const rawData = Array.isArray(response) ? response : (response?.results || []);


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
       <p className="text-red-500 text-sm pb-3">

* A divisão por setor foi realizada com base na seção da movimentação seguindo esta <Link to="/ajuda" className="underline hover:text-blue-500" target="_blank">tabela</Link> como rerefência.
  </p>
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
