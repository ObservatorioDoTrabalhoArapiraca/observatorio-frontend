import { DataTable } from "@/components/table/DataTable"
import { Spinner } from "@/components/ui/spinner"
import { getDistribuicaoPorEscolaridade } from "@/core/services/cagedArapiracaServices"
import { columns } from "@/pages/tabelas/escolaridade/columns"
import { DistribuicaoPorEscolaridade } from "@/types"

import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"

export default function TablePage() {
  const [dados, setDados] = useState<DistribuicaoPorEscolaridade[]>([])
  const { category } = useParams()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const [searchParams, setSearchParams] = useSearchParams();


const parseAnoFromUrl = (): number | null => {
    const anoParam = searchParams.get("ano");
    if (!anoParam) return null;
    const anoNum = Number(anoParam);
    return isNaN(anoNum) ? null : anoNum;
  };

  const parseMesFromUrl = (): number | null => {
    const mesParam = searchParams.get("mes");
    if (!mesParam) return null;
    const mesNum = Number(mesParam);
    return isNaN(mesNum) ? null : mesNum;
  };

  const [ano, setAno] = useState<number | null>(parseAnoFromUrl());
  const [mes, setMes] = useState<number | null>(parseMesFromUrl());
  const [isAnual, setIsAnual] = useState<boolean>(searchParams.get("agregacao") === "anual");

  const handleAnoChange = (novoAno: number | null) => {
    setAno(novoAno);
    if (novoAno === null) {
      setMes(null)
      setSearchParams({})
    } else {
      setSearchParams({
        ano: novoAno.toString(),
        ...(mes !== null && { mes: mes.toString() }),
        agregacao: isAnual ? "anual" : "mensal",
      });
    };
  }
 
  const handleMesChange = (novoMes: number | null) => {
    setMes(novoMes);
    if (ano !== null) {
      setSearchParams({
        ano: ano.toString(),
        ...(novoMes !== null && { mes: novoMes.toString() }),
        agregacao: isAnual ? "anual" : "mensal",
      });
    }
  };

  const handleAgregacaoChange = (novoIsAnual: boolean) => {
    setIsAnual(novoIsAnual);
    if (ano !== null) {
      setSearchParams({
        ano: ano.toString(),
        ...(mes !== null && { mes: mes.toString() }),
        agregacao: novoIsAnual ? "anual" : "mensal",
      });
    }
  };
  
  
  
  useEffect(() => {
    setLoading(true)
    setError(null)
    const fetchData = async () => {
      try {
       
        const dadosRecebidos = await getDistribuicaoPorEscolaridade({
          ...(ano !== null && { ano }),
          ...(mes !== null && { mes }),
          agregacao: isAnual ? "anual" : "mensal"
        });
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
      <DataTable<DistribuicaoPorEscolaridade, DistribuicaoPorEscolaridade>
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
