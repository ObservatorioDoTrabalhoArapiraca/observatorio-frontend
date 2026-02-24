
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
      item.sexo_descricao.toLowerCase().includes("feminino") ? "feminino" : "masculino",
    getCategoriaValue: (item) => item.total_movimentacoes,
    getAno: (item) => item.ano,
    getMes: (item) => item.mes,
  });
}
export function transformProfissaoData(dados: Profissao[], isAnual: boolean): ChartDataItem[] {
  return transformToChartData({
    dados,
    isAnual,
    getCategoriaKey: (item) => 
      item.cbo_descricao
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remove acentos
        .replace(/\s+/g, "_"), // Substitui espaços por _
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
      item.escolaridade_descricao
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remove acentos
        .replace(/\s+/g, "_"), // Substitui espaços por _
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
      item.tipo_deficiencia_descricao
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remove acentos
        .replace(/\s+/g, "_"), // Substitui espaços por _
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
      item.raca_cor_descricao
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remove acentos
        .replace(/\s+/g, "_"), // Substitui espaços por _
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
      item.faixa_etaria
        .toLowerCase()
        .replace(/\s+/g, "_")
        .replace(/-/g, "_"),
    getCategoriaValue: (item) => item.total_movimentacoes,
    getAno: (item) => item.ano,
    getMes: (item) => item.mes ?? 1,
  });
}