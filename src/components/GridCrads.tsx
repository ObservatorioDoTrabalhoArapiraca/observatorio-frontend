import { FaNewspaper } from "react-icons/fa6"
// import './Main.css';
import { ReactElement } from "react"

export const GridCrads = (): ReactElement => {
  const newsItems = [
    {
      title: "Notícias do Mundo do Trabalho de Arapiraca",
      date: "3 dias atrás",
      content:
        "Inscrições abertas para cursos gratuitos em tecnologia Inscrições abertas para cursos gratuitos em tecnologia Inscrições abertas para cursos gratuitos em tecnologia Inscrições abertas para cursos gratuitos em tecnologia",
        link: "#"
    },
    {
      title: "Feira de Empregabilidade CITE - Anual (2024/2025)",
      date: "5 dias atrás",
      content: "Evento reunirá mais de 100 empresas no centro de convenções",
      link: "#"
    },
    {
      title: "PDF do último estudo do observatório do Trabalho",
      date: "5 dias atrás",
      content: "Evento reunirá mais de 100 empresas no centro de convenções",
      link: "#"
    },
    {
      title: "Mapa por CNPJs Ativos em Arapiraca",
      date: "5 dias atrás",
      content: "Evento reunirá mais de 100 empresas no centro de convenções",
      link: "#"
    },
    {
      title: "SINE Municipal de Arapiraca",
      date: "5 dias atrás",
      content: "Evento reunirá mais de 100 empresas no centro de convenções",
      link: "#"
    },
    {
      title: "Formulário de Estudos e Pesquisa",
      date: "5 dias atrás",
      content: "Evento reunirá mais de 100 empresas no centro de convenções",
      link: "https://forms.gle/xxjr28PxjfnZYS9X6",
    },
  ]

  return (
    <section className="w-full p-6">
      <article className=" bg-white rounded-lg shadow-sm p-6">
        <h2 className="font-bold  mb-8 flex items-center gap-4 text-2xl justify-center text-primary-blue">
          <FaNewspaper className="text-3xl text-primary-blue" />
          Destaques
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <a
              href={item.link}
              className="block p-7 rounded-xl border-2 text-gray-600 bg-white shadow-2xl hover: hover:bg-off-white hover:border-2 hover:border-primary-color"
              target="_blank"
              key={index}
            >
              <div className="font-bold text-sm">
                <div className="flex justify-between flex-row pb-4 gap-2">
                  <h1 className="line-clamp-2">{item.title}</h1>
                  <span className="text-md w-32">{item.date}</span>
                </div>
              </div>
              <p className="line-clamp-3">{item.content}</p>
            </a>
          ))}
        </div>
      </article>
    </section>
  )
}
