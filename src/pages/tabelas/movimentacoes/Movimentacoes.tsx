import { DataTable } from "@/components/table/DataTable";
import { Spinner } from "@/components/ui/spinner";
import { getMovimentacoes } from "@/core/services/cagedArapiracaServices";
import { columns } from "@/pages/tabelas/movimentacoes/columns";
import { Movimentacao } from "@/types";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function MovimentacoesTablePage() {
 const [dados, setDados] = useState<Movimentacao[]>([])
  
  const [loading, setLoading] = useState<boolean>(true);
  const { category } = useParams()
  const [error, setError] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [ano, setAno] = useState<number>(Number(searchParams.get("ano")) || new Date().getFullYear());
  const [mes, setMes] = useState<number>(
    Number(searchParams.get("mes")) || 1
  );
  const [isAnual, setIsAnual] = useState<boolean>(searchParams.get("agregacao") === "anual");
// TODO: adicionar esses paramentros de filtro nas outras
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
     const fetchData = async () => {
     
       setLoading(true);
       setError(null);
       try {
             
         const dados = await getMovimentacoes({
           ano: ano, mes: mes, agregacao: isAnual ? "anual" : "mensal",
           detalhes: true
         });
         setDados(dados.resultados);
         setLoading(false);
         
       }
       catch (err) {
         console.error("❌ Erro ao buscar dados:", error, err)
         setError("Erro ao buscar dados")
       } finally {
         setLoading(false)
       }
      }
      fetchData()
   }, [category, ano, mes, isAnual]);
  
   if (loading) return <Spinner text="Carregando..."/>

  return (
    <div className="container mx-auto p-4">
      <DataTable columns={columns} data={dados}
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
