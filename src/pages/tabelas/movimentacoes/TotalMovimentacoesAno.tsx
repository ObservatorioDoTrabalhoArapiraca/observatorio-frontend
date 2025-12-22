import { DataTable } from "@/components/table/DataTable"
import { columns, Payment } from "@/pages/tabelas/movimentacoes/columns"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



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
 const [dados, setDados] = useState<Payment[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const { category } = useParams()
   useEffect(() => {
      setLoading(true);
      const fetchData = async () => {
        const dados = await getData()
        setDados(dados);
    
            setLoading(false);
          ;
      }
      fetchData()
   }, [category]);
  
   if (loading) return <div>Carregando...</div>

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={dados} />
    </div>
  )
}
