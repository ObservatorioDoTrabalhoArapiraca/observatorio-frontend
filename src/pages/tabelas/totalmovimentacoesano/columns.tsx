import { AnoTotalMovimentacoes } from "@/types"
import { ColumnDef } from "@tanstack/react-table"


export const columns: ColumnDef<AnoTotalMovimentacoes>[] = [
  {
    accessorKey: "filtros_aplicados.ano",
    header: "Ano",
    cell: ({ row }) => {
      return (
        <div>
          {row.original.filtros_aplicados.ano}
        </div>
      )
    },
  },
  {
    accessorKey: "total_movimentacoes",
    header: "Total Movimentacoes",
    cell: ({ row }) => {
      return (
        <div>
         {row.original.total_movimentacoes}
        </div>
      )
    },
  },
]
