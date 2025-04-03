// src/components/Navigation.tsx
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
            <li><a href="/">O Projeto</a></li>
            <li><a href="/dados">Dados e Estatísticas</a></li>
            <li><a href="/publicacoes">Publicações</a></li>
            <li><a href="/legislacao">Legislação</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;