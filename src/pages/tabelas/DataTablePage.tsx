import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SalarioPorEscolaridade from "@/pages/tabelas/escolaridade/SalarioPorEscolaridade";
import TotalMovimentacoesAno from "@/pages/tabelas/movimentacoes/TotalMovimentacoesAno";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

const categories = [
  { label: "Salário por Escolaridade", value: "escolaridade" },
  { label: "Salário por Profissão", value: "profissao" },
  { label: "Total de Movimentações por Ano", value: "movimentacoes" },
  { label: "Profissões por Deficiência", value: "deficiencia" },
]

export default function DemoPage() {

  const { category } = useParams()
  
  const navigate = useNavigate();

  const currentCategory = category ?? "escolaridade"

  useEffect(() => {
    if (!category) {
      navigate(`/tabelas/${currentCategory}`, { replace: true })
    }
  }, [category, navigate, currentCategory])


  const handleTabChange = (key: string) => {
    if(key !== category) {
      navigate(`/tabelas/${key}`, {replace: true}
      );
    }
  }

  return (
    <Tabs
      defaultValue="escolaridade"
      value={category}
      onValueChange={handleTabChange}
      className="w-[400px]"
    >
      <TabsList>
        {categories.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="escolaridade">
        <SalarioPorEscolaridade />
      </TabsContent>
      <TabsContent value="movimentacoes">
        <TotalMovimentacoesAno />
      </TabsContent>
    </Tabs>
  )
}
