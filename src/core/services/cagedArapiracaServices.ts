import api from "@/core/services/api";
import { DistribuicaoPorEscolaridade, DistribuicaoPorFaixaEtaria } from "@/types";

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