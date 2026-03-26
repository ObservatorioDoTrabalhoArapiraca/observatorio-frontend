
import { DataTable } from "@/components/table/DataTable"
import { TableSkeleton } from "@/components/table/TableSkeleton"
import { Spinner } from "@/components/ui/spinner"
import { getSaldoPorOcupacao } from "@/core/services/cagedArapiracaServices"
import { columns } from "@/pages/tabelas/saldoocupacao/columns"

import { SaldoOcupcacao, SaldoPorOcupacao } from "@/types"
import { PaginationState } from "@tanstack/react-table"

import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { toast } from "sonner"

export default function TablePage() {
  const [dados, setDados] = useState<SaldoPorOcupacao | null>(null)
  const { category } = useParams()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const [searchParams, setSearchParams] = useSearchParams();

    const [lastTotalPages, setLastTotalPages] = useState(1);
    const [pagination, setPagination] = useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10
    });
  
  const parseAnoFromUrl = (): number | null => {
      const anoParam = searchParams.get("ano");
      if (!anoParam) return null;
      return anoParam ? Number(anoParam) : null;
    };
  
    const parseMesFromUrl = (): number | null => {
      const mesParam = searchParams.get("mes");
      if (!mesParam) return null;
      return mesParam ? Number(mesParam) : null;
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
    setLoading(true)
    setError(null)
    const fetchData = async () => {
      try {
        
        const dados = await getSaldoPorOcupacao({
          ...(ano !== null && { ano }),
          ...(mes !== null && { mes }),
          agregacao: isAnual ? "anual" : "mensal",
          page: pagination.pageIndex + 1, // API espera página base 1
          page_size: pagination.pageSize,
        })
        if (dados) {
          setDados(dados);
          setLastTotalPages(dados.total_pages);
          // NÃO use dados.current_page para setar o pageIndex aqui agora, 
          // pois se a API estiver mandando errado (Base 0), vai entrar em loop.
        }
      } catch (error) {
        setPagination(prev => ({ ...prev, pageIndex: 0 }))
        toast.error("Erro ao buscar dados")
        setError("Erro ao buscar dados")
      } finally {
        setLoading(false)
      }

    }
    fetchData()
  }, [category, ano, mes, isAnual,  pagination.pageIndex, pagination.pageSize])

  

  if (loading) return <Spinner text="Carregando..."/>
  if (error) return <div>{error}</div>
  return (
    <div className="w-full mx-auto p-4">
      {loading ? (
        // Renderiza o esqueleto enquanto carrega
        <TableSkeleton rows={10} columns={3} />
      ) : (
        <DataTable<SaldoOcupcacao, SaldoOcupcacao>
          data={dados?.results || []}
          paginationState={pagination}
          setPaginationState={setPagination}
          totalPages={lastTotalPages}
          totalCount={dados?.count || 0}
          columns={columns}
          filters={{
            ano,
            mes,
            isAnual,
            onAnoChange: handleAnoChange,
            onMesChange: handleMesChange,
            onAgregacaoChange: handleAgregacaoChange,
          }}
          searchPlaceholder="filtrar por profissão"
          searchColumn="cbo_descricao"
        />
      )}
    </div>
  )
}
