import api from "./api"

export interface PdfFile {
  nome: string
  url: string
}


/**
 * Busca lista de PDFs disponíveis
 * Endpoint: GET /api/pdfs/
 */
export const getPdfs = async (): Promise<PdfFile[]> => {
  try {
   
    const response = await api.get("pdfs/")

   
    const pdfs = response.data

    // Verifica se pdfs.pdfs existe
    if (!pdfs || !pdfs.pdfs) {
      console.error("❌ Estrutura de dados inesperada:", pdfs)
      return []
    }



    // Pega a base URL da API de forma mais segura
    const apiUrl = String(import.meta.env.VITE_API_URL || 'http://localhost:8000/api').replace(/['"]/g, '').replace(/\/+$/, '')

    
    // Remove /api do final e garante que não há barras duplicadas
  

  

    const normalizedPdfs = pdfs.pdfs.map((pdf: any) => {
      // A URL vem da API como /media/pdfs/arquivo.pdf
      const relativePath = pdf.url
      
      // Garante que começa com barra
      const cleanPath = relativePath.replace(/['"]/g, '')
      
      // Constrói a URL completa de forma simples
  
      const finalPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`
      const fullUrl = `${apiUrl}${finalPath}`

      return {
          nome: pdf.nome,
          url: fullUrl,
        }
      })

    return normalizedPdfs

  } catch (error) {
    console.error("❌ Erro ao buscar PDFs:", error)
    throw error
  }
}