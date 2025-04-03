import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-principal">
          <div className="header-logo">
            <img 
              src="/images/logo-arapiraca.png" 
              alt="Brasão da cidade de Arapiraca"
            />
          </div>
          <div className="header-titles">
            <h1>Observatório do Trabalho</h1>
            <p>Prefeitura Municipal de Arapiraca</p> 
          </div>
        </div>
        <div className="sine-logo">
          <img 
            src="/images/sine-logo.jpg" 
            alt="Logo do Sine"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;