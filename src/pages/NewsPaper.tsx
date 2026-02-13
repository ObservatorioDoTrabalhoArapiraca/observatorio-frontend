import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function NewsPaper() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-8 items-center bg-primary-yellow/20 py-8 rounded-lg justify-center">
      <Link to="https://web.arapiraca.al.gov.br/categoria/noticias/" target="_blank" className="p-6">
        <Card className="p-4 h-36">
          <CardTitle className="py-4 text-tertiary-green"> 
        Ultimas notícias
      </CardTitle>
        <CardDescription>
          Fique por dentro das últimas notícias e atualizações sobre nossa cidade. Acompanhe eventos, projetos e iniciativas que estão moldando o futuro econômico do município.
        </CardDescription>
        </Card>
      
      </Link>
      <Link to="https://web.arapiraca.al.gov.br/tipo-de-arquivo/vagas-do-sine/"  target="_blank" className="p-6">
      
      <Card className="p-4 h-36"><CardTitle className="py-4 text-tertiary-green">
        Vagas
      </CardTitle>
      <CardDescription>
          Acompanhe oportunidades de emprego e estágio em empresas locais e instituições públicas do nosso município.
        </CardDescription>
      </Card>
      </Link>
    </div>
  )
}
