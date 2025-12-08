import api from "./api"

// Interface para os dados de Arapiraca
export interface PeriodoArapiraca {
  id: number
  periodo: string
  ano_referencia: number
  ano_2002?: number
  ano_2003?: number
  ano_2004?: number
  ano_2005?: number
  ano_2006?: number
  ano_2007?: number
  ano_2008?: number
  ano_2009?: number
  ano_2010?: number
  ano_2011?: number
  ano_2012?: number
  ano_2013?: number
  ano_2014?: number
  ano_2015?: number
  ano_2016?: number
  ano_2017?: number
  ano_2018?: number
  ano_2019?: number
  [key: string]: any // Para anos dinâmicos
}

export interface ArapiracaResponse {
  total: number
  periodos: PeriodoArapiraca[]
}

/**
 * Lista todos os períodos de Arapiraca
 * Endpoint: GET /api/arapiraca/
 */
export const getPeriodos = async (): Promise<ArapiracaResponse> => {
  try {
    const response = await api.get("arapiraca/")
    return response.data
  } catch (error) {
    console.error("Erro ao buscar períodos:", error)
    throw error
  }
}

/**
 * Busca série temporal
 * Endpoint: GET /api/arapiraca/serie/
 */
export const getSerieTemporal = async (): Promise<any> => {
  try {
    const response = await api.get("arapiraca/serie/")
    return response.data
  } catch (error) {
    console.error("Erro ao buscar série temporal:", error)
    throw error
  }
}

/**
 * Busca dados de um ano específico
 * Endpoint: GET /api/arapiraca/{ano}/
 */
export const getDadosAno = async (ano: number): Promise<any> => {
  try {
    const response = await api.get(`arapiraca/${ano}/`)
    return response.data
  } catch (error) {
    console.error(`Erro ao buscar dados do ano ${ano}:`, error)
    throw error
  }
}

/**
 * Busca comparação entre anos
 * Endpoint: GET /api/arapiraca/comparacao/
 */
export const getComparacao = async (): Promise<any> => {
  try {
    const response = await api.get("arapiraca/comparacao/")
    return response.data
  } catch (error) {
    console.error("Erro ao buscar comparação:", error)
    throw error
  }
}
