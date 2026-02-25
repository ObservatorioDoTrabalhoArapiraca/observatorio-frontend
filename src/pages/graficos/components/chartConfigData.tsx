import { ChartConfig } from "@/components/ui/chart";

export const sexoChartConfig: ChartConfig = {
  feminino: {
    label: "Feminino",
    color: "#ef4444", // red-500
  },
  masculino: {
    label: "Masculino",
    color: "#3b82f6", // blue-500
  },
};


export const escolaridadeChartConfig: ChartConfig = {
  analfabeto: {
    label: "Analfabeto",
    color: "#ef4444",
  },
  fundamental_incompleto: {
    label: "Fundamental Incompleto",
    color: "#f97316",
  },
  fundamental_completo: {
    label: "Fundamental Completo",
    color: "#eab308",
  },
  medio_incompleto: {
    label: "Médio Incompleto",
    color: "#84cc16",
  },
  medio_completo: {
    label: "Médio Completo",
    color: "#22c55e",
  },
  superior_incompleto: {
    label: "Superior Incompleto",
    color: "#14b8a6",
  },
  superior_completo: {
    label: "Superior Completo",
    color: "#3b82f6",
  },
  mestrado: {
    label: "Mestrado",
    color: "#8b5cf6",
  },
  doutorado: {
    label: "Doutorado",
    color: "#d946ef",
  },
};

export const deficienciaChartConfig: ChartConfig = {
  nao_deficiente: {
    label: "Sem Deficiência",
    color: "#ef4444",
  },
  fisica: {
    label: "Física",
    color: "#f97316",
  },
  auditiva: {
    label: "Auditiva",
    color: "#eab308",
  },
  visual: {
    label: "Visual",
    color: "#84cc16",
  },
  intelectual: {
    label: "Intelectual",
    color: "#22c55e",
  },
  multipla: {
    label: "Múltipla",
    color: "#14b8a6",
  },
  rehabilitado: {
    label: "Reabilitado",
    color: "#3b82f6",
  },
  nao_identificado: {
    label: "Não Identificado",
    color: "#8b5cf6",
  },
};
export const racaCorChartConfig: ChartConfig = {
  branca: {
    label: "Branca",
    color: "#FF9E92",
  },
  preta: {
    label: "Preta",
    color: "#442A21",
  },
  parda: {
    label: "Parda",
    color: "#986C49",
  },
  amarela: {
    label: "Amarela",
    color: "#A3721C",
  },
  indigena: {
    label: "Indígena",
    color: "#7C0A1D",
  },
  nao_informada: {
    label: "Não Informada",
    color: "#14b8a6",
  },
  nao_identificado: {
    label: "Não Identificado",
    color: "#8b5cf6",
  },
};

export const faixaEtariaChartConfig: ChartConfig = {
  ate_17_anos: {
    label: "Até 17 anos",
    color: "#f43f5e",
  },
  "18_24_anos": {
    label: "18-24 anos",
    color: "#22c55e",
  },
  "25_29_anos": {
    label: "25-29 anos",
    color: "#3b82f6",
  },
  "30_39_anos": {
    label: "30-39 anos",
    color: "#8b5cf6",
  },
  "40_49_anos": {
    label: "40-49 anos",
    color: "#f97316",
  },
  "50_64_anos": {
    label: "50-64 anos",
    color: "#ef4444",
  },
  "65_mais": {
    label: "65+ anos",
    color: "#6b7280",
  },
};
