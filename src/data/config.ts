export interface SiteConfig {
  // Informações básicas do site
  siteName: string;
  siteUrl: string;
  
  // Configurações de contato
  contact: {
    phone: string;
    phoneLink: string;
    whatsapp: string;
    whatsappLink: string;
    email: string;
    addresses: Array<{
      name: string;
      street: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
      workingHours: {
        weekdays: string;
        weekends: string;
        holidays?: string;
        specialPeriod?: {
          title: string;
          period: string;
          weekdays: string;
          weekends: string;
        };
      };
      mapIframe?: string;
      mapLink?: string;
    }>;
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
      quinary: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
    googleFonts: {
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
  siteName: 'Altitude Park',
  siteUrl: 'https://altitudepark.com.br/',
  
  // Configurações de contato
  contact: {
    phone: '+55 (11) 2385-2640',
    phoneLink: 'tel:+551123852640',
    whatsapp: '+55 (11) 96916-5905',
    whatsappLink: 'https://wa.me/5511969165905',
    email: 'sac@altitudepark.com.br',
    addresses: [
      {
        name: 'Alphaville',
        street: 'Alameda Amazonas, 316',
        city: 'Alphaville',
        state: 'SP',
        zipCode: '06454-000',
        country: 'Brasil',
        workingHours: {
          weekdays: 'Segunda à Sábado: das 11:00 às 22:00',
          weekends: 'Domingo e Feriados: das 11:00 às 21:00',
          specialPeriod: {
            title: 'Horário Especial de Férias',
            period: 'de 01/07 à 31/07',
            weekdays: 'Segunda à Sábado: das 11:00 às 22:00',
            weekends: 'Domingo e Feriados: das 11:00 às 21:00',
          },
        },
      },
      {
        name: 'Americana',
        street: 'Rua Valdomiro Aranha Neto, 33',
        city: 'Jardim Helena - Americana',
        state: 'SP',
        zipCode: '13477-270',
        country: 'Brasil',
        workingHours: {
          weekdays: 'Segunda à Sábado: das 11:00 às 22:00',
          weekends: 'Domingo e Feriados: das 11:00 às 21:00',
          specialPeriod: {
            title: 'Horário Especial de Férias',
            period: 'de 01/07 à 31/07',
            weekdays: 'Segunda à Sábado: das 11:00 às 22:00',
            weekends: 'Domingo e Feriados: das 11:00 às 21:00',
          },
        },
      },
      {
        name: 'Campinas',
        street: 'Rua Dona Maria Umbelina Couto, 395',
        city: 'Taquaral - Campinas',
        state: 'SP',
        zipCode: '13076-001',
        country: 'Brasil',
        workingHours: {
          weekdays: 'Segunda à Sábado: das 11:00 às 22:00',
          weekends: 'Domingo e Feriados: das 11:00 às 21:00',
          specialPeriod: {
            title: 'Horário Especial de Férias',
            period: 'de 01/07 à 31/07',
            weekdays: 'Segunda à Sábado: das 11:00 às 22:00',
            weekends: 'Domingo e Feriados: das 11:00 às 21:00',
          },
        },
      },
      {
        name: 'Moema',
        street: 'Av. dos Bandeirantes, 5000',
        city: 'Moema - São Paulo',
        state: 'SP',
        zipCode: '04553-003',
        country: 'Brasil',
        workingHours: {
          weekdays: 'Segunda à Sábado: das 11:00 às 22:00',
          weekends: 'Domingo e Feriados: das 11:00 às 21:00',
          specialPeriod: {
            title: 'Horário Especial de Férias',
            period: 'de 01/07 à 31/07',
            weekdays: 'Segunda à Sábado: das 11:00 às 22:00',
            weekends: 'Domingo e Feriados: das 11:00 às 21:00',
          },
        },
      },
      {
        name: 'Morumbi',
        street: 'Av. das Nações Unidas, 14401 - Shopping Parque da Cidade',
        city: 'Chácara Santo Antônio',
        state: 'SP',
        zipCode: '',
        country: 'Brasil',
        workingHours: {
          weekdays: 'Segunda à Sábado: das 10:00 às 22:00',
          weekends: 'Domingo: das 12:00 às 20:00',
          holidays: 'Feriado: das 12:00 às 20:00',
        },
      },
      {
        name: 'São José dos Campos',
        street: 'Av. São João, 2200 - Shopping Center Colinas',
        city: 'Jd das Colinas - SJC',
        state: 'SP',
        zipCode: '',
        country: 'Brasil',
        workingHours: {
          weekdays: 'Segunda à Sábado: das 12:00 às 22:00',
          weekends: 'Domingo: das 13:00 às 20:00',
          holidays: 'Feriado: das 13:00 às 20:00',
        },
      },
      {
        name: 'Tatuapé/Anália Franco',
        street: 'Avenida Dr. Eduardo Cotching, 410/450',
        city: 'Tatuapé',
        state: 'SP',
        zipCode: '03356-000',
        country: 'Brasil',
        workingHours: {
          weekdays: 'Segunda à Sábado: das 11:00 às 22:00',
          weekends: 'Domingo e Feriados: das 11:00 às 21:00',
          specialPeriod: {
            title: 'Horário Especial de Férias',
            period: 'de 01/07 à 31/07',
            weekdays: 'Segunda à Sábado: das 11:00 às 22:00',
            weekends: 'Domingo e Feriados: das 11:00 às 21:00',
          },
        },
      },
      {
        name: 'Shopping Vila Olímpia',
        street: 'Rua Olimpíadas, 360 - Loja 419 - 3° Piso',
        city: 'Vila Olímpia - Shopping Vila Olímpia',
        state: 'SP',
        zipCode: '04551-000',
        country: 'Brasil',
        workingHours: {
          weekdays: 'Segunda à Sábado: das 10:00 às 22:00',
          weekends: 'Domingo: das 12:00 às 20:00',
          holidays: 'Feriado: das 12:00 às 20:00',
        },
      },
    ],
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
    enabled: true,
    phone: '5511969165905',
    message: 'Olá, vim pelo site!',
  },
  
  // Configurações de cores e fontes (para Tailwind)
  theme: {
    colors: {
      primary: '#ec108e', 
      secondary: '#16b0ef', 
      tertiary: '#ff914d',
      quaternary: '#ffde59',
      quinary: '#7ed957',
    },
    fonts: {
      primary: 'FontPrincipal',
      secondary: 'Poppins',
    },
    googleFonts: {
      primary: '', // Fonte local - não precisa de Google Fonts
      secondary: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
    },
  },
  
  // Configurações de redes sociais
  social: {
    facebook: 'https://www.facebook.com/altitude.park/',
    instagram: 'https://www.instagram.com/altitude.park/',
    linkedin: '',
    youtube: '',
    twitter: '',
    tiktok: '',
  },
};

// Funções utilitárias
export function getWhatsAppLink(message?: string): string {
  const defaultMessage = 'Olá, vim pelo site! Gostaria de saber mais sobre a Altitude Park';
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

// Função para obter endereço completo de uma sede específica
export function getFullAddress(locationName?: string): string {
  const addresses = siteConfig.contact.addresses;
  const address = locationName 
    ? addresses.find(addr => addr.name === locationName)
    : addresses[0]; // Retorna o primeiro endereço se não especificado
  
  if (!address) return '';
  
  return `${address.street}, ${address.city} - ${address.state}, ${address.zipCode}, ${address.country}`;
}

// Função para obter horário de funcionamento de uma sede específica
export function getWorkingHours(locationName?: string): string {
  const addresses = siteConfig.contact.addresses;
  const address = locationName 
    ? addresses.find(addr => addr.name === locationName)
    : addresses[0]; // Retorna o primeiro endereço se não especificado
  
  if (!address) return '';
  
  const { workingHours } = address;
  return `${workingHours.weekdays} | ${workingHours.weekends}`;
}

// Função para obter todas as sedes
export function getAllAddresses() {
  return siteConfig.contact.addresses;
}

// Função para obter uma sede específica
export function getAddress(locationName: string) {
  return siteConfig.contact.addresses.find(addr => addr.name === locationName);
}

// Função para verificar se deve usar www ou não
export function getCanonicalUrl(path: string = ''): string {
  const baseUrl = siteConfig.seo.forceWWW 
    ? siteConfig.siteUrl.replace('https://', 'https://www.')
    : siteConfig.siteUrl.replace('https://www.', 'https://');
  
  return `${baseUrl}${path}`;
}

// Função para obter todas as fontes do Google Fonts
export function getGoogleFontsLinks(): string[] {
  const links = [];
  
  if (siteConfig.theme.googleFonts.primary) {
    links.push(siteConfig.theme.googleFonts.primary);
  }
  
  if (siteConfig.theme.googleFonts.secondary) {
    links.push(siteConfig.theme.googleFonts.secondary);
  }
  
  return links;
}

// Função para obter o nome da fonte primária
export function getPrimaryFontName(): string {
  return siteConfig.theme.fonts.primary;
} 