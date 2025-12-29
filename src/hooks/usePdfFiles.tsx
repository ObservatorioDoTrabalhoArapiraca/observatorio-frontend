import { useEffect, useState } from "react"
import { getPdfs, PdfFile } from "../core/services/pdfService"

export function usePdfFiles() {
  const [pdfFiles, setPdfFiles] = useState<PdfFile[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPdfs = async () => {
      try {
        const data = await getPdfs()
        setPdfFiles(data)
      } catch (err) {
        setError("Erro ao carregar PDFs")
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchPdfs()
  }, [])

  return { pdfFiles, loading, error }
}
