import { AnoTotalMovimentacoes } from "@/types"
import { ColumnDef } from "@tanstack/react-table"

// TODO: testar quando a api voltar a retornar o ano
export const columns: ColumnDef<AnoTotalMovimentacoes>[] = [
  {
    accessorKey: "ano",
    header: "Ano",
    cell: ({ row }) => {
      const ano = row.original.filtros_aplicados?.ano 
      ?? row.original.filtros_aplicados?.ano 
      ?? "Todos os anos";
    return <div>{ano}</div>;
  
    },
  },
  {
    accessorKey: "total_movimentacoes",
    header: "Total Movimentacoes",
    cell: ({ row }) => {
      return (
        <div>
         {row.original.total_movimentacoes}
        </div>
      )
    },
  },
]
