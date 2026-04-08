import TabsComponent from "@/components/table/TabsComponent"
import { tableCategories } from "@/core/services/navLinks"
import SalarioPorEscolaridade from "@/pages/rais/tabelas/escolaridade/SalarioPorEscolaridade"
import DistribuicaoFaixaEtaria from "@/pages/rais/tabelas/faixaetaria/DistribuicaoFaixaEtaria"
import ProfissoesPorDeficiencia from "@/pages/rais/tabelas/pcd/ProfissoesPorDeficiencia"
import DistribuicaoPorRacaCor from "@/pages/rais/tabelas/racacor/DistribuicaoPorRacaCor"
import SalarioPorProfissao from "@/pages/rais/tabelas/salarioprofissao/SalarioPorProfissao"
import SaldoPorOcupacao from "@/pages/rais/tabelas/saldoocupacao/SaldoPorOcupacao"
import Setor from "@/pages/rais/tabelas/setor/Setor"
import DistribuicaoPorSexo from "@/pages/rais/tabelas/sexo/DistribuicaoPorSexo"

import TotalMovimentacoesAno from "@/pages/rais/tabelas/totalmovimentacoesano/TotalMovimentacoesAno"

export default function DataTablePageRais() {
  return (
    <TabsComponent
      cardTitle="Tabelas"
      categories={tableCategories}
      defaultTab="escolaridade"
      navigateTo="rais/tabelas"
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
