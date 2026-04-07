
import { SaldoOcupcacao } from "@/types"
import { capitalizeFirstLetter } from "@/Utils/capitalizeFirstLettrer"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<SaldoOcupcacao>[] = [
  {
    accessorKey: "ano",
    header: "Ano",
    cell: ({ row }) => {
      return (
        <div>
          {row.original.ano}
        </div>
      )
    },
  },
  {
    accessorKey: "mes",
    header: ({ column }) => {
      return (
        <div className="font-bold ">
          {capitalizeFirstLetter(column.id).replace(/_/g, " ")}
        </div>
      )
    },
    cell: ({ row }) => {
      return (
        <div>
          {row.original.mes}
           
        </div>
      )
    },
  },
  {
    accessorKey: "cbo_descricao",
    header: "Profissão (CBO)",
    cell: ({ row }) => {
      return (
        <div>
          {row.original.cbo_descricao}
        </div>
      )
    },
  },
  {
    accessorKey: "saldo_movimentacoes",
    header: "Saldo Movimentações",
    cell: ({ row }) => {
      return (
        <div>
          {row.original.saldo_movimentacoes}
           
        </div>
      )
    },
  },
  {
    accessorKey: "total_admissoes",
    header: "Total Admissões",
    cell: ({ row }) => {
      return (
        <div>
          {row.original.total_admissoes}
           
        </div>
      )
    },
  },
  {
    accessorKey: "total_demissoes",
    header: "Total Demissões",
    cell: ({ row }) => {
      return (
        <div>
          {row.original.total_demissoes}
           
        </div>
      )
    },
  },
  {
    accessorKey: "total_movimentacoes",
    header: "Total Movimentações",
    cell: ({ row }) => {
      return (
        <div>
          {row.original.total_movimentacoes}
           
        </div>
      )
    },
  },
  {
    accessorKey: "percentual",
    header: "Percentual",
    cell: ({ row }) => {
      return (
        <div>
          {row.original.percentual}
           
        </div>
      )
    },
  },
]
