import TabsComponent from "@/components/table/TabsComponent"
import { tableCategories } from "@/core/services/navLinks"
import TotalMovimentacoesAno from "@/pages/caged/tabelas/totalmovimentacoesano/TotalMovimentacoesAno"
import SalarioPorEscolaridade from "@/pages/caged/tabelas/escolaridade/SalarioPorEscolaridade"
import DistribuicaoFaixaEtaria from "@/pages/caged/tabelas/faixaetaria/DistribuicaoFaixaEtaria"
import ProfissoesPorDeficiencia from "@/pages/caged/tabelas/pcd/ProfissoesPorDeficiencia"
import DistribuicaoPorRacaCor from "@/pages/caged/tabelas/racacor/DistribuicaoPorRacaCor"
import SalarioPorProfissao from "@/pages/caged/tabelas/salarioprofissao/SalarioPorProfissao"
import SaldoPorOcupacao from "@/pages/caged/tabelas/saldoocupacao/SaldoPorOcupacao"
import Setor from "@/pages/caged/tabelas/setor/Setor"
import DistribuicaoPorSexo from "@/pages/caged/tabelas/sexo/DistribuicaoPorSexo"



export default function DataTablePageCaged() {
  return (
    <TabsComponent
      cardTitle="Tabelas"
      categories={tableCategories}
      // type="caged"
      defaultTab="escolaridade"
      navigateTo="caged/tabelas/"
      tabsContent={[
    

        // { value: "movimentacoes", content: <Movimentacoes /> },
        { value: "totalmovimentacoesano", content: <TotalMovimentacoesAno /> },
        { value: "escolaridade", content: <SalarioPorEscolaridade /> },
        { value: "faixaetaria", content: <DistribuicaoFaixaEtaria /> },
        { value: "sexo", content: <DistribuicaoPorSexo /> },
        { value: "racacor", content: <DistribuicaoPorRacaCor /> },
        { value: "pcd", content: <ProfissoesPorDeficiencia /> },
        { value: "salarioporprofissao", content: <SalarioPorProfissao /> },
        { value: "saldoocupacao", content: <SaldoPorOcupacao /> },
        { value: "setor", content: <Setor /> },
      ]}
    />
  )
}
