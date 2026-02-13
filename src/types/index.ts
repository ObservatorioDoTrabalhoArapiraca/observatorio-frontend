export interface DistribuicaoPorEscolaridade {
  ano: number
  escolaridade_codigo?: string
  escolaridade_descricao: string
  mes: number
  percentual: string
  total_movimentacoes: number
}
export interface SalarioPorProfissao {
  ano: number
  cbo_codigo: string
  cbo_descricao: string
  salario_medio: number
  total_movimentacoes: number
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
  total_movimentacoes: number,
  filtros_aplicados: {
      ano: number,
      agregacao: "mensal" | "anual",
      mes: number
  }
}

export interface Movimentacao {
  id: number,
  competencia_movimentacao: number,
  regiao_codigo: number,
  regiao_descricao: string,
  uf_codigo: number,
  uf_descricao: string,
  municipio_codigo: number,
  municipio_descricao: string,
  secao_codigo: string,
  secao_descricao: string,
  subclasse_codigo: number,
  subclasse_descricao: string,
  cbo2002_ocupacao_codigo: number,
  cbo2002_ocupacao_descricao: string,
  categoria_codigo: number,
  categoria_descricao: string,
  grau_instrucao_descricao: string,
  raca_cor_codigo: number,
  raca_cor_descricao: string,
  grau_instrucao_codigo: number,
  sexo_codigo: number,
  sexo_descricao: string,
  tipo_empregador_codigo: number,
  tipo_empregador_descricao: string,
  tipo_estabelecimento_codigo: number,
  tipo_estabelecimento_descricao: string,
  tipo_movimentacao_codigo: number,
  tipo_movimentacao_descricao: string,
  tipo_deficiencia_codigo: number,
  tipo_deficiencia_descricao: string,
  saldo_movimentacao: number,
  idade: number,
  horas_contratuais: number,
  salario: string,
  tamanho_estabelecimento: number,
  indicador_trabalho_intermitente: string,
  indicador_trabalho_parcial: string,
  indicador_aprendiz: string,
  origem_informacao: string,
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

export interface SalarioPorProfissao {
  profissao: string
  maximo: number
  minimo: number
  media: number
  total?: number
}

export interface ProfissoesPorDeficiencia {
  ano: number
  tipo_deficiencia: string
  tipo_deficiencia_descricao: string
  percentual: string
  total_movimentacoes: number
}

export type NaviLink = {
  name: string
  path?: string
  children?: {name: string, path: string}[]
}
