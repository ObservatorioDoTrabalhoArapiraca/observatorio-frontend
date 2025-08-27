import api from './api';

export interface SalarioPorEscolaridade {
  grau_de_instrucao: string;
  saldo: number;
  maior: number;
  menor: number;
}

export interface MedianaSalario {
  sexo: string;
  mediana: number;
}

export interface AnoTotalMovimentacoes {
  ano: number;
  total: number;
}

export interface SalarioPorProfissao {
  profissao: string;
  maximo: number;
  minimo: number;
  media: number;
  total?: number;
}

export interface ProfissoesPorDeficiencia {
  cbo_2002_ocupacao: string;
  total_deficientes: number;
}

export const getSalarioPorEscolaridade = async (): Promise<SalarioPorEscolaridade[]> => {
  try {
    const response = await api.get('salario-por-escolaridade/');
    return response.data.salario_por_escolaridade; 
  } catch (error) {
    console.error('Erro ao buscar os dados de salário por escolaridade:', error);
    throw error;
  }
};

export const getMedianaSalario = async (): Promise<MedianaSalario[]> => {
  try {
    const response = await api.get('mediana-salario/');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os dados de mediana de salário:', error);
    throw error;
  }
};

export const getAnoTotalMovimentacoes = async (): Promise<AnoTotalMovimentacoes[]> => {
  try {
    const response = await api.get('ano-total-movimentacoes/');
    return response.data.ano_total_results;
  } catch (error) {
    console.error('Erro ao buscar os dados de movimentações por ano:', error);
    throw error;
  }
};

export const getSalarioPorProfissao = async (): Promise<SalarioPorProfissao[]> => {
  try {
    const response = await api.get('salario-por-profissao/');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os dados de salário por profissão:', error);
    throw error;
  }
};

export const getProfissoesPorDeficiencia = async (tipo?: string): Promise<ProfissoesPorDeficiencia[]> => {
  try {
    const params = tipo ? { tipo } : {};
    const response = await api.get('profissoes-mais-deficientes/', { params });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os dados de profissões por deficiência:', error);
    throw error;
  }
};