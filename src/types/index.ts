export interface DistribuicaoPorEscolaridade {
  ano: number
  escolaridade_codigo?: string
  escolaridade_descricao: string
  mes: number
  percentual: string
  total_movimentacoes: number
}
export interface DistribuicaoPorFaixaEtaria {
  ano: number
  mes: number
  faixa_etaria: string
  percentual: string
  total_movimentacoes: number
}
export interface SalarioPorProfissao {
  ano: number
  escolaridade_codigo?: string
  escolaridade_descricao: string
  mes: number
  percentual: string
  total_movimentacoes: number
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
