import { DataTable } from "@/components/table/DataTable"
import { columns, Payment } from "@/pages/tabelas/escolaridade/columns"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

export default function DemoPage() {
  const [dados, setDados] = useState<Payment[]>([])
  const { category } = useParams()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const dados = await getData()
      setDados(dados)

      setLoading(false)
    }
    fetchData()
  }, [category])

  if (loading) return <div>Carregando...</div>
  return <DataTable<Payment, unknown> data={dados} columns={columns} />
}
