import { siteConfig } from './config';

export interface RedirectRule {
  source: string;
  destination: string;
  permanent: boolean;
  statusCode?: number;
}

export interface RewriteRule {
  source: string;
  destination: string;
  conditions?: string[];
}

// Configuração de redirects (equivalente ao .htaccess)
export const redirectRules: RedirectRule[] = [
  // Exemplos de redirects comuns
  // {
  //   source: '/old-page',
  //   destination: '/new-page',
  //   permanent: true,
  //   statusCode: 301,
  // },
  // {
  //   source: '/blog/old-post',
  //   destination: '/blog/new-post',
  //   permanent: true,
  //   statusCode: 301,
  // },
];

// Configuração de rewrite rules
export const rewriteRules: RewriteRule[] = [
  // Exemplos de rewrite rules
  // {
  //   source: '/produto/:slug',
  //   destination: '/produtos/[slug]',
  // },
  // {
  //   source: '/categoria/:category',
  //   destination: '/categorias/[category]',
  // },
];

// Função para forçar www ou sem www
export function getWWWRedirect(): RedirectRule | null {
  // Desabilitado temporariamente para evitar redirecionamentos indesejados
  return null;
  
  // if (siteConfig.seo.forceWWW) {
  //   return {
  //     source: 'https://suaempresa.com.br/:path*',
  //     destination: 'https://www.suaempresa.com.br/:path*',
  //     permanent: true,
  //     statusCode: 301,
  //   };
  // } else {
  //   return {
  //     source: 'https://www.suaempresa.com.br/:path*',
  //     destination: 'https://suaempresa.com.br/:path*',
  //     permanent: true,
  //     statusCode: 301,
  //   };
  // }
}

// Função para obter todos os redirects
export function getAllRedirects(): RedirectRule[] {
  const wwwRedirect = getWWWRedirect();
  return wwwRedirect ? [wwwRedirect, ...redirectRules] : redirectRules;
}

// Função para verificar se uma URL precisa de redirect
export function checkRedirect(url: string): RedirectRule | null {
  const allRedirects = getAllRedirects();
  
  for (const rule of allRedirects) {
    // Implementar lógica de matching de URL aqui
    if (url.includes(rule.source)) {
      return rule;
    }
  }
  
  return null;
}

// Configuração para next.config.js
export const nextRedirects = () => {
  const redirects = getAllRedirects();
  
  return redirects.map(rule => ({
    source: rule.source,
    destination: rule.destination,
    permanent: rule.permanent,
  }));
};

// Configuração para next.config.js (rewrites)
export const nextRewrites = () => {
  return rewriteRules.map(rule => ({
    source: rule.source,
    destination: rule.destination,
  }));
}; 