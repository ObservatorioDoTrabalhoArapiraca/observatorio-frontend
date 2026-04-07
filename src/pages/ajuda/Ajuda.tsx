// source /home/usuario/Github/observatorio-fast-api/.venv/bin/activate && uvicorn api.index:app --reload --port 8001


import SalarioBase from "@/pages/ajuda/salario-base/SalarioBase";
import SetoresAgregados from "@/pages/ajuda/setores-agregados/SetoresAgregados";


export default function Help() {
 
  return (
    <div className="flex gap-4 flex-col">
      <SalarioBase/>
      <SetoresAgregados/>
     </div>
      )
        
}
