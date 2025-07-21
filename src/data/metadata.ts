import { siteConfig } from './config';
import type { Metadata } from 'next';

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

// Metadados por página
export const pagesMetadata: Record<string, PageMetadata> = {
  home: {
    title: `${siteConfig.siteName} | Diversão em Trampolins e Atrações`,
    description: 'Venha se divertir no Altitude Park com trampolins, brinquedos radicais e festas incríveis. Confira unidades, preços e viva essa experiência hoje!',
    keywords: ['trampolins', 'brinquedos radicais', 'festas incríveis', 'unidades', 'preços'],
    h1: 'Diversão em Trampolins e Atrações',
    canonical: '/',
  },
  about: {
    title: `Sobre Nós - ${siteConfig.siteName}`,
    description: 'Saiba tudo sobre o Altitude Park, nossa história, missão e valores, e descubra porque somos referência em diversão e trampolins no Brasil. Confira agora!',
    keywords: ['sobre nós', 'história', 'equipe', 'valores', 'trampolins', 'brinquedos radicais'],
    h1: 'Sobre Nós',
    canonical: '/sobre-nos',
  },
  contact: {
    title: `Contato - ${siteConfig.siteName}`,
    description: 'Entre em contato com o Altitude Park para tirar dúvidas, agendar festas ou saber tudo sobre unidades, horários e preços. Clique aqui e fale com a gente!',
    keywords: ['contato', 'atendimento', 'orçamento', 'trampolins', 'brinquedos radicais'],
    h1: 'Entre em Contato',
    canonical: '/contato',
  },
};

// Configuração global do site (usando metadados da home como padrão)
export const siteMetadata: SiteMetadata = {
  siteName: siteConfig.siteName,
  siteUrl: siteConfig.siteUrl,
  defaultTitle: pagesMetadata.home.title,
  defaultDescription: pagesMetadata.home.description,
  defaultKeywords: pagesMetadata.home.keywords,
  defaultOgImage: '/images/og-default.jpg',
  twitterHandle: '@suaempresa',
};

// Função para obter metadados de uma página específica
export function getPageMetadata(page: string): PageMetadata {
  return pagesMetadata[page] || pagesMetadata.home;
}

// Função para gerar metadados completos
export function generateMetadata(page: string, customData?: Partial<PageMetadata>): Metadata {
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
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
} 