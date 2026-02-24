import { AgregacaoFilter } from "@/components/AgregacaoFilter";
import { getProfissoesPorDeficiencia } from "@/core/services/cagedArapiracaServices";
import { useAgregacaoFilter } from "@/hooks/useAgregacaoFilter";
import { BarChartCard } from "@/pages/graficos/components/BarChartCard";
import { deficienciaChartConfig } from "@/pages/graficos/components/chartConfigData";
import { transformDeficienciaData } from "@/pages/graficos/components/transformToChartData";
import { Deficiencia } from "@/types";
import { useEffect, useState } from "react";


export default function PcdChart() {
  const [dados, setDados] = useState<Deficiencia[]>([])

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
          const response = await getProfissoesPorDeficiencia({
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
  
  const chartData = transformDeficienciaData(dados, isAnual);
  const dataKeys = Object.keys(deficienciaChartConfig);
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
            title="Distribuição por Deficiencia"
            description={isAnual ? "Dados anuais" : `Dados mensais de ${ano}`}
            data={chartData}
            config={deficienciaChartConfig}
            isAnual={isAnual}
            loading={loading}
            error={error}
            dataKeys={dataKeys}
            />
            </div>
  )
}
