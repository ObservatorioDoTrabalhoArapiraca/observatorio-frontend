
import { capitalizeFirstLetter } from "@/Utils/capitalizeFirstLettrer"
import { FaixaEtaria } from "@/types"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<FaixaEtaria>[] = [
  {
    accessorKey: "ano",
    header: ({ column }) => {
      return (
        <div className="font-bold ">
          {capitalizeFirstLetter(column.id)
            .replace(/_/g, " ") 
            }
        </div>
      )
    },
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
    accessorKey: "faixa_etaria",
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
          {row.original.faixa_etaria}
        </div>
      )
    },
  },
  {
    accessorKey: "saldo_movimentacoes",
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
          {row.original.saldo_movimentacoes}
        </div>
      )
    },
  },
  {
    accessorKey: "total_admissoes",
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
          {row.original.total_admissoes}
        </div>
      )
    },
  },
  {
    accessorKey: "total_demissoes",
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
          {row.original.total_demissoes}
        </div>
      )
    },
  },
  {
    accessorKey: "percentual",
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
          {row.original.percentual}%
           
        </div>
      )
    },
  },
  {
    accessorKey: "total_movimentacoes",
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
          {row.original.total_movimentacoes}
        </div>
      )
    },
  },
]
