import { AgregacaoFilter } from "@/components/AgregacaoFilter";
import { getSalarioPorProfissao } from "@/core/services/cagedArapiracaServices";
import { useAgregacaoFilter } from "@/hooks/useAgregacaoFilter";
import { BarChartCard } from "@/pages/graficos/components/BarChartCard";
import { profissaoChartConfig } from "@/pages/graficos/components/chartConfigData";
import { transformProfissaoData } from "@/pages/graficos/components/transformToChartData";
import { Profissao } from "@/types";
import { useEffect, useState } from "react";


export default function ProfissaoChart() {
  const [dados, setDados] = useState<Profissao[]>([])

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
          const response = await getSalarioPorProfissao({
            ...(!isAnual && ano !== null && { ano }),
            agregacao,
          })
          setDados(response.results)
        } catch (error) {
        console.error("❌ Erro ao buscar dados:", error)
        setError("Erro ao buscar dados")
      } finally {
        setLoading(false)
      }
      }
      if (isAnual || ano !== null) {
        fetchData()
      }
  }, [isAnual, ano, agregacao])
  
  const chartData = transformProfissaoData(dados, isAnual);
  const dataKeys = Object.keys(profissaoChartConfig);
  return (
    <div className="flex flex-col justify-between">
            <AgregacaoFilter
            isAnual={isAnual}
            ano={ano}
            anosDisponiveis={anosDisponiveis}
            onAgregacaoChange={setIsAnual}
            onAnoChange={setAno}
            />
          <BarChartCard
            title="Distribuição por Profissão"
            description={isAnual ? "Dados anuais" : `Dados mensais de ${ano}`}
            data={chartData}
            config={profissaoChartConfig}
            isAnual={isAnual}
            loading={loading}
            error={error}
            dataKeys={dataKeys}
            />
            </div>
  )
}
