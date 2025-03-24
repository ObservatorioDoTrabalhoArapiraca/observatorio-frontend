interface SocialLinks {
    facebook: string;
    twitter: string;
    instagram: string;
}
export declare const socialLinks: SocialLinks;
declare global {
    interface Window {
        socialLinks: SocialLinks;
    }
}
export {};
