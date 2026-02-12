import api from "@/core/services/api";
import { AnoTotalMovimentacoes, DistribuicaoPorEscolaridade, DistribuicaoPorFaixaEtaria, DistribuicaoPorSexo, Movimentacoes, ProfissoesPorDeficiencia, SalarioPorProfissao } from "@/types";

type QueryParams = {
  ano?: number;
  mes?: number;
  agregacao: "mensal" | "anual";
  detalhes?: boolean;
};

export const getDistribuicaoPorEscolaridade = async ({ano, mes, agregacao}: QueryParams): Promise<DistribuicaoPorEscolaridade[]> => {
  try {
    const response = await api.get<DistribuicaoPorEscolaridade[]>(`analises/escolaridade/`, {
      params: {
        ...(ano !== undefined && { ano }),
        ...(mes !== undefined && { mes }),
        agregacao,
      },
    });

    return response.data; 
  } catch (error) {
    throw error;
  }
};
export const getSalarioPorProfissao = async ({ano, mes, agregacao}: QueryParams): Promise<SalarioPorProfissao[]> => {
  try {
    const response = await api.get<SalarioPorProfissao[]>(`analises/salario-ocupacao/`, {
      params: {
        ...(ano !== undefined && { ano }),
        ...(mes !== undefined && { mes }),
        agregacao,
      },
    });

    return response.data; 
  } catch (error) {
    throw error;
  }
};
export const getDistribuicaoFaixaEtaria = async ({ano, mes, agregacao}: QueryParams): Promise<DistribuicaoPorFaixaEtaria[]> => {
  try {
    const response = await api.get<DistribuicaoPorFaixaEtaria[]>(`analises/idade/`, {
      params: {
        ...(ano !== undefined && { ano }),
        ...(mes !== undefined && { mes }),
        agregacao,
      },
    });

    return response.data; 
  } catch (error) {
    throw error;
  }
};
export const getDistribuicaoPorSexo = async ({ano, mes, agregacao}: QueryParams): Promise<DistribuicaoPorSexo[]> => {
  try {
    const response = await api.get<DistribuicaoPorSexo[]>(`analises/sexo/`, {
      params: {
        ...(ano !== undefined && { ano }),
        ...(mes !== undefined && { mes }),
        agregacao,
      },
    });

    return response.data; 
  } catch (error) {
    throw error;
  }
};
export const getProfissoesPorDeficiencia = async ({ano, mes, agregacao}: QueryParams): Promise<ProfissoesPorDeficiencia[]> => {
  try {
    const response = await api.get<ProfissoesPorDeficiencia[]>(`analises/pcd/`, {
      params: {
        ...(ano !== undefined && { ano }),
        ...(mes !== undefined && { mes }),
        agregacao,
      },
    });

    return response.data; 
  } catch (error) {
    throw error;
  }
};
export const getTotalMovimentacao = async ({ ano, mes, agregacao, detalhes }: QueryParams): Promise<AnoTotalMovimentacoes[]> => {
  console.log("query", `movimentacoes/`, {
    params: {
      ...(ano !== undefined && { ano }),
      ...(mes !== undefined && { mes }),
      agregacao,
      detalhes: detalhes ?? false, // para não retornar os detalhes das movimentações, apenas o total - isso é importante para otimizar a consulta e evitar sobrecarregar o frontend com dados desnecessários
    },
  }
);
  
  try {
    const response = await api.get<AnoTotalMovimentacoes[]>(`movimentacoes/`, {
      params: {
        ...(ano !== undefined && { ano }),
        ...(mes !== undefined && { mes }),
        agregacao,
        detalhes: detalhes ?? false, // para não retornar os detalhes das movimentações, apenas o total - isso é importante para otimizar a consulta e evitar sobrecarregar o frontend com dados desnecessários
      },
    });

    return response.data; 
  } catch (error) {
    throw error;
  }
};
export const getMovimentacoes = async ({ ano, mes, agregacao, detalhes }: QueryParams): Promise<Movimentacoes> => {
  console.log("query", `movimentacoes/`, {
    params: {
      ...(ano !== undefined && { ano }),
      ...(mes !== undefined && { mes }),
      agregacao,
      detalhes: detalhes ?? true, // para retornar os detalhes das movimentações 
    },
  }
);
  
  try {
    const response = await api.get<Movimentacoes>(`movimentacoes/`, {
      params: {
        ...(ano !== undefined && { ano }),
        ...(mes !== undefined && { mes }),
        agregacao,
        detalhes: detalhes ?? true, // para retornar os detalhes das movimentações 
      },
    });

    return response.data
  } catch (error) {
    throw error;
  }
};