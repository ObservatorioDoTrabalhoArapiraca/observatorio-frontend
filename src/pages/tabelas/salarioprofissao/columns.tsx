
import { Profissao } from "@/types"
import { capitalizeFirstLetter } from "@/Utils/capitalizeFirstLettrer"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<Profissao>[] = [
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
    accessorKey: "salario_medio",
    header: "Salário Médio",
    cell: ({ row }) => {
      return (
        <div>
          {row.original.salario_medio.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
           
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
]
