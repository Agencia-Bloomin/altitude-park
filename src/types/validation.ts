/**
 * Funções de validação baseadas no schema do template
 */

import { 
  ContactForm, 
  NewsletterForm, 
  Product, 
  BlogPost,
  SocialPlatform,
  ContactMethod 
} from './interfaces';

import { VALIDATION_RULES } from './interfaces';

// ============================================================================
// VALIDAÇÕES DE FORMULÁRIOS
// ============================================================================

export function validateContactForm(form: ContactForm): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Validações obrigatórias
  if (!form.name?.trim()) {
    errors.push('Nome é obrigatório');
  }

  if (!form.email?.trim()) {
    errors.push('Email é obrigatório');
  } else if (!VALIDATION_RULES.email.test(form.email)) {
    errors.push('Email inválido');
  }

  if (!form.message?.trim()) {
    errors.push('Mensagem é obrigatória');
  }

  // Validações opcionais
  if (form.phone && !VALIDATION_RULES.phone.test(form.phone)) {
    errors.push('Telefone inválido');
  }

  if (form.subject && form.subject.length < 3) {
    errors.push('Assunto deve ter pelo menos 3 caracteres');
  }

  if (!form.acceptTerms) {
    errors.push('Você deve aceitar os termos de uso');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

export function validateNewsletterForm(form: NewsletterForm): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!form.email?.trim()) {
    errors.push('Email é obrigatório');
  } else if (!VALIDATION_RULES.email.test(form.email)) {
    errors.push('Email inválido');
  }

  if (form.name && form.name.length < 2) {
    errors.push('Nome deve ter pelo menos 2 caracteres');
  }

  if (!form.acceptMarketing) {
    errors.push('Você deve aceitar receber marketing');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

// ============================================================================
// VALIDAÇÕES DE PRODUTOS
// ============================================================================

export function validateProduct(product: Product): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!product.name?.trim()) {
    errors.push('Nome do produto é obrigatório');
  }

  if (!product.description?.trim()) {
    errors.push('Descrição é obrigatória');
  }

  if (!product.shortDescription?.trim()) {
    errors.push('Descrição curta é obrigatória');
  }

  if (product.price < 0) {
    errors.push('Preço não pode ser negativo');
  }

  if (product.originalPrice && product.originalPrice < product.price) {
    errors.push('Preço original não pode ser menor que o preço atual');
  }

  if (!product.image?.trim()) {
    errors.push('Imagem principal é obrigatória');
  }

  if (!product.category?.trim()) {
    errors.push('Categoria é obrigatória');
  }

  if (!product.slug?.trim()) {
    errors.push('Slug é obrigatório');
  } else if (!/^[a-z0-9-]+$/.test(product.slug)) {
    errors.push('Slug deve conter apenas letras minúsculas, números e hífens');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

// ============================================================================
// VALIDAÇÕES DE BLOG
// ============================================================================

export function validateBlogPost(post: BlogPost): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!post.title?.trim()) {
    errors.push('Título é obrigatório');
  }

  if (!post.content?.trim()) {
    errors.push('Conteúdo é obrigatório');
  }

  if (!post.excerpt?.trim()) {
    errors.push('Resumo é obrigatório');
  }

  if (!post.slug?.trim()) {
    errors.push('Slug é obrigatório');
  } else if (!/^[a-z0-9-]+$/.test(post.slug)) {
    errors.push('Slug deve conter apenas letras minúsculas, números e hífens');
  }

  if (!post.author?.name?.trim()) {
    errors.push('Nome do autor é obrigatório');
  }

  if (!post.category?.trim()) {
    errors.push('Categoria é obrigatória');
  }

  if (post.readingTime <= 0) {
    errors.push('Tempo de leitura deve ser maior que zero');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

// ============================================================================
// VALIDAÇÕES DE URL E LINKS
// ============================================================================

export function validateUrl(url: string): boolean {
  return VALIDATION_RULES.url.test(url);
}

export function validateSocialUrl(platform: SocialPlatform, url: string): boolean {
  if (!url.trim()) return true; // URLs vazias são permitidas

  const platformPatterns: Record<SocialPlatform, RegExp> = {
    facebook: /^https?:\/\/(www\.)?facebook\.com\//,
    instagram: /^https?:\/\/(www\.)?instagram\.com\//,
    linkedin: /^https?:\/\/(www\.)?linkedin\.com\//,
    youtube: /^https?:\/\/(www\.)?(youtube\.com|youtu\.be)\//,
    twitter: /^https?:\/\/(www\.)?twitter\.com\//,
    tiktok: /^https?:\/\/(www\.)?tiktok\.com\//,
  };

  return platformPatterns[platform].test(url);
}

export function validatePhone(phone: string): boolean {
  return VALIDATION_RULES.phone.test(phone);
}

export function validateEmail(email: string): boolean {
  return VALIDATION_RULES.email.test(email);
}

export function validateZipCode(zipCode: string): boolean {
  return VALIDATION_RULES.zipCode.test(zipCode);
}

// ============================================================================
// VALIDAÇÕES DE CONFIGURAÇÃO
// ============================================================================

export function validateGoogleConfig(config: {
  tagManagerId?: string;
  analyticsId?: string;
  adsId?: string;
  searchConsoleId?: string;
}): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (config.tagManagerId && !config.tagManagerId.startsWith('GTM-')) {
    errors.push('Google Tag Manager ID deve começar com GTM-');
  }

  if (config.analyticsId && !config.analyticsId.startsWith('G-')) {
    errors.push('Google Analytics ID deve começar com G-');
  }

  if (config.adsId && !config.adsId.startsWith('AW-')) {
    errors.push('Google Ads ID deve começar com AW-');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

export function validateReCaptchaConfig(config: {
  enabled: boolean;
  siteKey: string;
  secretKey: string;
}): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (config.enabled) {
    if (!config.siteKey?.trim()) {
      errors.push('Site Key é obrigatória quando reCAPTCHA está habilitado');
    }

    if (!config.secretKey?.trim()) {
      errors.push('Secret Key é obrigatória quando reCAPTCHA está habilitado');
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

// ============================================================================
// FUNÇÕES UTILITÁRIAS
// ============================================================================

export function sanitizeString(str: string): string {
  return str.trim().replace(/\s+/g, ' ');
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/-+/g, '-') // Remove hífens duplicados
    .replace(/^-|-$/g, ''); // Remove hífens no início e fim
}

export function validateColor(color: string): boolean {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
}

export function validateFont(font: string): boolean {
  const validFonts = [
    'Inter', 'Poppins', 'Roboto', 'Open Sans', 'Lato', 'Montserrat',
    'Source Sans Pro', 'Nunito', 'Ubuntu', 'Playfair Display'
  ];
  return validFonts.includes(font);
}

// ============================================================================
// VALIDAÇÕES DE CONTEÚDO
// ============================================================================

export function validateContentLength(content: string, minLength: number, maxLength?: number): boolean {
  const length = content.trim().length;
  
  if (length < minLength) return false;
  if (maxLength && length > maxLength) return false;
  
  return true;
}

export function validateImageUrl(url: string): boolean {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif'];
  const hasValidExtension = imageExtensions.some(ext => 
    url.toLowerCase().includes(ext)
  );
  
  return VALIDATION_RULES.url.test(url) && hasValidExtension;
}

export function validateTags(tags: string[]): boolean {
  return tags.every(tag => 
    tag.trim().length > 0 && tag.trim().length <= 50
  );
}

// ============================================================================
// EXPORTAÇÕES
// ============================================================================

export {
  VALIDATION_RULES
}; 