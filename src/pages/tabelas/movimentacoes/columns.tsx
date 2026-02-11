import { Movimentacao } from "@/types"
import { ColumnDef } from "@tanstack/react-table"


export const columns: ColumnDef<Movimentacao>[] = [
  {
    accessorKey: "competencia_movimentacao",
    header: "Competência",
    cell: ({ row }) => row.original.competencia_movimentacao,
  },
  {
    accessorKey: "regiao_descricao",
    header: "Região",
    cell: ({ row }) => row.original.regiao_descricao,
  },
  {
    accessorKey: "municipio_descricao",
    header: "Município",
    cell: ({ row }) => row.original.municipio_descricao,
  },
  {
    accessorKey: "cbo2002_ocupacao_descricao",
    header: "Ocupação",
    cell: ({ row }) => row.original.cbo2002_ocupacao_descricao,
  },
  {
    accessorKey: "salario",
    header: "Salário",
    cell: ({ row }) => `R$ ${parseFloat(row.original.salario).toFixed(2)}`,
  },
  {
    accessorKey: "tipo_movimentacao_descricao",
    header: "Tipo Movimentação",
    cell: ({ row }) => row.original.tipo_movimentacao_descricao,
  },
  
]
