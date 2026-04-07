
import { capitalizeFirstLetter } from "@/Utils/capitalizeFirstLettrer"
import { SalarioBase } from "@/types"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<SalarioBase>[] = [
  {
    accessorKey: "desde",
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
          {row.original.desde}
        </div>
      )
    },
  },
  {
    accessorKey: "valor",
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
          {row.original.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </div>
      )
    },
  },
  {
    accessorKey: "legislacao",
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
          {row.original.legislacao}
        
        </div>
      )
    },
  },
  {
    accessorKey: "reajuste",
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
          {row.original.reajuste}%
           
        </div>
      )
    },
  },
]
