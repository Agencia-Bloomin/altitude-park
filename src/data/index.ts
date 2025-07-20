// Importa configurações
import { siteConfig } from './config';

// Exporta configurações específicas para evitar conflitos
export { 
  siteConfig, 
  getWhatsAppLink,
  getPhoneLink,
  getEmailLink,
  getFullAddress,
  getWorkingHours,
  getCanonicalUrl
} from './config';

// Exporta dados de contato e redes sociais diretamente do config
export const contactInfo = {
  phone: siteConfig.contact.phone,
  phoneLink: siteConfig.contact.phoneLink,
  whatsapp: siteConfig.contact.whatsapp,
  whatsappLink: siteConfig.contact.whatsappLink,
  email: siteConfig.contact.email,
  address: siteConfig.contact.address,
  workingHours: siteConfig.contact.workingHours,
  mapIframe: siteConfig.contact.mapIframe,
  mapLink: siteConfig.contact.mapLink,
};

// Função para verificar se uma rede social está configurada
function isSocialConfigured(url: string): boolean {
  return Boolean(url && url.trim() !== '' && url !== 'https://facebook.com/suaempresa' && 
         url !== 'https://instagram.com/suaempresa' && 
         url !== 'https://linkedin.com/company/suaempresa' && 
         url !== 'https://youtube.com/@suaempresa' && 
         url !== 'https://twitter.com/suaempresa' && 
         url !== 'https://tiktok.com/@suaempresa');
}

// Redes sociais filtradas (apenas as que estão configuradas)
export const socialMedia = [
  {
    name: 'Facebook',
    icon: 'facebook',
    url: siteConfig.social.facebook,
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    url: siteConfig.social.instagram,
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    url: siteConfig.social.linkedin,
  },
  {
    name: 'YouTube',
    icon: 'youtube',
    url: siteConfig.social.youtube,
  },
  {
    name: 'Twitter',
    icon: 'twitter',
    url: siteConfig.social.twitter,
  },
  {
    name: 'TikTok',
    icon: 'tiktok',
    url: siteConfig.social.tiktok,
  },
].filter(social => isSocialConfigured(social.url));

export { 
  siteMetadata, 
  pagesMetadata, 
  generateMetadata,
  getPageMetadata
} from './metadata';

export { 
  themeColors, 
  themeFonts, 
  tailwindTheme,
  getPrimaryColor,
  getSecondaryColor,
  getTertiaryColor,
  getQuaternaryColor,
  getPrimaryFont,
  getSecondaryFont
} from './theme';

export { 
  redirectRules, 
  rewriteRules, 
  nextRedirects, 
  nextRewrites,
  getAllRedirects,
  checkRedirect,
  getWWWRedirect
} from './redirects'; 