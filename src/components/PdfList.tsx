import {
  getSortedYears,
  groupPdfsByYearMonth,
} from "@/Utils/capitalizeFirstLettrer"
import BoletimConjuntural from "@/components/BoletimConjuntural"
import { BoletimTematico } from "@/components/BoletimTematico"
import { Spinner } from "@/components/ui/spinner"
import { usePdfFiles } from "@/hooks/usePdfFiles"

export interface PdfListProps {
  tipo?: "conjuntural" | "tematico"
}
// TODO: adicionar paginação se necessário

const PdfList: React.FC<PdfListProps> = ({ tipo }) => {
  const { pdfFiles, loading, error } = usePdfFiles()

  if (loading) return <Spinner text="Carregando PDFs..." />
  if (error) return <p>{error}</p>
  const filtered = tipo
    ? pdfFiles.filter((pdf) => pdf.name.toLowerCase().includes(tipo))
    : pdfFiles

  const grouped = groupPdfsByYearMonth(filtered)

  // Ordena os anos do mais recente para o mais antigo
  const sortedYears = getSortedYears(grouped)

  return tipo === "tematico" ? (
    <BoletimTematico filtered={filtered} />
  ) : (
    <BoletimConjuntural
      filtered={filtered}
      sortedYears={sortedYears}
      grouped={grouped}
    />
  )
}

export default PdfList
