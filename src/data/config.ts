export interface SiteConfig {
  // Informações básicas do site
  siteName: string;
  siteUrl: string;
  siteDescription: string;
  
  // Configurações de contato
  contact: {
    phone: string;
    phoneLink: string;
    whatsapp: string;
    whatsappLink: string;
    email: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
    };
    workingHours: {
      weekdays: string;
      weekends: string;
    };
    mapIframe: string;
    mapLink: string;
  };
  
  // Configurações de SEO
  seo: {
    forceWWW: boolean; // true = força www, false = força sem www
    defaultLanguage: string;
    defaultLocale: string;
  };
  
  // Configurações do Google
  google: {
    tagManagerId: string;
    analyticsId: string;
    adsId: string;
    searchConsoleId: string;
  };
  
  // Configurações de reCAPTCHA
  recaptcha: {
    enabled: boolean;
    siteKey: string;
    secretKey: string;
  };

  // Configurações SMTP
  smtp: {
    host: string;
    port: string;
    secure: boolean;
    user: string;
    password: string;
    fromEmail: string;
    fromName: string;
  };

  // Configurações WhatsApp
  whatsapp: {
    enabled: boolean;
    phone: string;
    message: string;
  };
  
  // Configurações de cores e fontes (para Tailwind)
  theme: {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
  };
  
  // Configurações de redes sociais
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
    youtube: string;
    twitter: string;
    tiktok: string;
  };
}

// CONFIGURAÇÃO PRINCIPAL - EDITE AQUI OS DADOS DA EMPRESA
export const siteConfig: SiteConfig = {
  // Informações básicas do site
  siteName: 'Template PHP Bloomin',
  siteUrl: 'https://bloomin.com.br',
  siteDescription: 'Especialistas em marketing digital, SEO, design e desenvolvimento web',
  
  // Configurações de contato
  contact: {
    phone: '+55 (11) 91234-5678',
    phoneLink: 'tel:+5511912345678',
    whatsapp: '+55 (11) 91234-5678',
    whatsappLink: 'https://wa.me/5511912345678',
    email: 'contato@template.com.br',
    address: {
      street: 'Rua das Flores, 123 - Sala 456',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '01234-567',
      country: 'Brasil',
    },
    workingHours: {
      weekdays: 'Segunda a Sexta: 9h às 18h',
      weekends: 'Sábado: 9h às 14h',
    },
    mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    mapLink: 'https://maps.google.com/?q=Rua+das+Flores,+123,+São+Paulo,+SP',
  },
  
  // Configurações de SEO
  seo: {
    forceWWW: true, // true = força www, false = força sem www
    defaultLanguage: 'pt-BR',
    defaultLocale: 'pt_BR',
  },
  
  // Configurações do Google
  google: {
    tagManagerId: 'GTM-XXXXXXX',
    analyticsId: 'G-XXXXXXXXXX',
    adsId: 'AW-XXXXXXXXXX',
    searchConsoleId: 'XXXXXXXXXX',
  },
  
  // Configurações de reCAPTCHA
  recaptcha: {
    enabled: false,
    siteKey: '', 
    secretKey: '', 
  },

  // Configurações SMTP
  smtp: {
    host: 'smtp.gmail.com',
    port: '587',
    secure: false,
    user: 'seu@email.com',
    password: 'sua-senha-app',
    fromEmail: 'contato@suaempresa.com.br',
    fromName: 'Sua Empresa',
  },

  // Configurações WhatsApp
  whatsapp: {
    enabled: false,
    phone: '5511999999999',
    message: 'Olá! Gostaria de saber mais sobre seus serviços.',
  },
  
  // Configurações de cores e fontes (para Tailwind)
  theme: {
    colors: {
      primary: '#421185', 
      secondary: '#a70000', 
      tertiary: '#10b981',
      quaternary: '#ef4444',
    },
    fonts: {
      primary: 'Inter',
      secondary: 'Poppins',
    },
  },
  
  // Configurações de redes sociais
  social: {
    facebook: 'https://www.facebook.com/agenciabloomin/',
    instagram: 'https://www.instagram.com/agenciabloomin/',
    linkedin: '',
    youtube: '',
    twitter: '',
    tiktok: '',
  },
};

// Funções utilitárias
export function getWhatsAppLink(message?: string): string {
  const defaultMessage = 'Olá! Gostaria de saber mais sobre os serviços.';
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  return `${siteConfig.contact.whatsappLink}?text=${encodedMessage}`;
}

export function getPhoneLink(): string {
  return siteConfig.contact.phoneLink;
}

export function getEmailLink(subject?: string, body?: string): string {
  const defaultSubject = 'Solicitação de Orçamento';
  const defaultBody = 'Olá! Gostaria de solicitar um orçamento.';
  
  const params = new URLSearchParams({
    subject: subject || defaultSubject,
    body: body || defaultBody,
  });
  
  return `mailto:${siteConfig.contact.email}?${params.toString()}`;
}

// Função para obter endereço completo
export function getFullAddress(): string {
  const { address } = siteConfig.contact;
  return `${address.street}, ${address.city} - ${address.state}, ${address.zipCode}, ${address.country}`;
}

// Função para obter horário de funcionamento
export function getWorkingHours(): string {
  const { workingHours } = siteConfig.contact;
  return `${workingHours.weekdays} | ${workingHours.weekends}`;
}

// Função para verificar se deve usar www ou não
export function getCanonicalUrl(path: string = ''): string {
  const baseUrl = siteConfig.seo.forceWWW 
    ? siteConfig.siteUrl.replace('https://', 'https://www.')
    : siteConfig.siteUrl.replace('https://www.', 'https://');
  
  return `${baseUrl}${path}`;
} 