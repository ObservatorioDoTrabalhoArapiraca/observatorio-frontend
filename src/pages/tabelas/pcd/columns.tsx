
import { capitalizeFirstLetter } from "@/Utils/capitalizeFirstLettrer"
import { ProfissoesPorDeficiencia } from "@/types"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<ProfissoesPorDeficiencia>[] = [
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
    accessorKey: "tipo_deficiencia",
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
          {row.original.tipo_deficiencia}
        
        </div>
      )
    },
  },
  {
    accessorKey: "tipo_deficiencia_descricao",
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
          {row.original.tipo_deficiencia_descricao}
        </div>
      )
    },
  },
  // {
  //   accessorKey: "mes",
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
  //         {row.original.mes}
           
  //       </div>
  //     )
  //   },
  // },
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
