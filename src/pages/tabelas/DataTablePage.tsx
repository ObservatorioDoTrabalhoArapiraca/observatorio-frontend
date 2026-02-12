import { tableCategories } from "@/core/services/navLinks"
import SalarioPorEscolaridade from "@/pages/tabelas/escolaridade/SalarioPorEscolaridade"
import DistribuicaoFaixaEtaria from "@/pages/tabelas/faixaetaria/DistribuicaoFaixaEtaria"
import Movimentacoes from "@/pages/tabelas/movimentacoes/Movimentacoes"
import ProfissoesPorDeficiencia from "@/pages/tabelas/pcd/ProfissoesPorDeficiencia"
import SalarioPorProfissao from "@/pages/tabelas/salarioprofissao/SalarioPorProfissao"
import DistribuicaoPorSexo from "@/pages/tabelas/sexo/DistribuicaoPorSexo"
import TabsComponent from "@/pages/tabelas/TabsComponent"
import TotalMovimentacoesAno from "@/pages/tabelas/totalmovimentacoesano/TotalMovimentacoesAno"

export default function DataTablePage() {
  return (
    <TabsComponent
      cardTitle="Tabelas"
      categories={tableCategories}
      defaultTab="escolaridade"
      navigateTo="tabelas"
      tabsContent={[
    

        // { value: "movimentacoes", content: <Movimentacoes /> },
        { value: "totalmovimentacoesano", content: <TotalMovimentacoesAno /> },
        { value: "escolaridade", content: <SalarioPorEscolaridade /> },
        { value: "faixaetaria", content: <DistribuicaoFaixaEtaria /> },
        { value: "sexo", content: <DistribuicaoPorSexo /> },
        { value: "pcd", content: <ProfissoesPorDeficiencia /> },
        { value: "salarioporprofissao", content: <SalarioPorProfissao /> },
      ]}
    />
  )
}
