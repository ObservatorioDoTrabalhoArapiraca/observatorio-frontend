import api from "@/core/services/api";
import { AnoTotalMovimentacoes, DistribuicaoPorEscolaridade, DistribuicaoPorFaixaEtaria, DistribuicaoPorRacaCor, DistribuicaoPorSexo, Movimentacoes, ProfissoesPorDeficiencia, SalarioPorProfissao, SaldoPorOcupacao } from "@/types";

export type QueryParams = {
  ano?: number;
  mes?: number;
  page?: number;
  page_size?: number;
  agregacao: "mensal" | "anual";
  detalhes?: boolean;
};

export const getDistribuicaoPorEscolaridade = async ({ano, mes, agregacao, page, page_size}: QueryParams): Promise<DistribuicaoPorEscolaridade> => {
  try {
    const response = await api.get<DistribuicaoPorEscolaridade>(`analises/escolaridade/`, {
      params: {
        ...(ano !== undefined && { ano }),
        ...(mes !== undefined && { mes }),
        agregacao,
        page,
        page_size,
      },
    });

    return response.data; 
  } catch (error) {
    throw error;
  }
};
export const getDistribuicaoPorRacaCor = async ({ano, mes, agregacao, page, page_size}: QueryParams): Promise<DistribuicaoPorRacaCor> => {
  try {
    const response = await api.get<DistribuicaoPorRacaCor>(`analises/raca-cor/`, {
      params: {
        ...(ano !== undefined && { ano }),
        ...(mes !== undefined && { mes }),
        agregacao,
        page,
        page_size,
      },
    });

    return response.data; 
  } catch (error) {
    throw error;
  }
};
export const getSalarioPorProfissao = async ({ano, mes, agregacao, page, page_size}: QueryParams): Promise<SalarioPorProfissao> => {
  try {
    const response = await api.get<SalarioPorProfissao>(`analises/salario-ocupacao/`, {
      params: {
        ...(ano !== undefined && { ano }),
        ...(mes !== undefined && { mes }),
        agregacao,
        page,
        page_size,
      },
    });

    return response.data; 
  } catch (error) {
    throw error;
  }
};
export const getSaldoPorOcupacao = async ({ ano, mes, agregacao, page, page_size }: QueryParams): Promise<SaldoPorOcupacao> => {
  try {
    const response = await api.get<SaldoPorOcupacao>(`analises/saldo-ocupacao/`, {
      params: {
        ...(ano !== undefined && { ano }),
        ...(mes !== undefined && { mes }),
        agregacao,
        page,
        page_size,
      },
    });


    return response.data; 
  } catch (error) {
    throw error;
  }
};
export const getDistribuicaoFaixaEtaria = async ({ano, mes, agregacao, page, page_size}: QueryParams): Promise<DistribuicaoPorFaixaEtaria> => {
  try {
    const response = await api.get<DistribuicaoPorFaixaEtaria>(`analises/idade/`, {
      params: {
        ...(ano !== undefined && { ano }),
        ...(mes !== undefined && { mes }),
        agregacao,
        page,
        page_size,
      },
    });

    return response.data; 
  } catch (error) {
    throw error;
  }
};
export const getDistribuicaoPorSexo = async ({ano, mes, agregacao, page, page_size}: QueryParams): Promise<DistribuicaoPorSexo> => {
  try {
    const response = await api.get<DistribuicaoPorSexo>(`analises/sexo/`, {
      params: {
        ...(ano !== undefined && { ano }),
        ...(mes !== undefined && { mes }),
        agregacao,
        page,
        page_size,
      },
    });

    return response.data; 
  } catch (error) {
    throw error;
  }
};
export const getProfissoesPorDeficiencia = async ({ano, mes, agregacao, page, page_size}: QueryParams): Promise<ProfissoesPorDeficiencia> => {
  try {
    const response = await api.get<ProfissoesPorDeficiencia>(`analises/pcd/`, {
      params: {
        ...(ano !== undefined && { ano }),
        ...(mes !== undefined && { mes }),
        agregacao,
        page,
        page_size,
      },
    });

    return response.data; 
  } catch (error) {
    throw error;
  }
};
export const getTotalMovimentacao = async ({ ano, mes, agregacao, detalhes }: QueryParams): Promise<AnoTotalMovimentacoes> => {
  
  try {
    const response = await api.get<AnoTotalMovimentacoes>(`analises/movimentacoes/`, {
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
export const getMovimentacoes = async ({ ano, mes, agregacao, detalhes, page, page_size }: QueryParams): Promise<Movimentacoes> => {
  
  
  try {
    const response = await api.get<Movimentacoes>(`movimentacoes/`, {
      params: {
        ...(ano !== undefined && { ano }),
        ...(mes !== undefined && { mes }),
        agregacao,
        detalhes: detalhes ?? true, // para retornar os detalhes das movimentações 
        page,
        page_size,
      },
    });

    return response.data
  } catch (error) {
    throw error;
  }
};