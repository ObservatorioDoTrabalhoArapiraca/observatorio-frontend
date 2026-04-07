import { DataTable } from "@/components/table/DataTable"
import { TableSkeleton } from "@/components/table/TableSkeleton"
import { Dialog } from "@/components/ui/dialog"
import { Spinner } from "@/components/ui/spinner"
import { getSetoresAgregados } from "@/core/services/cagedArapiracaServices"
import { columns } from "@/pages/ajuda/setores-agregados/columns"

import { SetoresAgregados } from "@/types"
import { Title } from "@radix-ui/react-dialog"

import { useEffect, useState } from "react"

import { toast } from "sonner"

export default function TablePage() {
  const [dados, setDados] = useState<SetoresAgregados[] | null>(null)

  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  
  useEffect(() => {
    setLoading(true)
    setError(null)
    const fetchData = async () => {
      try {
        const response = await getSetoresAgregados()
        if (Array.isArray(response)) {
          setDados(response);
        }
      } catch (error) {
        toast.error("Erro ao buscar dados")
        setError("Erro ao buscar dados")
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <Spinner text="Carregando..."/>
  if (error) return <div>{error}</div>
  return (
    <div className="w-full mx-auto p-4">
      {loading ? (
        <TableSkeleton rows={10} columns={3} />
      ) : (
        
          <Dialog>
          <Title className="font-bold py-4">Setores Agregados</Title>
        <DataTable<SetoresAgregados, SetoresAgregados>
          data={dados ? dados : []}
          columns={columns} filters={"" as any}
          />
          </Dialog>
      )}
    </div>
  )
}
