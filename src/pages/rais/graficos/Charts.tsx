
import EscolaridadeChart from "@/pages/rais/graficos/components/EscolaridadeChart";
import FaixaEtariaChart from "@/pages/rais/graficos/components/FaixaEtariaChart";
import ProfissaoChart from "@/pages/rais/graficos/components/ProfissaoChart";
import SetorChart from "@/pages/rais/graficos/components/Setor";
import SexoChart from "@/pages/rais/graficos/components/SexoChart";

export default function Charts() {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
     <SexoChart/>
     <EscolaridadeChart/>
     <FaixaEtariaChart/>
     <ProfissaoChart/>
     <SetorChart />
    </div>
  )
}
