import { DataTable } from "@/components/table/DataTable"
import { getDistribuicaoFaixaEtaria } from "@/core/services/cagedArapiracaServices"
import { columns } from "@/pages/tabelas/escolaridade/columns"
import { DistribuicaoPorFaixaEtaria } from "@/types"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function TablePage() {
  const [dados, setDados] = useState<DistribuicaoPorFaixaEtaria[]>([])
  const { category } = useParams()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const query = {ano: 2020, mes: 1, agregacao: "mensal" as "mensal" | "anual"}
  
  
  useEffect(() => {
    setLoading(true)
    setError(null)
    const fetchData = async () => {
      try {
        console.log("🔄 Buscando dados com query:", query)
        const dados = await getDistribuicaoFaixaEtaria({ano: query.ano, mes: query.mes, agregacao: query.agregacao})
        console.log("✅ Dados recebidos:", dados)
        setDados(dados)
      } catch (error) {
        console.error("❌ Erro ao buscar dados:", error)
        setError("Erro ao buscar dados")
      } finally {
        setLoading(false)
      }

    }
    fetchData()
  }, [category, query.ano, query.mes, query.agregacao])

  console.log("dados", dados);
  

  if (loading) return <div>Carregando...</div>
  if (error) return <div>{error}</div>
  return (
    <div className="w-full mx-auto p-4">
      <DataTable<DistribuicaoPorFaixaEtaria, DistribuicaoPorFaixaEtaria>
        data={dados}
        columns={columns}
      />
    </div>
  )
}
