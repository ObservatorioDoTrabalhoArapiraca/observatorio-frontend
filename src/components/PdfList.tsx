import {
  getSortedYears,
  groupPdfsByYearMonth
} from "@/Utils/capitalizeFirstLettrer"
import BoletimAnual from "@/components/BoletimAnual"
import BoletimConjuntural from "@/components/BoletimConjuntural"
import BoletimMensal from "@/components/BoletimMensal"
import { BoletimTematico } from "@/components/BoletimTematico"
import { Spinner } from "@/components/ui/spinner"
import { PdfFile } from "@/core/services/pdfService"
import { usePdfFiles } from "@/hooks/usePdfFiles"
import { useState } from "react"

export interface PdfListProps {
  tipo?: "conjuntural" | "tematico" | "mensal" | "anual"
  pdfs: PdfFile[]
  isLoading: boolean
}


const PdfList: React.FC<PdfListProps> = ({ tipo, pdfs, isLoading }) => {

  const [searchTerm, setSearchTerm] = useState("")

  const {  error } = usePdfFiles(tipo ?? "")

  if (isLoading) return <Spinner text="Carregando PDFs..." />
  if (error) return <p>{error}</p>
 

  if (tipo === "tematico") {
    const grouped = groupPdfsByYearMonth(pdfs)
    const sortedYears = getSortedYears(grouped)
    return <BoletimTematico filtered={pdfs} sortedYears={sortedYears} grouped={grouped} />
  }
  
  if (tipo === "conjuntural") { 
    const grouped = groupPdfsByYearMonth(pdfs)
    const sortedYears = getSortedYears(grouped)
    return (
      <BoletimConjuntural
        filtered={pdfs}
        sortedYears={sortedYears}
        grouped={grouped}
      />
    )
  }
  if (tipo === "anual") { 
    const grouped = groupPdfsByYearMonth(pdfs)
    const sortedYears = getSortedYears(grouped)
    return (
      <BoletimAnual
        filtered={pdfs}
        sortedYears={sortedYears}
        grouped={grouped}
      />
    )
  }
  if (tipo === "mensal") { 
    const grouped = groupPdfsByYearMonth(pdfs)
    const sortedYears = getSortedYears(grouped)
    return (
      <BoletimMensal
        filtered={pdfs}
        sortedYears={sortedYears}
        grouped={grouped}
      />
    )
  }


  // Ordena os anos do mais recente para o mais antigo


  return  (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar relatórios..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
    
      
      </div>

      {/* Lista de PDFs */}
      {pdfs.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          {searchTerm
            ? "Nenhum relatório encontrado com esse termo de busca."
            : "Nenhum relatório disponível no momento."}
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pdfs.map((pdf, index) => (
            <a
              key={`${pdf.nome}-${index}`}
              href={pdf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 hover:border-blue-500"
            >
              <div className="flex items-start space-x-3">
            
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900 break-words">
                    {pdf.nome}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    Clique para visualizar
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  ) 
}

export default PdfList
