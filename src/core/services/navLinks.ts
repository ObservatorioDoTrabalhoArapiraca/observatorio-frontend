export const naviLinks = [
  { name: "Inicio", path: "/" },
  { name: "O Projeto", path: "/project" },
  {
    name: "Tabelas e Gráficos",
    children: [
      { name: "Tabelas", path: "/tabelas/escolaridade" },
      { name: "Gráficos", path: "/graficos/genero" },
    ],
  },
  {
    name: "Boletins e Documentos",
    children: [
      { name: "Conjunturais", path: "/boletim/conjuntural" },
      { name: "Temático", path: "/boletim/tematico" },
    ],
  },
  { name: "Ajuda", path: "/ajuda" },
]

export const tableCategories = [
  { label: "Salário por Escolaridade", value: "escolaridade" },
  { label: "Salário por Profissão", value: "profissao" },
  { label: "Distribuilção por sexo", value: "sexo" },
  { label: "Salário por Faixa Etária", value: "faixaetaria" },
  { label: "Total de Movimentações por Ano", value: "movimentacoes" },
  { label: "Profissões por Deficiência", value: "pcd" },
]
export const boletinsCategories = [
  { label: "conjunturais", value: "conjunturais" },
  { label: "Temático", value: "tematico" },
]
