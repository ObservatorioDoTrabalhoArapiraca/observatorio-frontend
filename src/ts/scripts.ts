import { socialLinks, SocialLinks } from "./config";

function applySocialLinks() {
    const links = document.querySelectorAll<HTMLAnchorElement>('.social-link'); // Define tipo correto
  
    links.forEach((link) => {
        const platform = String(link.getAttribute('data-platform')) as keyof SocialLinks;
  
      if (platform && socialLinks[platform]) {
        const url = socialLinks[platform];
  
        if (url !== '#') {
          link.setAttribute('href', url);
          link.setAttribute('target', '_blank'); // Abre em nova aba
          link.setAttribute('rel', 'noopener noreferrer'); // Segurança
          console.log(`Link ${platform} definido para:`, url);
        } else {
          console.warn(`URL não definida para ${platform}`);
          link.style.opacity = '0.5'; // Indica que está desativado
          link.removeAttribute('href'); // Evita navegação errada
        }
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', applySocialLinks);
  