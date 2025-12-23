import { DataTable } from "@/components/table/DataTable"
import {
  getSalarioPorEscolaridade
} from "@/core/services/salarioService"
import { columns } from "@/pages/tabelas/escolaridade/columns"
import { SalarioPorEscolaridade } from "@/types"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function DemoPage() {
  const [dados, setDados] = useState<SalarioPorEscolaridade[]>([])
  const { category } = useParams()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const dados = await getSalarioPorEscolaridade()
      setDados(dados)
      setLoading(false)
    }
    fetchData()
  }, [category])

  if (loading) return <div>Carregando...</div>
  return (
    <div className="w-full mx-auto p-4">
      <DataTable<SalarioPorEscolaridade, unknown>
        data={dados}
        columns={columns}
      />
    </div>
  )
}
