export interface Escolaridade {
  ano: number
  escolaridade_codigo?: string
  escolaridade_descricao: string
  mes: number
  percentual: string
  total_movimentacoes: number
}
export interface DistribuicaoPorEscolaridade {
  count: number,
  total_pages: number,
  current_page: number,
  page_size: number,
  next: string | null,
  previous: string | null,
  results: Escolaridade[]
}

export interface RacaCor {
  ano: number
  raca_cor: string
  raca_cor_descricao: string
  mes: number
  percentual: string
  total_movimentacoes: number
}
export interface DistribuicaoPorRacaCor {
  count: number,
  total_pages: number,
  current_page: number,
  page_size: number,
  next: string | null,
  previous: string | null,
  results: RacaCor[]
}
export interface Profissao {
  ano: number
  cbo_codigo: string
  cbo_descricao: string
  mes: number
  salario_medio: number
  total_movimentacoes: number
  mov_low: number,
  mov_zero: number,
}
export interface SalarioPorProfissao {
  count: number,
  total_pages: number,
  current_page: number,
  page_size: number,
  next: string | null,
  previous: string | null,
  results: Profissao[]
}
export interface SaldoOcupcacao {
  ano: number
  cbo_codigo: string
  cbo_descricao: string
  mes: number
  salario_medio: number
  total_movimentacoes: number
  total_admissoes: number
  total_demissoes: number
  percentual: number
  saldo_movimentacoes: number
}

export interface SaldoPorOcupacao {
  count: number,
  total_pages: number,
  current_page: number,
  page_size: number,
  next: string | null,
  previous: string | null,
  results: SaldoOcupcacao[]
}

export interface Sexo {
  ano: number
  sexo_codigo?: string
  sexo_descricao: string
  total_movimentacoes: number
  mes: number
  percentual: string
}
export interface DistribuicaoPorSexo {
  count: number,
  total_pages: number,
  current_page: number,
  page_size: number,
  next: string | null,
  previous: string | null,
  results: Sexo[]
}
export interface Setor {
  ano: number
  secao?: string
  setor_denominacao: string
  total_movimentacoes: number
  mes: number
  percentual: string
}
export interface DistribuicaoPorSetor {
  count: number,
  total_pages: number,
  current_page: number,
  page_size: number,
  next: string | null,
  previous: string | null,
  results: Setor[]
}

export interface FaixaEtaria {
  ano: number
  faixa_etaria: string
  percentual: string
  mes: number
  total_movimentacoes: number
}
export interface DistribuicaoPorFaixaEtaria {
  count: number,
  total_pages: number,
  current_page: number,
  page_size: number,
  next: string | null,
  previous: string | null,
  results: FaixaEtaria[]
}

export interface MedianaSalario {
  sexo: string
  mediana: number
}

export interface AnoTotalMovimentacoes {
  total_movimentacoes: number,
  filtros_aplicados: {
    ano: number,
    agregacao: "mensal" | "anual",
    mes: number
  }
  paginacao: null
  resultados: null
}

export interface Movimentacao {
  id: number,
  competencia_movimentacao: number,
  municipio_codigo: number,
  municipio_descricao: string,
  cbo2002_ocupacao_codigo: number,
  cbo2002_ocupacao_descricao: string,
  grau_instrucao_codigo: number,
  grau_instrucao_descricao: string,
  raca_cor_codigo: number,
  raca_cor_descricao: string,
  sexo_codigo: number,
  sexo_descricao: string,
  tipo_deficiencia_codigo: number,
  tipo_deficiencia_descricao: string,
  saldo_movimentacao: number,
  idade: number,
  salario: string,
  criado_em: string,
  atualizado_em: string
  
}
export interface Movimentacoes {
  total_movimentacoes: number,
  filtros_aplicados: {
    ano: number,
    agregacao: "mensal" | "anual",
    mes: number
  }
  paginacao: {
    page: number,
    page_size: number,
    total_pages: number,
    links: {
      next: number | null,
      previous: number | null
    }
    
  },
  resultados: Movimentacao[]
}

// export interface SalarioPorProfissao {
  //   ano: number
  //   escolaridade_codigo?: string
  //   escolaridade_descricao: string
  //   mes: number
  //   percentual: string
  //   total_movimentacoes: number
  // }
  // export interface SalarioPorProfissao {
//   profissao: string
//   maximo: number
//   minimo: number
//   media: number
//   total?: number
// }

export interface Deficiencia {
  ano: number
  mes: number
  tipo_deficiencia: string
  tipo_deficiencia_descricao: string
  percentual: string
  total_movimentacoes: number
}
export interface ProfissoesPorDeficiencia {
  count: number,
  total_pages: number,
  current_page: number,
  page_size: number,
  next: string | null,
  previous: string | null,
  results: Deficiencia[]
}

export type NaviLink = {
  name: string
  path?: string
  children?: {name: string, path: string}[]
}

export interface SetoresAgregados {
  id: number,
  denominacao: string,
  secao_inicio: string,
  secao_fim: string,
  divisao_inicio: number,
  divisao_fim: number
}
export interface SalarioBase {
    desde: number,
    valor: number,
    legislacao: string,
    reajuste: number
  
}