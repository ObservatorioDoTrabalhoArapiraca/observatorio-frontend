import { DataTable } from "@/components/table/DataTable";
import { TableSkeleton } from "@/components/table/TableSkeleton";
import { Spinner } from "@/components/ui/spinner";
import { getTotalMovimentacao } from "@/core/services/cagedArapiracaServices";
import { columns } from "@/pages/rais/tabelas/totalmovimentacoesano/columns";
import { AnoTotalMovimentacoes } from "@/types";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { toast } from "sonner";

export default function TotalMovimentacoesAnoTablePage() {
 const [dados, setDados] = useState<AnoTotalMovimentacoes | null>(null)
  const [loading, setLoading] = useState<boolean>(true);
  const { category } = useParams()
  const [error, setError] = useState<string | null>(null)
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
        ano: novoAno.toString(),
        ...(mes !== null && { mes: mes.toString() }),
        agregacao: isAnual ? "anual" : "mensal",
      });
    };
  }
 
  const handleMesChange = (novoMes: number | null) => {
    setMes(novoMes);
    if (ano !== null) {
      setSearchParams({
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
     setLoading(true);
     setError(null);
     const fetchData = async () => {
       try {
         const dados = await getTotalMovimentacao({
          ...(ano !== null && { ano }),
          ...(mes !== null && { mes }),
           agregacao: isAnual ? "anual" : "mensal",

        });
        if (dados) {
          setDados(dados);
        }
         
       }
       catch (err) {
         toast.error("Erro ao buscar dados")
         setError("Erro ao buscar dados")
       } finally {
         setLoading(false)
       }
      }
      fetchData()
   }, [category, ano, mes, isAnual]);
  
   if (loading) return <Spinner text="Carregando..."/>
   if (error) return <div className="text-red-500 p-4">Erro: {error}</div>;
  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <TableSkeleton rows={10} columns={3} />
      ) : (
          <DataTable<AnoTotalMovimentacoes, AnoTotalMovimentacoes>
            columns={columns}
            data={dados ? [
              {
                total_movimentacoes: dados.total_movimentacoes,
                filtros_aplicados: {
                    ano: dados.filtros_aplicados?.ano,
                    mes: dados.filtros_aplicados?.mes,
                    agregacao: dados.filtros_aplicados?.agregacao as "anual" | "mensal",
                  },
                  paginacao: null,
                  resultados: null
                
              }
            ] : []}
            
           paginationState={{pageIndex: 0, pageSize: 10}}
            filters={{
              ano,
              mes,
              isAnual,
              onAnoChange: handleAnoChange,
              onMesChange: handleMesChange,
              onAgregacaoChange: handleAgregacaoChange,
            }}
          />
      )}
    </div>
  )
}
