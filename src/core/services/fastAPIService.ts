import api from "@/core/services/fastapi"

export type AnoAPIMovimentacoes = {
  id: number
  salario: number | null
  competencia_movimentacao: number | null
  sexo_id: number | null
  sexo_descricao: string | null
  raca_cor_id: number | null
  raca_cor_descricao: string | null
  secao: string | null
  }

export const getAPIMovimentacao = async (): Promise<AnoAPIMovimentacoes[]> => {
  
  try {
    const response = await api.get<AnoAPIMovimentacoes[]>(`movimentacoes/`);

    return response.data; 
  } catch (error) {
    throw error;
  }
};