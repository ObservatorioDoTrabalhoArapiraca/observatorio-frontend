import { socialLinks } from "./config";

function applySocialLinks() {
  const links = document.querySelectorAll<HTMLAnchorElement>('.social-link');

  links.forEach((link) => {
    const platform = link.getAttribute('data-platform') as keyof typeof socialLinks;

    if (platform && socialLinks[platform]) {
      const url = socialLinks[platform];

      if (url !== '#') {
        link.setAttribute('href', url);
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        console.log(`Link ${platform} definido para:`, url);
      } else {
        console.warn(`URL não definida para ${platform}`);
        link.style.opacity = '0.5';
        link.removeAttribute('href');
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', applySocialLinks);