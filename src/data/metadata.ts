export interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  ogImage?: string;
  canonical?: string;
}

export interface SiteMetadata {
  siteName: string;
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultKeywords: string[];
  defaultOgImage: string;
  twitterHandle: string;
}

import { siteConfig } from './config';

// Configuração global do site
export const siteMetadata: SiteMetadata = {
  siteName: siteConfig.siteName,
  siteUrl: siteConfig.siteUrl,
  defaultTitle: `${siteConfig.siteName} - Soluções em Marketing Digital`,
  defaultDescription: siteConfig.siteDescription,
  defaultKeywords: ['marketing digital', 'SEO', 'design', 'desenvolvimento web', 'agência digital'],
  defaultOgImage: '/images/og-default.jpg',
  twitterHandle: '@suaempresa',
};

// Metadados por página
export const pagesMetadata: Record<string, PageMetadata> = {
  home: {
    title: 'Sua Empresa - Marketing Digital de Resultados',
    description: 'Transforme sua presença online com nossas soluções de marketing digital. SEO, design e desenvolvimento web para resultados reais.',
    keywords: ['marketing digital', 'SEO', 'design', 'desenvolvimento web', 'agência digital'],
    h1: 'Transforme sua presença online com marketing digital de resultados',
    canonical: '/',
  },
  about: {
    title: 'Sobre Nós - Sua Empresa',
    description: 'Conheça nossa história, valores e equipe especializada em marketing digital. Mais de 10 anos transformando negócios.',
    keywords: ['sobre nós', 'história', 'equipe', 'valores', 'marketing digital'],
    h1: 'Sobre Nós - Especialistas em Marketing Digital',
    canonical: '/sobre',
  },
  services: {
    title: 'Nossos Serviços - Marketing Digital',
    description: 'Oferecemos serviços completos de marketing digital: SEO, design, desenvolvimento web, mídia social e muito mais.',
    keywords: ['serviços', 'SEO', 'design', 'desenvolvimento web', 'mídia social'],
    h1: 'Nossos Serviços de Marketing Digital',
    canonical: '/servicos',
  },
  contact: {
    title: 'Contato - Sua Empresa',
    description: 'Entre em contato conosco para transformar sua presença digital. Atendimento personalizado e soluções sob medida.',
    keywords: ['contato', 'atendimento', 'orçamento', 'marketing digital'],
    h1: 'Entre em Contato Conosco',
    canonical: '/contato',
  },
  blog: {
    title: 'Blog - Marketing Digital e Tendências',
    description: 'Fique por dentro das últimas tendências em marketing digital, SEO, design e tecnologia. Artigos exclusivos e insights valiosos.',
    keywords: ['blog', 'marketing digital', 'tendências', 'SEO', 'design'],
    h1: 'Blog - Tendências em Marketing Digital',
    canonical: '/blog',
  },
};

// Função para obter metadados de uma página específica
export function getPageMetadata(page: string): PageMetadata {
  return pagesMetadata[page] || {
    title: siteMetadata.defaultTitle,
    description: siteMetadata.defaultDescription,
    keywords: siteMetadata.defaultKeywords,
    h1: 'Sua Empresa',
  };
}

// Função para gerar metadados completos
export function generateMetadata(page: string, customData?: Partial<PageMetadata>) {
  const baseMetadata = getPageMetadata(page);
  const metadata = { ...baseMetadata, ...customData };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords.join(', '),
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `${siteMetadata.siteUrl}${metadata.canonical || '/'}`,
      siteName: siteMetadata.siteName,
      images: [
        {
          url: metadata.ogImage || siteMetadata.defaultOgImage,
          width: 1200,
          height: 630,
          alt: metadata.title,
        },
      ],
      locale: 'pt_BR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: [metadata.ogImage || siteMetadata.defaultOgImage],
      creator: siteMetadata.twitterHandle,
    },
    alternates: {
      canonical: `${siteMetadata.siteUrl}${metadata.canonical || '/'}`,
    },
  };
} 