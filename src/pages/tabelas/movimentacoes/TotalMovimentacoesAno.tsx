import { DataTable } from "@/components/table/DataTable"
import { Spinner } from "@/components/ui/spinner";
import { getTotalMovimentacao } from "@/core/services/cagedArapiracaServices";
import { columns } from "@/pages/tabelas/movimentacoes/columns"
import { AnoTotalMovimentacoes } from "@/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DemoPage() {
 const [dados, setDados] = useState<AnoTotalMovimentacoes[]>([])

  const [loading, setLoading] = useState<boolean>(true);
  const { category } = useParams()
  const [error, setError] = useState<string | null>(null)
  const query = {ano: 2020, mes: 1, agregacao: "mensal" as "mensal" | "anual"}
   useEffect(() => {
     setLoading(true);
     setError(null);
     const fetchData = async () => {
       try {
             
         const dados = await getTotalMovimentacao({ ano: query.ano, mes: query.mes, agregacao: query.agregacao })
         setDados(dados);
         
         setLoading(false);
         ;
       }
       catch (err) {
         console.error("❌ Erro ao buscar dados:", error, err)
         setError("Erro ao buscar dados")
       } finally {
         setLoading(false)
       }
       fetchData()
     }
   }, [category]);
  
   if (loading) return <Spinner text="Carregando..."/>

  return (
    <div className="container mx-auto p-4">
      <DataTable columns={columns} data={dados} />
    </div>
  )
}
