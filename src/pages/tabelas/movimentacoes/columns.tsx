import { Movimentacao } from "@/types"
import { ColumnDef } from "@tanstack/react-table"


export const columns: ColumnDef<Movimentacao>[] = [
  {
    accessorKey: "competencia_movimentacao",
    header: "Competência",
    cell: ({ row }) => row.original.competencia_movimentacao.toString().slice(4, 6) + "/" + row.original.competencia_movimentacao.toString().slice(0, 4),
  },
  {
    accessorKey: "municipio_descricao",
    header: "Município",
    cell: ({ row }) => row.original.municipio_descricao,
  },
  {
    accessorKey: "cbo2002_ocupacao_descricao",
    header: "Ocupação (CBO2002)",
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
  {
    accessorKey: "secao_descricao",
    header: "Seção",
    cell: ({ row }) => row.original.secao_descricao,
  },
  {
    accessorKey: "subclasse_descricao",
    header: "Subclasse",
    cell: ({ row }) => row.original.subclasse_descricao,
  },
  {
    accessorKey: "categoria_descricao",
    header: "Categoria",
    cell: ({ row }) => row.original.categoria_descricao,
  },
  {
    accessorKey: "grau_instrucao_descricao",
    header: "Escolaridade",
    cell: ({ row }) => row.original.grau_instrucao_descricao,
  },
  {
    accessorKey: "raca_cor_descricao",
    header: "Raça/Cor",
    cell: ({ row }) => row.original.raca_cor_descricao,
  },
  {
    accessorKey: "sexo_descricao",
    header: "Sexo",
    cell: ({ row }) => <p>{row.original.sexo_descricao === "Homem" ? "Masculino" : "Feminino"}</p>
  },
  {
    accessorKey: "tipo_empregador_descricao",
    header: "Tipo Empregador",
    cell: ({ row }) => row.original.tipo_empregador_descricao,
  },
  {
    accessorKey: "tipo_estabelecimento_descricao",
    header: "Tipo Estabelecimento",
    cell: ({ row }) => row.original.tipo_estabelecimento_descricao,
  },
  {
    accessorKey: "tipo_movimentacao_descricao",
    header: "Tipo Movimentação",
    cell: ({ row }) => row.original.tipo_movimentacao_descricao,
  },
  {
    accessorKey: "tipo_deficiencia_descricao",
    header: "Tipo Deficiência",
    cell: ({ row }) => <p>{row.original.tipo_deficiencia_descricao === "Intelectual (Mental)" ? "Intelectual" : row.original.tipo_deficiencia_descricao}</p>
  },
  {
    accessorKey: "idade",
    header: "Idade",
    cell: ({ row }) => row.original.idade,
  },
  {
    accessorKey: "horas_contratuais",
    header: "Horas Contratuais",
    cell: ({ row }) => row.original.horas_contratuais,
  },
  {
    accessorKey: "salario",
    header: "Salário",
    cell: ({ row }) => `R$ ${parseFloat(row.original.salario).toFixed(2)}`,
  },
  {
    accessorKey: "tamanho_estabelecimento",
    header: "Tamanho Estabelecimento",
    cell: ({ row }) => row.original.tamanho_estabelecimento,
  },
  
]
