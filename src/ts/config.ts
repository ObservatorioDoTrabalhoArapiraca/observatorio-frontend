interface SocialLinks {
    facebook: string;
    twitter: string;
    instagram: string;
  }
  
  // Exporte as configurações
  export const socialLinks: SocialLinks = {
    facebook: process.env.FACEBOOK_URL || '#',
    twitter: process.env.TWITTER_URL || '#',
    instagram: process.env.INSTAGRAM_URL || '#'
  };
  
  // Extenda a interface Window
  declare global {
    interface Window {
      socialLinks: SocialLinks;
    }
  }