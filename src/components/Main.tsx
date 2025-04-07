
import React from 'react';
import './Main.css';
import { FaNewspaper } from 'react-icons/fa6'

const MainContent: React.FC = () => {
  const newsItems = [
    {
      title: "Novo Programa de Capacitação",
      date: "3 dias atrás",
      content: "Inscrições abertas para cursos gratuitos em tecnologia"
    },
    {
      title: "Feira de Empregos 2024",
      date: "5 dias atrás",
      content: "Evento reunirá mais de 100 empresas no centro de convenções"
    }
  ];

  return (
    <main id="conteudo">
      <section className="news-section">
        <article className="news-card">
          <h2>
            <FaNewspaper className="news-icon" />
            Últimas Notícias
          </h2>
          <div className="news-list">
            {newsItems.map((item, index) => (
              <a href="#" className="news-item" key={index}>
                <div className="news-header">
                  <h1>{item.title}</h1>
                  <span>{item.date}</span>
                </div>
                <p>{item.content}</p>
              </a>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
};

export default MainContent;