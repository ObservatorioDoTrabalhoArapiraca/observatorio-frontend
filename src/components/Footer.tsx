import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h1>Contato</h1>
          <div className="contact-info">
            <p>
              <FaEnvelope className="footer-icon" />
              observatorio@prefeitura.arapiraca.al.gov.br
            </p>
            <p>
              <FaPhone className="footer-icon" />
              (82) 3521-0000
            </p>
          </div>
        </div>

        <div className="footer-section">
          <h1>Redes Sociais</h1>
          <div className="social-links">
            <a href="https://www.facebook.com/PrefeituraArapiraca/" className="social-link" aria-label="Facebook Oficial">
              <svg className="social-icon-svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a href="https://x.com/arapiracaal" className="social-link" aria-label="Perfil no X (Twitter)">
              <svg className="social-icon-svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/prefeituradearapiraca/?hl=pt" className="social-link" aria-label="Instagram Oficial">
              <svg className="social-icon-svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="copyright-notice">
        <p>© 2024 Prefeitura Municipal de Arapiraca - Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;