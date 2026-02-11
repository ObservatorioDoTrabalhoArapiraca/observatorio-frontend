import {
  getSortedYears,
  groupPdfsByYearMonth,
  removeAccents,
} from "@/Utils/capitalizeFirstLettrer"
import BoletimConjuntural from "@/components/BoletimConjuntural"
import { BoletimTematico } from "@/components/BoletimTematico"
import { Spinner } from "@/components/ui/spinner"
import { PdfFile } from "@/core/services/pdfService"
import { usePdfFiles } from "@/hooks/usePdfFiles"
import { useState } from "react"

export interface PdfListProps {
  tipo?: "conjuntural" | "tematico"
  pdfs: PdfFile[]
  isLoading: boolean
}


const PdfList: React.FC<PdfListProps> = ({ tipo, pdfs, isLoading }) => {

  const [searchTerm, setSearchTerm] = useState("")

  const {  error } = usePdfFiles()

  if (isLoading) return <Spinner text="Carregando PDFs..." />
  if (error) return <p>{error}</p>
 
  const filteredByType = tipo
    ? pdfs.filter((pdf) => {
      if (!pdf || !pdf.nome) return false
      
      const nomeNormalizado = removeAccents(pdf.nome.toLowerCase())
      const tipoNormalizado = removeAccents(tipo.toLowerCase())
      
        return nomeNormalizado.includes(tipoNormalizado)
    })
    : pdfs
  const filteredPdfs = filteredByType.filter((pdf) => {
    if (!pdf || !pdf.nome) {
      console.warn("PDF inválido encontrado:", pdf)
      return false
    }
    return pdf.nome.toLowerCase().includes(searchTerm.toLowerCase())
  })


  if (tipo === "tematico") {
    const grouped = groupPdfsByYearMonth(filteredPdfs)
    const sortedYears = getSortedYears(grouped)
    return <BoletimTematico filtered={filteredPdfs} sortedYears={sortedYears} grouped={grouped} />
  }
  
  if (tipo === "conjuntural") { 
    const grouped = groupPdfsByYearMonth(filteredPdfs)
    const sortedYears = getSortedYears(grouped)
    return (
      <BoletimConjuntural
        filtered={filteredPdfs}
        sortedYears={sortedYears}
        grouped={grouped}
      />
    )
  }


  // Ordena os anos do mais recente para o mais antigo


  return  (
    <div className="space-y-6">
    {/* TODO: adicionar a opção de pesquisa por título */}
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar relatórios..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {/* TODO: identificar e substituir ícone por algum da biblioteca*/}
        <svg
          className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Lista de PDFs */}
      {filteredPdfs.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          {searchTerm
            ? "Nenhum relatório encontrado com esse termo de busca."
            : "Nenhum relatório disponível no momento."}
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredPdfs.map((pdf, index) => (
            <a
              key={`${pdf.nome}-${index}`}
              href={pdf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 hover:border-blue-500"
            >
              <div className="flex items-start space-x-3">
                {/* TODO: trocar esse ícone por algum da biblioteca */}
                <div>icone</div>
                <svg
                  className="w-8 h-8 text-red-600 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                    clipRule="evenodd"
                  />
                </svg>
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
