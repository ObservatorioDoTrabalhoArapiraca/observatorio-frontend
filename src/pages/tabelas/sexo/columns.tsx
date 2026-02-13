
import { capitalizeFirstLetter } from "@/Utils/capitalizeFirstLettrer"
import { Sexo } from "@/types"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<Sexo>[] = [
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
  // {
  //   accessorKey: "escolaridade_codigo",
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
  //         {row.original.escolaridade_codigo}
        
  //       </div>
  //     )
  //   },
  // },
  {
    accessorKey: "sexo_descricao",
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
          {row.original.sexo_descricao}
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
