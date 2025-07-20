/**
 * Interfaces TypeScript para o template Next.js
 * Separado do schema JSON-LD para SEO
 */

// ============================================================================
// CONFIGURAÇÕES DO SITE
// ============================================================================

export interface SiteConfig {
  // Informações básicas do site
  siteName: string;
  siteUrl: string;
  siteDescription: string;
  
  // Configurações de contato
  contact: ContactConfig;
  
  // Configurações de SEO
  seo: SEOConfig;
  
  // Configurações do Google
  google: GoogleConfig;
  
  // Configurações de reCAPTCHA
  recaptcha: ReCaptchaConfig;
  
  // Configurações de cores e fontes (para Tailwind)
  theme: ThemeConfig;
  
  // Configurações de redes sociais
  social: SocialConfig;
}

export interface ContactConfig {
  phone: string;
  phoneLink: string;
  whatsapp: string;
  whatsappLink: string;
  email: string;
  address: AddressConfig;
  workingHours: WorkingHoursConfig;
  mapIframe: string;
  mapLink: string;
}

export interface AddressConfig {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface WorkingHoursConfig {
  weekdays: string;
  weekends: string;
}

export interface SEOConfig {
  forceWWW: boolean; // true = força www, false = força sem www
  defaultLanguage: string;
  defaultLocale: string;
}

export interface GoogleConfig {
  tagManagerId: string;
  analyticsId: string;
  adsId: string;
  searchConsoleId: string;
}

export interface ReCaptchaConfig {
  enabled: boolean;
  siteKey: string;
  secretKey: string;
}

export interface ThemeConfig {
  colors: ThemeColors;
  fonts: ThemeFonts;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
}

export interface ThemeFonts {
  primary: string;
  secondary: string;
}

export interface SocialConfig {
  facebook: string;
  instagram: string;
  linkedin: string;
  youtube: string;
  twitter: string;
  tiktok: string;
}

// ============================================================================
// METADADOS E SEO
// ============================================================================

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

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage: string;
  ogType: string;
  twitterCard: string;
  structuredData?: object;
}

// ============================================================================
// TEMA E ESTILOS
// ============================================================================

export interface ThemeColorsExtended {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface TailwindTheme {
  extend: {
    colors: {
      primary: ThemeColorsExtended;
      secondary: ThemeColorsExtended;
      tertiary: ThemeColorsExtended;
      quaternary: ThemeColorsExtended;
    };
    fontFamily: {
      primary: string[];
      secondary: string[];
    };
    spacing: Record<string, string>;
    animation: Record<string, string>;
    keyframes: Record<string, object>;
  };
}

// ============================================================================
// REDIRECTS E REWRITES
// ============================================================================

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

// ============================================================================
// PRODUTOS E SERVIÇOS
// ============================================================================

export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  tags: string[];
  features: string[];
  specifications?: Record<string, string>;
  inStock: boolean;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
  parentId?: string;
  children?: Category[];
  productCount: number;
}

// ============================================================================
// CONTEÚDO E BLOG
// ============================================================================

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  isPublished: boolean;
  seo: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

export interface Banner {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  mobileImage?: string;
  buttonText?: string;
  buttonLink?: string;
  isActive: boolean;
  order: number;
}

// ============================================================================
// DEPOIMENTOS E AVALIAÇÕES
// ============================================================================

export interface Testimonial {
  id: string;
  name: string;
  company?: string;
  position?: string;
  content: string;
  rating: number;
  image?: string;
  source: 'google' | 'facebook' | 'instagram' | 'manual';
  sourceUrl?: string;
  isVerified: boolean;
  createdAt: string;
}

// ============================================================================
// FAQ E SUPORTE
// ============================================================================

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
  order: number;
  isActive: boolean;
}

// ============================================================================
// FORMULÁRIOS
// ============================================================================

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  source?: string;
  acceptTerms: boolean;
}

export interface NewsletterForm {
  email: string;
  name?: string;
  interests?: string[];
  acceptMarketing: boolean;
}

// ============================================================================
// NAVEGAÇÃO E MENU
// ============================================================================

export interface MenuItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
  children?: MenuItem[];
  isExternal?: boolean;
  isButton?: boolean;
}

export interface SocialMediaItem {
  name: string;
  icon: string;
  url: string;
}

// ============================================================================
// API E RESPONSES
// ============================================================================

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
  errors?: string[];
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// ============================================================================
// ANIMAÇÕES E EFEITOS
// ============================================================================

export interface AnimationConfig {
  duration: number;
  delay: number;
  ease: string;
  stagger?: number;
}

// ============================================================================
// CONFIGURAÇÕES DE FUNCIONALIDADES
// ============================================================================

export interface FeaturesConfig {
  blog: boolean;
  shop: boolean;
  testimonials: boolean;
  newsletter: boolean;
  chat: boolean;
  recaptcha: boolean;
}

export interface IntegrationsConfig {
  googleAnalytics: string;
  googleTagManager: string;
  facebookPixel: string;
  hotjar: string;
}

// ============================================================================
// TIPOS UTILITÁRIOS
// ============================================================================

export type SocialPlatform = 'facebook' | 'instagram' | 'linkedin' | 'youtube' | 'twitter' | 'tiktok';

export type ContactMethod = 'email' | 'whatsapp' | 'phone';

export type PageType = 'home' | 'about' | 'services' | 'contact' | 'blog' | 'products';

export type ThemeMode = 'light' | 'dark' | 'auto';

// ============================================================================
// VALIDAÇÕES E CONSTRAINTS
// ============================================================================

export interface ValidationRules {
  email: RegExp;
  phone: RegExp;
  url: RegExp;
  zipCode: RegExp;
}

export const VALIDATION_RULES: ValidationRules = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\+?[\d\s\-\(\)]+$/,
  url: /^https?:\/\/.+/,
  zipCode: /^\d{5}-?\d{3}$/,
};

// ============================================================================
// CONFIGURAÇÕES PADRÃO
// ============================================================================

export const DEFAULT_CONFIG: Partial<SiteConfig> = {
  siteName: 'Template Next.js',
  siteUrl: 'http://localhost:3000',
  siteDescription: 'Especialistas em marketing digital, SEO, design e desenvolvimento web',
  seo: {
    forceWWW: true,
    defaultLanguage: 'pt-BR',
    defaultLocale: 'pt_BR',
  },
  recaptcha: {
    enabled: false,
    siteKey: '',
    secretKey: '',
  },
  theme: {
    colors: {
      primary: '#2563eb',
      secondary: '#7c3aed',
      tertiary: '#10b981',
      quaternary: '#ef4444',
    },
    fonts: {
      primary: 'Inter',
      secondary: 'Poppins',
    },
  },
}; 