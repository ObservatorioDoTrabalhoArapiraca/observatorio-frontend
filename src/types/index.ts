export interface SalarioPorEscolaridade {
  grau_de_instrucao: string
  saldo: number
  maior: number
  menor: number
}

export interface MedianaSalario {
  sexo: string
  mediana: number
}

export interface AnoTotalMovimentacoes {
  ano: number
  total_movimentacoes: number
}

export interface SalarioPorProfissao {
  profissao: string
  maximo: number
  minimo: number
  media: number
  total?: number
}

export interface ProfissoesPorDeficiencia {
  cbo_2002_ocupacao: string
  total_deficientes: number
}

export type NaviLink = {
  name: string
  path?: string
  children?: {name: string, path: string}[]
}
