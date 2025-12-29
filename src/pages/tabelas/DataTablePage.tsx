import { tableCategories } from "@/core/services/navLinks"
import SalarioPorEscolaridade from "@/pages/tabelas/escolaridade/SalarioPorEscolaridade"
import TotalMovimentacoesAno from "@/pages/tabelas/movimentacoes/TotalMovimentacoesAno"
import TabsComponent from "@/pages/tabelas/TabsComponent"

export default function DataTablePage() {
  return (
    <TabsComponent
      cardTitle="Tabelas"
      categories={tableCategories}
      defaultTab="escolaridade"
      navigateTo="tabelas"
      tabsContent={[
      // TODO: adicionar os outros componentes das tabelas aqui
        { value: "escolaridade", content: <SalarioPorEscolaridade /> },
        { value: "movimentacoes", content: <TotalMovimentacoesAno /> },
      ]}
    />
  )
}
