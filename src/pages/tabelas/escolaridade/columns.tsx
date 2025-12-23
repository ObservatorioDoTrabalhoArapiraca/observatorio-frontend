
import { ColumnDef } from "@tanstack/react-table"
import { capitalizeFirstLetter } from "@/Utils/capitalizeFirstLettrer"
import { SalarioPorEscolaridade } from "@/types"

export const columns: ColumnDef<SalarioPorEscolaridade>[] = [
  {
    accessorKey: "grau_de_instrucao",
    header: ({ column }) => {
      return (
        <div className="font-bold ">
          {capitalizeFirstLetter(column.id)
            .replace(/_/g, " ") 
            }
        </div>
      )
    },
  },
  {
    accessorKey: "saldo",
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
          {row.original.saldo.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
      )
    },
  },
  {
    accessorKey: "maior",
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
          {row.original.maior.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
      )
    },
  },
  {
    accessorKey: "menor",
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
          {row.original.menor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
      )
    },
  },
]
