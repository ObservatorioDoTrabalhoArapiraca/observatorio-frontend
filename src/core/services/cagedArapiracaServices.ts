import api from "@/core/services/api";
import { AnoTotalMovimentacoes, DistribuicaoPorEscolaridade, DistribuicaoPorFaixaEtaria, DistribuicaoPorSexo, ProfissoesPorDeficiencia } from "@/types";

type QueryParams = {
  ano: number;
  mes: number;
  agregacao: "mensal" | "anual" ;
};

export const getDistribuicaoPorEscolaridade = async ({ano, mes, agregacao}: QueryParams): Promise<DistribuicaoPorEscolaridade[]> => {
  try {
    const response = await api.get<DistribuicaoPorEscolaridade[]>(`analises/escolaridade/`, {
      params: {
        ano,
        mes,
        agregacao,
      },
    });

    console.log("📦 Response completo:", response)
    console.log("📦 Response.data:", response.data)
    console.log("📦 salario_por_escolaridade:", response.data)
    return response.data; 
  } catch (error) {
    console.error('Erro ao buscar os dados de Distribuição por escolaridade:', error);
    throw error;
  }
};
export const getDistribuicaoFaixaEtaria = async ({ano, mes, agregacao}: QueryParams): Promise<DistribuicaoPorFaixaEtaria[]> => {
  try {
    const response = await api.get<DistribuicaoPorFaixaEtaria[]>(`analises/idade/`, {
      params: {
        ano,
        mes,
        agregacao,
      },
    });

    console.log("📦 Response completo:", response)
    console.log("📦 Response.data:", response.data)
    console.log("📦 salario_por_escolaridade:", response.data)
    return response.data; 
  } catch (error) {
    console.error('Erro ao buscar os dados de Distribuição por escolaridade:', error);
    throw error;
  }
};
export const getDistribuicaoPorSexo = async ({ano, mes, agregacao}: QueryParams): Promise<DistribuicaoPorSexo[]> => {
  try {
    const response = await api.get<DistribuicaoPorSexo[]>(`analises/sexo/`, {
      params: {
        ano,
        mes,
        agregacao,
      },
    });

    console.log("📦 Response completo:", response)
    console.log("📦 Response.data:", response.data)
    console.log("📦 salario_por_escolaridade:", response.data)
    return response.data; 
  } catch (error) {
    console.error('Erro ao buscar os dados de Distribuição por escolaridade:', error);
    throw error;
  }
};
export const getProfissoesPorDeficiencia = async ({ano, mes, agregacao}: QueryParams): Promise<ProfissoesPorDeficiencia[]> => {
  try {
    const response = await api.get<ProfissoesPorDeficiencia[]>(`analises/pcd/`, {
      params: {
        ano,
        mes,
        agregacao,
      },
    });

    console.log("📦 Response completo:", response)
    console.log("📦 Response.data:", response.data)
    console.log("📦 salario_por_escolaridade:", response.data)
    return response.data; 
  } catch (error) {
    console.error('Erro ao buscar os dados de Distribuição por escolaridade:', error);
    throw error;
  }
};
export const getTotalMovimentacao = async ({ano, mes, agregacao}: QueryParams): Promise<AnoTotalMovimentacoes[]> => {
  try {
    const response = await api.get<AnoTotalMovimentacoes[]>(`movimentacoes/`, {
      params: {
        ano,
        mes,
        agregacao,
      },
    });

    console.log("📦 Response completo:", response)
    console.log("📦 Response.data:", response.data)
    console.log("📦 salario_por_escolaridade:", response.data)
    return response.data; 
  } catch (error) {
    console.error('Erro ao buscar os dados de Distribuição por escolaridade:', error);
    throw error;
  }
};