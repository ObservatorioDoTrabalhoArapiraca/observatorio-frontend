import { PdfFile } from "@/core/services/pdfService"

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
// Exemplo:
// console.log(capitalizeFirstLetter("arapiraca")) // "Arapiraca"

// Função para extrair o ano e mês do nome do arquivo
export function extractYearMonth(name: string): {
  year: string
  month: string
} {
  const yearMatch = name.match(/(20\d{2})/)
  const year = yearMatch ? yearMatch[1] : "Outros"
  // Procura mês por nome (em português)
  const monthNames = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ]
  let month = "Outros"
  for (const m of monthNames) {
    if (name.toLowerCase().includes(m)) {
      month = m.charAt(0).toUpperCase() + m.slice(1)
      break
    }
  }
  return { year, month }
}

// Ordem dos meses decrescente
export const monthOrder = [
  "Dezembro",
  "Novembro",
  "Outubro",
  "Setembro",
  "Agosto",
  "Julho",
  "Junho",
  "Maio",
  "Abril",
  "Março",
  "Fevereiro",
  "Janeiro",
  "Outros",
]

export function groupPdfsByYearMonth(pdfFiles: PdfFile[]) {
  const grouped: { [year: string]: { [month: string]: PdfFile[] } } = {}
  pdfFiles.forEach((pdf) => {
    const { year, month } = extractYearMonth(pdf.name)
    if (!grouped[year]) grouped[year] = {}
    if (!grouped[year][month]) grouped[year][month] = []
    grouped[year][month].push(pdf)
  })
  return grouped
}

export function getSortedYears(grouped: {
  [year: string]: { [month: string]: PdfFile[] }
}) {
  return Object.keys(grouped).sort((a, b) => b.localeCompare(a))
}
