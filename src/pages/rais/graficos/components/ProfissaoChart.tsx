import { AgregacaoFilter } from "@/components/AgregacaoFilter";
import { ChartConfig } from "@/components/ui/chart";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getSalarioPorProfissao } from "@/core/services/raisArapiracaServices";
import { useAgregacaoFilter } from "@/hooks/useAgregacaoFilter";
import { BarChartCard } from "@/pages/rais/graficos/components/BarChartCard";
import { transformProfissaoData } from "@/pages/rais/graficos/components/transformToChartData";
import { Profissao } from "@/types";
import { CORES_PROFISSAO } from "@/Utils/fallbackColors";
import { useEffect, useState } from "react";
import { toast } from "sonner";


export default function ProfissaoChart() {
  const [dados, setDados] = useState<Profissao[]>([])

  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [topN, setTopN] = useState<number>(10);
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
            agregacao, pagination: false
          })
          setDados(response as unknown as Profissao[])
        } catch (error) {
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
  
  const chartData = transformProfissaoData(dados, isAnual);
  const dynamicKeys = chartData.length > 0
  ? [...new Set(
      chartData.flatMap((item) =>
        Object.keys(item).filter((k) => !["periodo", "mes", "ano"].includes(k))
      )
    )]
  : [];

const dynamicConfig: ChartConfig = {};
dynamicKeys.forEach((key, index) => {
  dynamicConfig[key] = {
    label: key
      .replace(/_/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase()),
    color: CORES_PROFISSAO[index % CORES_PROFISSAO.length],
  };
});
  return (
    <div className="flex flex-col justify-between">
      <div className="text-red-500 text-sm pb-3">
            * Profissões já filtradas considerando o Top 10 das profissões para não poluir visualmente o gráfico.
          </div>
      <div className="flex flex-wrap gap-2 pb-2 items-end">
            <AgregacaoFilter
            isAnual={isAnual}
            ano={ano}
            anosDisponiveis={anosDisponiveis}
            onAgregacaoChange={setIsAnual}
          onAnoChange={setAno}
          topN={ <div className="flex items-center gap-2">
            <Label htmlFor="topN" className="text-sm whitespace-nowrap">
              Exibir top:
            </Label>
            <Select
              value={topN.toString()}
              onValueChange={(value) => setTopN(Number(value))}
            >
              <SelectTrigger id="topN" className="w-[80px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
              {
                  ["1","3","5","10"].map((n) => (
                    <SelectItem key={n} value={n}>{n}</SelectItem>
                  ))
                }
              </SelectContent>
            </Select>
        </div>}
      />
     
      </div>
          <BarChartCard
            title="Distribuição por Profissão*"
            description={isAnual ? "Dados anuais" : `Dados mensais de ${ano}`}
            data={chartData}
            config={dynamicConfig}
            isAnual={isAnual}
            loading={loading}
            error={error}
            dataKeys={dynamicKeys}
            />
            </div>
  )
}
