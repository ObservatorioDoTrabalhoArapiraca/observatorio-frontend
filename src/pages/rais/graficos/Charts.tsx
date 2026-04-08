
import EscolaridadeChart from "@/pages/rais/graficos/components/EscolaridadeChart";
import FaixaEtariaChart from "@/pages/rais/graficos/components/FaixaEtariaChart";
import PcdChart from "@/pages/rais/graficos/components/PcdChart";
import ProfissaoChart from "@/pages/rais/graficos/components/ProfissaoChart";
import RacaCorChart from "@/pages/rais/graficos/components/RacaCorChart";
import SaldoOcupacaoChart from "@/pages/rais/graficos/components/SaldoOcupacaoChart";
import SetorChart from "@/pages/rais/graficos/components/Setor";
import SexoChart from "@/pages/rais/graficos/components/SexoChart";

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
