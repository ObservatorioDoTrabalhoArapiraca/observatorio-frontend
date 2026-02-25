
import { capitalizeFirstLetter } from "@/Utils/capitalizeFirstLettrer"
import { RacaCor } from "@/types"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<RacaCor>[] = [
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
    accessorKey: "raca_cor_descricao",
    header: ({ column }) => {
      return (
        <div className="font-bold ">
          {capitalizeFirstLetter(column.id).replace(/_/g, "/").slice(0, -10)}
        </div>
      )
    },
    cell: ({ row }) => {
      return (
        <div>
          {row.original.raca_cor_descricao}
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
  // {
  //   accessorKey: "total_movimentacoes",
  //   header: ({ column }) => {
  //     return (
  //       <div className="font-bold ">
  //         {capitalizeFirstLetter(column.id).replace(/_/g, " ")}
  //       </div>
  //     )
  //   },
  //   cell: ({ row }) => {
  //     return (
  //       <div>
  //         {row.original.total_movimentacoes}
  //       </div>
  //     )
  //   },
  // },
]
