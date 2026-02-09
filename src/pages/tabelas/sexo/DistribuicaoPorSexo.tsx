import { DataTable } from "@/components/table/DataTable"
import { Spinner } from "@/components/ui/spinner"
import { getDistribuicaoPorSexo } from "@/core/services/cagedArapiracaServices"
import { columns } from "@/pages/tabelas/sexo/columns"
import { DistribuicaoPorSexo } from "@/types"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function TablePage() {
  const [dados, setDados] = useState<DistribuicaoPorSexo[]>([])
  const { category } = useParams()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  
  
  useEffect(() => {
    setLoading(true)
    setError(null)
    const fetchData = async () => {
      try {
        const query = {ano: 2020, mes: 1, agregacao: "mensal" as "mensal" | "anual"}
        const dadosRecebidos = await getDistribuicaoPorSexo({ano: query.ano, mes: query.mes, agregacao: query.agregacao})
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
  }, [category])

  

  if (loading) return <Spinner text="Carregando..."/>
  if (error) return <div>{error}</div>
  return (
    <div className="w-full mx-auto p-4">
      <DataTable<DistribuicaoPorSexo, DistribuicaoPorSexo>
        data={dados}
        columns={columns}
      />
    </div>
  )
}
