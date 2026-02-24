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
  sem: {
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
    color: "#321208",
  },
  parda: {
    label: "Parda",
    color: "#6D2711",
  },
  amarela: {
    label: "Amarela",
    color: "#E18C2B",
  },
  indigena: {
    label: "Indígena",
    color: "#8D642F",
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
  "18_24": {
    label: "18-24 anos",
    color: "#22c55e",
  },
  "25_29": {
    label: "25-29 anos",
    color: "#3b82f6",
  },
  "30_39": {
    label: "30-39 anos",
    color: "#8b5cf6",
  },
  "40_49": {
    label: "40-49 anos",
    color: "#f97316",
  },
  "50_64": {
    label: "50-64 anos",
    color: "#ef4444",
  },
  "65_mais": {
    label: "65+ anos",
    color: "#6b7280",
  },
};

export const profissaoChartConfig: ChartConfig = {
  // TODO: ver uma forma de gerar isso dinamicamente a partir dos dados, para não ficar hardcoded - tentar agregar por setor ou algo assim, para ter uma visão mais geral e não ficar com 100 profissões diferentes.
}