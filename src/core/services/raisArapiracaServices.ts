import api from "@/core/services/api";
import { AnoTotalMovimentacoes, AnoTotalMovimentacoesRais, DistribuicaoPorEscolaridade, DistribuicaoPorFaixaEtaria,  DistribuicaoPorSetor, DistribuicaoPorSexo, DistribuicaoVinculoCBO, SalarioPorProfissao } from "@/types";

export type QueryParams = {
  ano?: number;
  mes?: number;
  page?: number;
  page_size?: number;
  agregacao: "mensal" | "anual";
  detalhes?: boolean;
  pagination?: boolean;
};

export const getDistribuicaoPorEscolaridade = async ({ano, mes, agregacao, page, page_size, pagination}: QueryParams): Promise<DistribuicaoPorEscolaridade> => {
  try {
    const response = await api.get<DistribuicaoPorEscolaridade>(`analises/rais/grau-instrucao/`, {
      params: {
        ...(ano !== undefined && { ano }),
        ...(mes !== undefined && { mes }),
        agregacao,
        page,
        page_size,
        pagination
      },
    });

    return response.data; 
  } catch (error) {
    throw error;
  }
};

export const getSalarioPorProfissao = async ({ano, mes, agregacao, page, page_size, pagination}: QueryParams): Promise<SalarioPorProfissao> => {
  try {
    const response = await api.get<SalarioPorProfissao>(`analises/rais/salario-ocupacao/`, {
      params: {
        ...(ano !== undefined && { ano }),
        ...(mes !== undefined && { mes }),
        agregacao,
        page,
        page_size,
        pagination,
      },
    });

    return response.data; 
  } catch (error) {
    throw error;
  }
};


export const getDistribuicaoPorSetor = async ({ ano, mes, agregacao, page, page_size, pagination }: QueryParams): Promise<DistribuicaoPorSetor> => {
  try {
    const response = await api.get<DistribuicaoPorSetor>(`analises/rais/setor/`, {
      params: {
        ...(ano !== undefined && { ano }),
        ...(mes !== undefined && { mes }),
        agregacao,
        page,
        page_size,
        pagination
      },
    });


    return response.data; 
  } catch (error) {
    throw error;
  }
};
export const getDistribuicaoFaixaEtaria = async ({ano, mes, agregacao, page, page_size, pagination}: QueryParams): Promise<DistribuicaoPorFaixaEtaria> => {
  try {
    const response = await api.get<DistribuicaoPorFaixaEtaria>(`analises/rais/faixa-etaria/`, {
      params: {
        ...(ano !== undefined && { ano }),
        ...(mes !== undefined && { mes }),
        agregacao,
        page,
        page_size,
        pagination
      },
    });

    return response.data; 
  } catch (error) {
    throw error;
  }
};
export const getDistribuicaoPorSexo = async ({ano, mes, agregacao, page, page_size, pagination}: QueryParams): Promise<DistribuicaoPorSexo> => {
  try {
    const response = await api.get<DistribuicaoPorSexo>(`analises/rais/sexo/`, {
      params: {
        ...(ano !== undefined && { ano }),
        ...(mes !== undefined && { mes }),
        agregacao,
        page,
        page_size,
        pagination
      },
    });

    return response.data; 
  } catch (error) {
    throw error;
  }
};
export const getVinculoCbo = async ({ano, mes, agregacao, page, page_size, pagination}: QueryParams): Promise<DistribuicaoVinculoCBO> => {
  try {
    const response = await api.get<DistribuicaoVinculoCBO>(`analises/rais/vinculo-cbo/`, {
      params: {
        ...(ano !== undefined && { ano }),
        ...(mes !== undefined && { mes }),
        agregacao,
        page,
        page_size,
        pagination
      },
    });

    return response.data; 
  } catch (error) {
    throw error;
  }
};

export const getTotalMovimentacaoRais = async ({ ano, mes, agregacao, detalhes, pagination }: QueryParams): Promise<AnoTotalMovimentacoesRais> => {
  try {
    const response = await api.get<AnoTotalMovimentacoesRais>(`analises/rais/total-movimentacoes/`, {
      params: {
        ...(ano !== undefined && { ano }),
        ...(mes !== undefined && { mes }),
        agregacao,
        detalhes: detalhes ?? false, // para não retornar os detalhes das movimentações, apenas o total - isso é importante para otimizar a consulta e evitar sobrecarregar o frontend com dados desnecessários
        pagination
      },
    });

    return response.data; 
  } catch (error) {
    throw error;
  }
};