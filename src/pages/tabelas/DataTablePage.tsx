import { tableCategories } from "@/core/services/navLinks"
import SalarioPorEscolaridade from "@/pages/tabelas/escolaridade/SalarioPorEscolaridade"
import DistribuicaoFaixaEtaria from "@/pages/tabelas/faixaetaria/DistribuicaoFaixaEtaria"
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
      // TODO: adicionar os outros componentes das tabelas aqui quando refizer as tabelas no backend

      // TODO: adicionar a opção de pesquisa em todas as tabelas
        { value: "escolaridade", content: <SalarioPorEscolaridade /> },
        { value: "faixaetaria", content: <DistribuicaoFaixaEtaria /> },
        { value: "movimentacoes", content: <TotalMovimentacoesAno /> },
      ]}
    />
  )
}
