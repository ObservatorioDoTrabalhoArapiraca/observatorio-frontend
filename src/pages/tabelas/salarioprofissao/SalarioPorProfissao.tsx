import { DataTable } from "@/components/table/DataTable"
import { Spinner } from "@/components/ui/spinner"
import { getSalarioPorProfissao } from "@/core/services/cagedArapiracaServices"
import { columns } from "@/pages/tabelas/salarioprofissao/columns"
import { Profissao, SalarioPorProfissao } from "@/types"

import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { toast } from "sonner"

export default function TablePage() {
  const [dados, setDados] = useState<SalarioPorProfissao | null>(null)
  const { category } = useParams()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState<number>(1); // Página atual (base 0)
  const [pageSize, setPageSize] = useState<number>(10); // Tamanho da página

  const [searchParams, setSearchParams] = useSearchParams();
  
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
        console.log("Bbuscando dados com os parâmetros:", {
          ano,
          mes,
          agregacao: isAnual ? "anual" : "mensal",
          page: currentPage + 1,
          page_size: pageSize,
        });
        const dados = await getSalarioPorProfissao({
          ...(ano !== null && { ano }),
          ...(mes !== null && { mes }),
          agregacao: isAnual ? "anual" : "mensal",
          page: currentPage + 1, // API espera página base 1
          page_size: pageSize,
        })

        console.log("Dados retornados pela API:", dados);
        setDados(dados);
      } catch (error) {
        console.error("❌ Erro ao buscar dados:", error)
        toast.error("Erro ao buscar dados")
        setError("Erro ao buscar dados")
      } finally {
        setLoading(false)
      }

    }
    fetchData()
  }, [category, ano, mes, isAnual, currentPage, pageSize])

  useEffect(() => {
    console.log("Estado atualizado de dados:", dados);
  }, [dados]);

  console.log("Dados passados para DataTable:", dados);
  console.log("Estado de paginação:", {
    pageIndex: currentPage,
    pageSize: pageSize,
    totalPages: dados?.total_pages,
  }); 

  if (loading) return <Spinner text="Carregando..."/>
  if (error) return <div>{error}</div>
  return (
    <div className="w-full mx-auto p-4">
      <DataTable<Profissao, Profissao>
        data={dados?.results || []}
        pagination={{
          pageIndex: currentPage, // Converte para base 0
          totalPages: dados?.total_pages || 1,
          pageSize: dados?.page_size || 10,
          onPageChange: (page) => {
            console.log("Mudando para a página:", page); // Log para verificar a página
            setCurrentPage(page); // Converte de volta para base 1
          },
          onPageSizeChange: setPageSize,
        }}
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
    </div>
  )
}
