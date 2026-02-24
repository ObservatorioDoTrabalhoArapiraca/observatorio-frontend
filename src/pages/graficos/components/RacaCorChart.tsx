import { AgregacaoFilter } from "@/components/AgregacaoFilter";
import { getDistribuicaoPorRacaCor } from "@/core/services/cagedArapiracaServices";
import { useAgregacaoFilter } from "@/hooks/useAgregacaoFilter";
import { BarChartCard } from "@/pages/graficos/components/BarChartCard";
import { racaCorChartConfig } from "@/pages/graficos/components/chartConfigData";
import { transformRacaCorData } from "@/pages/graficos/components/transformToChartData";
import { RacaCor } from "@/types";
import { useEffect, useState } from "react";


export default function RacaCorChart() {
  const [dados, setDados] = useState<RacaCor[]>([])

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
          const response = await getDistribuicaoPorRacaCor({
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
  
  const chartData = transformRacaCorData(dados, isAnual);
  const dataKeys = Object.keys(racaCorChartConfig);
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
            title="Distribuição por Raça/Cor"
            description={isAnual ? "Dados anuais" : `Dados mensais de ${ano}`}
            data={chartData}
            config={racaCorChartConfig}
            isAnual={isAnual}
            loading={loading}
            error={error}
            dataKeys={dataKeys}
            />
            </div>
  )
}
