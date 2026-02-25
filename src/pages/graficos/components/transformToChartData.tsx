
import { ChartDataItem } from "@/pages/graficos/components/BarChartCard";
import { Deficiencia, Escolaridade, FaixaEtaria, Profissao, RacaCor, Sexo } from "@/types";

// Transformador genérico para dados com categoria
interface TransformOptions<T> {
  dados: T[];
  isAnual: boolean;
  getCategoriaKey: (item: T) => string;
  getCategoriaValue: (item: T) => number;
  getAno: (item: T) => number;
  getMes: (item: T) => number;
}

function normalizeToKey(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // "até" → "ate"
    .replace(/\s+ou\s+mais/g, "_mais") // "65 ou mais" → "65_mais"
    .replace(/\s+a\s+/g, "_")         // "18 a 24" → "18_24"
    .replace(/\s+e\s+/g, "_")         // "x e y" → "x_y"
    .replace(/\s+/g, "_")             // espaços → _
    .replace(/-/g, "_")               // "18-24" → "18_24"
    .replace(/_{2,}/g, "_")           // "__" → "_"
    .replace(/^_|_$/g, "");           // remove _ nas pontas
}

export function transformToChartData<T>(
  options: TransformOptions<T>
): ChartDataItem[] {
  const { dados, isAnual, getCategoriaKey, getCategoriaValue, getAno, getMes } = options;

  return dados
    .reduce((acc, dado) => {
      const ano = getAno(dado);
      const mes = getMes(dado);
      const key = isAnual ? `${ano}` : `${ano}-${mes}`;
      const categoriaKey = getCategoriaKey(dado);
      const categoriaValue = getCategoriaValue(dado);

      const existing = acc.find((item) => item.periodo === key);

      if (existing) {
        existing[categoriaKey] = categoriaValue;
      } else {
        acc.push({
          periodo: key,
          mes,
          ano,
          [categoriaKey]: categoriaValue,
        });
      }
      return acc;
    }, [] as ChartDataItem[])
    .sort((a, b) => {
      if (a.ano !== b.ano) return a.ano - b.ano;
      return a.mes - b.mes;
    });
}

// Transformadores específicos para cada tipo de dado

export function transformSexoData(dados: Sexo[], isAnual: boolean): ChartDataItem[] {
  return transformToChartData({
    dados,
    isAnual,
    getCategoriaKey: (item) => 
      normalizeToKey(item.sexo_descricao),
    getCategoriaValue: (item) => item.total_movimentacoes,
    getAno: (item) => item.ano,
    getMes: (item) => item.mes,
  });
}
export function transformProfissaoData(dados: Profissao[], isAnual: boolean, topN: number = 10): ChartDataItem[] {

  const totalPorProfissao = dados.reduce((acc, item) => {
    const key = normalizeToKey(item.cbo_descricao);
    acc[key] = (acc[key] || 0) + item.total_movimentacoes;
    return acc;
  }, {} as Record<string, number>);

  const topProfissoes = Object.entries(totalPorProfissao)
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)
    .map(([key]) => key);

  
    const dadosFiltrados = dados.filter((item) =>
      topProfissoes.includes(normalizeToKey(item.cbo_descricao))
    );
  

  return transformToChartData({
    dados: dadosFiltrados,
    isAnual,
    getCategoriaKey: (item) => 
      normalizeToKey(item.cbo_descricao),
      
    getCategoriaValue: (item) => item.total_movimentacoes,
    getAno: (item) => item.ano,
    getMes: (item) => item.mes,
  });
}

export function transformEscolaridadeData(
  dados: Escolaridade[],
  isAnual: boolean
): ChartDataItem[] {
  return transformToChartData({
    dados,
    isAnual,
    getCategoriaKey: (item) => 
      normalizeToKey(item.escolaridade_descricao),
    getCategoriaValue: (item) => item.total_movimentacoes,
    getAno: (item) => item.ano,
    getMes: (item) => item.mes,
  });
}
export function transformDeficienciaData(
  dados: Deficiencia[],
  isAnual: boolean
): ChartDataItem[] {
  return transformToChartData({
    dados,
    isAnual,
    getCategoriaKey: (item) => 
      normalizeToKey(item.tipo_deficiencia_descricao),
    getCategoriaValue: (item) => item.total_movimentacoes,
    getAno: (item) => item.ano,
    getMes: (item) => item.mes,
  });
}
export function transformRacaCorData(
  dados: RacaCor[],
  isAnual: boolean
): ChartDataItem[] {
  return transformToChartData({
    dados,
    isAnual,
    getCategoriaKey: (item) => 
      normalizeToKey(item.raca_cor_descricao),
    getCategoriaValue: (item) => item.total_movimentacoes,
    getAno: (item) => item.ano,
    getMes: (item) => item.mes,
  });
}

export function transformFaixaEtariaData(
  dados: FaixaEtaria[],
  isAnual: boolean
): ChartDataItem[] {
  return transformToChartData({
    dados,
    isAnual,
    getCategoriaKey: (item) =>
      normalizeToKey(item.faixa_etaria),
    getCategoriaValue: (item) => item.total_movimentacoes,
    getAno: (item) => item.ano,
    getMes: (item) => item.mes ?? 1,
  });
}