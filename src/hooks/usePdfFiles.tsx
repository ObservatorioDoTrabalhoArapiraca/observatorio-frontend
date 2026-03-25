import { useEffect, useState } from "react"
import { getPdfs, PdfFile } from "../core/services/pdfService"

export function usePdfFiles(type: string) {
  const [pdfs, setPdfs] = useState<PdfFile[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

 
    const fetchPdfs = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const data = await getPdfs(type)
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
    }, [type])

  return { pdfs, isLoading, error, refetch: fetchPdfs }
}
