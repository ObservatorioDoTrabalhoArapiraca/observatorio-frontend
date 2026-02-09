import { DataTable } from "@/components/table/DataTable"
import { Spinner } from "@/components/ui/spinner"
import { getProfissoesPorDeficiencia } from "@/core/services/cagedArapiracaServices"
// import { getProfissoesPorDeficiencia } from "@/core/services/salarioService"
import { columns } from "@/pages/tabelas/pcd/columns"
import { ProfissoesPorDeficiencia } from "@/types"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function TablePage() {
  const [dados, setDados] = useState<ProfissoesPorDeficiencia[]>([])
  const { category } = useParams()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  
  
  useEffect(() => {
    setLoading(true)
    setError(null)
    const fetchData = async () => {
      try {
        const query = {ano: 2020, mes: 1, agregacao: "mensal" as "mensal" | "anual"}
        const dadosRecebidos = await getProfissoesPorDeficiencia({ano: query.ano, mes: query.mes, agregacao: query.agregacao})
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
      <DataTable<ProfissoesPorDeficiencia, ProfissoesPorDeficiencia>
        data={dados}
        columns={columns}
      />
    </div>
  )
}
