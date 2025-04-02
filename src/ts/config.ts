export interface SocialLinks {
  facebook: string;
  twitter: string;
  instagram: string;
}

export const socialLinks: SocialLinks = {
  facebook: process.env.FACEBOOK_URL || '#',
  twitter: process.env.TWITTER_URL || '#',
  instagram: process.env.INSTAGRAM_URL || '#'
};

