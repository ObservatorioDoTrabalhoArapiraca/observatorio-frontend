import api from "@/core/services/api"

export interface PdfFile {
  nome: string
  url: string
  downloadUrl?: string
  dataCriacao?: string
}

export const getPdfs = async (type: string): Promise<PdfFile[]> => {
  try {
    const response = await api.get<PdfFile[]>("pdfs", {params: { tipo: type }    })
    const pdfs = response.data
return pdfs

  } catch (error) {
    console.error("❌ Erro ao buscar PDFs:", error)
    throw error
  }
}