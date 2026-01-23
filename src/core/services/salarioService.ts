import { AnoTotalMovimentacoes, DistribuicaoPorEscolaridade, MedianaSalario, ProfissoesPorDeficiencia, SalarioPorProfissao } from '@/types';
import api from './api';

export const getSalarioPorEscolaridade = async (): Promise<DistribuicaoPorEscolaridade[]> => {
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
  

    if (Array.isArray(response.data)) {
    
      return response.data;
    }

    return [];

   
  } catch (error) {
    console.error(' Erro ao buscar movimentações por ano:', error);
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