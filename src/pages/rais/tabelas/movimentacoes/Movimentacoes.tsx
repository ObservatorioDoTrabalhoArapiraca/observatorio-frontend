import { DataTable } from "@/components/table/DataTable";
import { Spinner } from "@/components/ui/spinner";
import { getMovimentacoes } from "@/core/services/cagedArapiracaServices";
import { columns } from "@/pages/tabelas/movimentacoes/columns";
import { Movimentacao } from "@/types";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
// OBS: essa tabela for removida do frontend por não ser necessária segundo o Levi. Eu mantive o código pois caso seja necessário refazer a tabela de movimentações já tem pronta aqui.
export default function MovimentacoesTablePage() {
 const [dados, setDados] = useState<Movimentacao[]>([])
  
  const [loading, setLoading] = useState<boolean>(true);
  const { category } = useParams()
  const [error, setError] = useState<string | null>(null);
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
        ano: novoAno?.toString(),
        ...(mes !== null && { mes: mes?.toString() }),
        agregacao: isAnual ? "anual" : "mensal",
      });
    }
  };
 
  const handleMesChange = (novoMes: number | null) => {
    setMes(novoMes);
    if (ano !== null) {

      setSearchParams({
        // isso aqui muda?
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
     const fetchData = async () => {
     
       setLoading(true);
       setError(null);
       try {
         const dados = await getMovimentacoes({
            ...(ano !== null && { ano }),
            ...(mes !== null && { mes }),
            agregacao: isAnual ? "anual" : "mensal",
            detalhes: true,
          })
           
     
         setDados(dados.resultados);
         setLoading(false);
         
       }
       catch (err) {
         console.error("❌ Erro ao buscar dados:", error, err)
         toast.error("Erro ao buscar dados")
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
