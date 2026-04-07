
import { capitalizeFirstLetter } from "@/Utils/capitalizeFirstLettrer"
import { Escolaridade } from "@/types"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<Escolaridade>[] = [
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
    accessorKey: "escolaridade_descricao",
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
          {row.original.escolaridade_descricao}
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
