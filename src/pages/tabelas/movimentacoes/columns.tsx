import { AnoTotalMovimentacoes } from "@/types"
import { capitalizeFirstLetter } from "@/Utils/capitalizeFirstLettrer"
import { ColumnDef } from "@tanstack/react-table"


export const columns: ColumnDef<AnoTotalMovimentacoes>[] = [
  {
    accessorKey: "ano",
    header: ({ column }) => {
      return (
        <div className="font-bold">
          {capitalizeFirstLetter(column.id).replace(/_/g, " ")}
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
  },
]
