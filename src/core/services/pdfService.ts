import api from "./api"

export interface PdfFile {
  nome: string
  url: string
}

// const MOCK_PDFS: PdfFile[] = [
//   {
//     nome: "BOLETIM CONJUNTURAL - ABRIL - 2025.pdf",
//     url: "\"http://localhost:8000/api/\"/media/pdfs/BOLETIM%20CONJUNTURAL%20-%20ABRIL%20-%202025.pdf",
//   },
//   {
//     nome: "Relatório Conjuntural - Fevereiro 2024",
//     url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
 
//   },
//   {
//     nome: "Segmento do Teleatendimento - Arapiraca.pdf",
//     url: "\"http://localhost:8000/api/\"/media/pdfs/Segmento%20do%20Teleatendimento%20-%20Arapiraca.pdf",
 
//   },
//   {
//     nome: "Análise Temático - Educação 2020",
//     url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  
//   },
//   {
//     nome: "Análise Tematico - Saúde 2025",
//     url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
//   }
// ]

/**
 * Busca lista de PDFs disponíveis
 * Endpoint: GET /api/pdfs/
 */
export const getPdfs = async (): Promise<PdfFile[]> => {
  try {
    console.log("🔄 Iniciando busca de PDFs...")
    const response = await api.get("pdfs/")

    console.log("📦 Resposta completa da API:", response.data)

    const pdfs = response.data

    // Verifica se pdfs.pdfs existe
    if (!pdfs || !pdfs.pdfs) {
      console.error("❌ Estrutura de dados inesperada:", pdfs)
      return []
    }

    // console.log("✅ PDFs recebidos:", pdfs.pdfs)

    // Pega a base URL da API de forma mais segura
    const apiUrl = String(import.meta.env.VITE_API_URL || 'http://localhost:8000/api')
    // Remove /api do final e garante que não há barras duplicadas
    const baseUrl = apiUrl.replace(/\/api\/?$/, '').replace(/\/$/, '')

    console.log("A🔗 API URL original:", apiUrl)
    console.log("🔗 Base URL processada:", baseUrl)

    const normalizedPdfs = pdfs.pdfs.map((pdf: any) => {
      // A URL vem da API como /media/pdfs/arquivo.pdf
      const relativePath = pdf.url
      
      // Garante que começa com barra
      const cleanPath = relativePath.startsWith('/') ? relativePath : `/${relativePath}`
      
      // Constrói a URL completa de forma simples
      const fullUrl = baseUrl + cleanPath

      console.log(`📄 ${pdf.nome}`)
      console.log(`   Caminho da API: ${relativePath}`)
      console.log(`   URL final: ${fullUrl}`)
      console.log("🧪 Retornando dados mockados")
      return {
          nome: pdf.nome,
          url: fullUrl,
        }
      })
      // return MOCK_PDFS
console.log("normalized", normalizedPdfs);

    console.log("✅ Total de PDFs normalizados:", normalizedPdfs.length)
    
    return normalizedPdfs
    // return Promise.resolve(MOCK_PDFS)
  } catch (error) {
    console.error("❌ Erro ao buscar PDFs:", error)
    throw error
  }
}