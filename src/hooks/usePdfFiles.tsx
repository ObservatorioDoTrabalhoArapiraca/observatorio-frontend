import { useEffect, useState } from "react"
import { getPdfs, PdfFile } from "../core/services/pdfService"

export function usePdfFiles() {
  const [pdfs, setPdfs] = useState<PdfFile[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

 
    const fetchPdfs = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const data = await getPdfs()
        setPdfs(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro ao carregar PDFs")
        setPdfs([])
      } finally {
        setIsLoading(false)
      }
    }
  
    useEffect(() => {
      fetchPdfs()
    }, [])

  return { pdfs, isLoading, error, refetch: fetchPdfs }
}
