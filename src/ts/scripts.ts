import { socialLinks } from './config';

// Atribuição correta com tipagem TypeScript
window.socialLinks = socialLinks;

// Função para alternar contraste
export function toggleContraste() {
  document.body.classList.toggle('high-contrast');
  localStorage.setItem('highContrast', 
    document.body.classList.contains('high-contrast') ? 'true' : 'false');
}

// Verifica preferência de contraste ao carregar
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('highContrast') === 'true') {
    document.body.classList.add('high-contrast');
  }
});