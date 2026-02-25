import { CardTitle } from "@/components/ui/card";
import Charts from "@/pages/graficos/Charts";


export default function ChartsPage() {

  return (
    <div className="w-full items-center p-4 flex flex-col justify-center text-lg">
      <CardTitle className="w-full items-center p-4 flex justify-center text-lg">
              Gráficos
      </CardTitle>
      <div className="w-full p-4">

        <Charts />
       
      </div>
      </div>
  )
}
