
import EscolaridadeChart from "@/pages/graficos/components/EscolaridadeChart";
import FaixaEtariaChart from "@/pages/graficos/components/FaixaEtariaChart";
import PcdChart from "@/pages/graficos/components/PcdChart";
import ProfissaoChart from "@/pages/graficos/components/ProfissaoChart";
import RacaCorChart from "@/pages/graficos/components/RacaCorChart";
import SexoChart from "@/pages/graficos/components/SexoChart";



export default function Charts() {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
     <SexoChart/>
     <EscolaridadeChart/>
     <RacaCorChart/>
     <FaixaEtariaChart/>
     <ProfissaoChart/>
     <PcdChart/>
    </div>
  )
}
