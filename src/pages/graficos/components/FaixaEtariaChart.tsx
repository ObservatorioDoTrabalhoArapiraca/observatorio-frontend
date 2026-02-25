import { AgregacaoFilter } from "@/components/AgregacaoFilter";
import { getDistribuicaoFaixaEtaria } from "@/core/services/cagedArapiracaServices";
import { useAgregacaoFilter } from "@/hooks/useAgregacaoFilter";
import { BarChartCard } from "@/pages/graficos/components/BarChartCard";
import { faixaEtariaChartConfig } from "@/pages/graficos/components/chartConfigData";
import { transformFaixaEtariaData } from "@/pages/graficos/components/transformToChartData";
import { FaixaEtaria } from "@/types";
import { FALLBACK_COLORS } from "@/Utils/fallbackColors";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";


export default function FaixaEtariaChart() {
  const [dados, setDados] = useState<FaixaEtaria[]>([])

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
          const response = await getDistribuicaoFaixaEtaria({
            ...(!isAnual && ano !== null && { ano }),
            agregacao,
          })
          setDados(response.results)
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
  
  const chartData = transformFaixaEtariaData(dados, isAnual);
  const { dataKeys, config } = useMemo(() => {
    if (chartData.length === 0) {
      return { dataKeys: Object.keys(faixaEtariaChartConfig), config: faixaEtariaChartConfig };
    }

    // Extrai todas as chaves únicas dos dados (excluindo periodo, mes, ano)
    const keysSet = new Set<string>();
    chartData.forEach((item) => {
      Object.keys(item).forEach((key) => {
        if (!["periodo", "mes", "ano"].includes(key)) {
          keysSet.add(key);
        }
      });
    });

    const keys = Array.from(keysSet);

    // Mescla config existente com fallback para chaves novas
    const mergedConfig = { ...faixaEtariaChartConfig };
    keys.forEach((key, index) => {
      if (!mergedConfig[key]) {
        mergedConfig[key] = {
          label: key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
          color: FALLBACK_COLORS[index % FALLBACK_COLORS.length],
        };
      }
    });

    return { dataKeys: keys, config: mergedConfig };
  }, [chartData]);
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
            title="Distribuição por Faixa Etária"
            description={isAnual ? "Dados anuais" : `Dados mensais de ${ano}`}
            data={chartData}
            config={faixaEtariaChartConfig}
            isAnual={isAnual}
            loading={loading}
            error={error}
            dataKeys={dataKeys}
            />
            </div>
  )
}
