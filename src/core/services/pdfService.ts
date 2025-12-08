import api from "./api"

export interface PdfFile {
  name: string
  url: string
}

/**
 * Busca lista de PDFs disponíveis
 * Endpoint: GET /api/pdfs/
 */
export const getPdfs = async (): Promise<PdfFile[]> => {
  try {

    const response = await api.get("pdfs/")
    console.log('📄 PDFs recebidos:', response.data)
    const pdfs = response.data
    
    const baseUrl = (import.meta.env.VITE_API_URL as string || 'https://observatorio-backend-production.up.railway.app/api/').replace('/api/', '')

    console.log("🌐 Base URL que será usada:", baseUrl)

    const normalizedPdfs = pdfs.map((pdf: PdfFile) => {
      try {
        const urlObj = new URL(pdf.url)
        const newUrl = `${baseUrl}${urlObj.pathname}`

        console.log(`✅ Convertido: ${pdf.url} -> ${newUrl}`)

        return {
          ...pdf,
          url: newUrl,
        }
      } catch (error) {
        console.warn("⚠️ Erro ao processar URL:", pdf.url, error)
        return pdf
      }
    })

    console.log("📦 PDFs finais:", normalizedPdfs)
    
    return normalizedPdfs
    
  } catch (error) {
    console.error("Erro ao buscar PDFs:", error)
        throw error
   
  }
}
