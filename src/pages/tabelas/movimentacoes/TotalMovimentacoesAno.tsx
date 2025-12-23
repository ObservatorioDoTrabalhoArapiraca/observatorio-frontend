import { DataTable } from "@/components/table/DataTable"
import { getAnoTotalMovimentacoes } from "@/core/services/salarioService";
import { columns } from "@/pages/tabelas/movimentacoes/columns"
import { AnoTotalMovimentacoes } from "@/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DemoPage() {
 const [dados, setDados] = useState<AnoTotalMovimentacoes[]>([])

  const [loading, setLoading] = useState<boolean>(true);
  const { category } = useParams()
   useEffect(() => {
      setLoading(true);
      const fetchData = async () => {
        const dados = await getAnoTotalMovimentacoes()
        setDados(dados);
    
            setLoading(false);
          ;
      }
      fetchData()
   }, [category]);
  
   if (loading) return <div>Carregando...</div>

  return (
    <div className="container mx-auto p-4">
      <DataTable columns={columns} data={dados} />
    </div>
  )
}
