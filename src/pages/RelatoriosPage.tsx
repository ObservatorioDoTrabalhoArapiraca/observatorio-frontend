import PdfList, { PdfListProps } from "@/components/PdfList"
import { usePdfFiles } from "@/hooks/usePdfFiles"
import { useParams } from "react-router-dom"

const RelatoriosPage = () => {
  const { category } = useParams()
  const { pdfs, isLoading, error } = usePdfFiles()
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Título dinâmico baseado na categoria */}
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        {category === "conjuntural" 
          ? "Boletim Conjuntural" 
          : category === "tematico" 
          ? "Boletim Temático" 
          : "Relatórios e Documentos"}
      </h1>

      {/* Mensagem de erro se houver */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          <p className="font-semibold">Erro ao carregar relatórios:</p>
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* Componente PdfList com o tipo da rota */}
      <PdfList 
        tipo={category as PdfListProps["tipo"]} 
        pdfs={pdfs} 
        isLoading={isLoading} 
      />
    </div>
  )
}

export default RelatoriosPage
