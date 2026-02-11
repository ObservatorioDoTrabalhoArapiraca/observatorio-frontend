import { DataTable } from "@/components/table/DataTable"
import { Spinner } from "@/components/ui/spinner"
import { getProfissoesPorDeficiencia } from "@/core/services/cagedArapiracaServices"
import { columns } from "@/pages/tabelas/pcd/columns"
import { ProfissoesPorDeficiencia } from "@/types"

import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"

export default function TablePage() {
  const [dados, setDados] = useState<ProfissoesPorDeficiencia[]>([])
  const { category } = useParams()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  
  const [searchParams, setSearchParams] = useSearchParams();
  const [ano, setAno] = useState<number>(Number(searchParams.get("ano")) || new Date().getFullYear());
  const [mes, setMes] = useState<number>(
    Number(searchParams.get("mes")) || 1
  );
  const [isAnual, setIsAnual] = useState<boolean>(searchParams.get("agregacao") === "anual");

  const handleAnoChange = (novoAno: number) => {
    setAno(novoAno);
    setSearchParams({
      ano: novoAno.toString(),
      mes: mes.toString(),
      agregacao: isAnual ? "anual" : "mensal",
    });
  };
 
  const handleMesChange = (novoMes: number) => {
    setMes(novoMes);
    setSearchParams({
      ano: ano.toString(),
      mes: novoMes.toString(),
      agregacao: isAnual ? "anual" : "mensal",
    });
  };

  const handleAgregacaoChange = (novoIsAnual: boolean) => {
    setIsAnual(novoIsAnual);
    setSearchParams({
      ano: ano.toString(),
      mes: mes.toString(),
      agregacao: novoIsAnual ? "anual" : "mensal",
    });
  };
  
  useEffect(() => {
    setLoading(true)
    setError(null)
    const fetchData = async () => {
      try {
       
        const dadosRecebidos = await getProfissoesPorDeficiencia({ano: ano, mes: mes, agregacao: isAnual ? "anual" : "mensal"})
        setDados(dadosRecebidos)
        
        if (dadosRecebidos && Array.isArray(dadosRecebidos)) {
          setDados(dadosRecebidos)
        } else {
          console.warn("⚠️ Dados recebidos não são um array válido")
          setError("Formato de dados inválido")
        }
      } catch (error) {
        console.error("❌ Erro ao buscar dados:", error)
        setError("Erro ao buscar dados")
      } finally {
        setLoading(false)
      }

    }
    fetchData()
  }, [category, ano, mes, isAnual])

  

  if (loading) return <Spinner text="Carregando..."/>
  if (error) return <div>{error}</div>
  return (
    <div className="w-full mx-auto p-4">
      <DataTable<ProfissoesPorDeficiencia, ProfissoesPorDeficiencia>
        data={dados}
        columns={columns}
        filters={{
          ano,
          mes,
          isAnual,
          onAnoChange: handleAnoChange,
          onMesChange: handleMesChange,
          onAgregacaoChange: handleAgregacaoChange,
        }}
      />
    </div>
  )
}
