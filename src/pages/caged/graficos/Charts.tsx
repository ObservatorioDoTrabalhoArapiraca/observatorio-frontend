
import EscolaridadeChart from "@/pages/caged/graficos/components/EscolaridadeChart";
import FaixaEtariaChart from "@/pages/caged/graficos/components/FaixaEtariaChart";
import PcdChart from "@/pages/caged/graficos/components/PcdChart";
import ProfissaoChart from "@/pages/caged/graficos/components/ProfissaoChart";
import RacaCorChart from "@/pages/caged/graficos/components/RacaCorChart";
import SaldoOcupacaoChart from "@/pages/caged/graficos/components/SaldoOcupacaoChart";
import SetorChart from "@/pages/caged/graficos/components/Setor";
import SexoChart from "@/pages/caged/graficos/components/SexoChart";

export default function Charts() {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
     <SexoChart/>
     <EscolaridadeChart/>
     <RacaCorChart/>
     <FaixaEtariaChart/>
     <ProfissaoChart/>
      <PcdChart />
      <SaldoOcupacaoChart />
      <SetorChart />
    </div>
  )
}
