// TODO: éar os periodos disponiveis da API e não hardcodar aqui


export const MESES = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

// Anos disponíveis (ajuste conforme necessário)
// export const ANOS_DISPONIVEIS = [2020, 2021, 2022, 2023, 2024, 2025, 2026];

// TODO: ver como vai implementar essa função, talvez seja melhor criar um endpoint específico para retornar os anos disponíveis, ou retornar junto com os dados da consulta, para evitar ter que fazer uma consulta extra só para isso
export function getAnosDisponiveisFromData(): number[] {
  return Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i);
         
}