import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <button 
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger"></span>
        </button>
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/project">O Projeto</Link></li>
            <li><a href="/data">Dados e Estatísticas</a></li>
            <li><a href="/legislacao">Legislação</a></li>
            <li><a href="/relatorio">Documentos</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;