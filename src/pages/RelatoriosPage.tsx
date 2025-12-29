import PdfList, { PdfListProps } from "@/components/PdfList"
import { useParams } from "react-router-dom"

const RelatoriosPage = () => {
  const { category } = useParams()
  return <PdfList tipo={category as PdfListProps["tipo"]} />
}

export default RelatoriosPage
