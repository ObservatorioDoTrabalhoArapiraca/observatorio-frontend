export const naviLinks = [
  { name: "Inicio", path: "/" },
  { name: "O Projeto", path: "/project" },
  {
    name: "Tabelas e Gráficos",
    children: [
      { name: "Tabelas", path: "/tabelas/escolaridade" },
      { name: "Gráficos", path: "/graficos/todos" },
    ],
  },
  {
    name: "Boletins e Documentos",
    children: [
      { name: "Conjunturais", path: "/boletim/conjuntural" },
      { name: "Temático", path: "/boletim/tematico" },
      { name: "Anual", path: "/boletim/anual" },
      { name: "Mensal", path: "/boletim/mensal" },
    ],
  },
  { name: "Ajuda", path: "/ajuda" },
]

export const tableCategories = [
  // { label: "Movimentações", value: "movimentacoes" },
  { label: "Salário por Escolaridade", value: "escolaridade" },
  { label: "Salário por Profissão", value: "salarioporprofissao" },
  { label: "Saldo por Ocupação", value: "saldoocupacao" },
  { label: "Distribuição por sexo", value: "sexo" },
  { label: "Distribuição por setor", value: "setor" },
  { label: "Distribuição por Raça/Cor", value: "racacor" },
  { label: "Faixa Etária", value: "faixaetaria" },
  { label: "Profissões por Deficiência", value: "pcd" },
  { label: "Total de Movimentações por Ano", value: "totalmovimentacoesano" },
]

export const boletinsCategories = [
  { label: "conjunturais", value: "conjunturais" },
  { label: "Temático", value: "tematico" },
  { label: "Mensal", value: "mensal" },
  { label: "Anual", value: "anual" },
]
