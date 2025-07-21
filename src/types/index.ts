

// Tipos para menu
export interface MenuItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
  children?: MenuItem[];
  isExternal?: boolean;
  isButton?: boolean;
}

// Tipos para banner/carrossel
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

// Tipos para depoimentos
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

// Tipos para FAQ
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
  order: number;
  isActive: boolean;
}

// Tipos para blog
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

// Tipos para formulários
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

// Tipos para configurações do site
export interface SiteConfig {
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    darkMode: boolean;
  };
  features: {
    blog: boolean;
    shop: boolean;
    testimonials: boolean;
    newsletter: boolean;
    chat: boolean;
  };
  integrations: {
    googleAnalytics: string;
    googleTagManager: string;
    facebookPixel: string;
    hotjar: string;
  };
}

// Tipos para API responses
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

// Tipos para animações
export interface AnimationConfig {
  duration: number;
  delay: number;
  ease: string;
  stagger?: number;
}

// Tipos para SEO
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

// Exporta as interfaces TypeScript
export * from './interfaces';

// Exporta o schema JSON-LD para SEO
export * from './schema';

// Exporta as validações
export * from './validation'; 