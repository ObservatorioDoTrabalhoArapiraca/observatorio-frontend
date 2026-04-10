import TabsComponent from "@/components/table/TabsComponent"
import { tableCategoriesRais } from "@/core/services/navLinks"
import SalarioPorEscolaridade from "@/pages/rais/tabelas/escolaridade/SalarioPorEscolaridade"
import DistribuicaoFaixaEtaria from "@/pages/rais/tabelas/faixaetaria/DistribuicaoFaixaEtaria"

import SalarioPorProfissao from "@/pages/rais/tabelas/salarioprofissao/SalarioPorProfissao"

import Setor from "@/pages/rais/tabelas/setor/Setor"
import DistribuicaoPorSexo from "@/pages/rais/tabelas/sexo/DistribuicaoPorSexo"

import TotalMovimentacoesAno from "@/pages/rais/tabelas/totalmovimentacoesano/TotalMovimentacoesAno"

export default function DataTablePageRais() {
  return (
    <TabsComponent
      cardTitle="Tabelas"
      categories={tableCategoriesRais}
      defaultTab="escolaridade"
      navigateTo="rais/tabelas"
      tabsContent={[
        // { value: "movimentacoes", content: <Movimentacoes /> },
        { value: "totalmovimentacoesano", content: <TotalMovimentacoesAno /> },
        { value: "escolaridade", content: <SalarioPorEscolaridade /> },
        { value: "faixaetaria", content: <DistribuicaoFaixaEtaria /> },
        { value: "sexo", content: <DistribuicaoPorSexo /> },
        { value: "salarioporprofissao", content: <SalarioPorProfissao /> },
        { value: "setor", content: <Setor /> },
      ]}
    />
  )
}
