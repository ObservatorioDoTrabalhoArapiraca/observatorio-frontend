import { AnoTotalMovimentacoesRais } from "@/types";
import { ColumnDef } from "@tanstack/react-table";


export const columns: ColumnDef<AnoTotalMovimentacoesRais>[] = [
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
    accessorKey: "mes",
    header: "Mês",
    cell: ({ row }) => {
      const mes = row.original.filtros_aplicados?.mes 
      ?? row.original.filtros_aplicados?.mes 
      ?? "Todos os meses";
    return <div>{mes}</div>;
  
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
