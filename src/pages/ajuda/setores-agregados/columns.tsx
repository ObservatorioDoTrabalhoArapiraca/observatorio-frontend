
import { capitalizeFirstLetter } from "@/Utils/capitalizeFirstLettrer"
import { SetoresAgregados } from "@/types"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<SetoresAgregados>[] = [
  {
    accessorKey: "secao_inicio",
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
          {row.original.secao_inicio}
        </div>
      )
    },
  },
  {
    accessorKey: "secao_fim",
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
          {row.original.secao_fim}
        </div>
      )
    },
  },
  {
    accessorKey: "divisao_inicio",
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
          {row.original.divisao_inicio}
        
        </div>
      )
    },
  },
  {
    accessorKey: "divisao_fim",
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
          {row.original.divisao_fim}
           
        </div>
      )
    },
  },
  {
    accessorKey: "denominacao",
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
          {row.original.denominacao}
        </div>
      )
    },
  },
]
