import { siteConfig } from './config';

// Função para gerar variações de cores baseadas na cor principal
function generateColorVariations(baseColor: string) {
  // Converte hex para RGB
  const hex = baseColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  // Função para clarear/escurecer cor
  const adjustColor = (r: number, g: number, b: number, factor: number) => {
    const newR = Math.max(0, Math.min(255, Math.round(r + (255 - r) * factor)));
    const newG = Math.max(0, Math.min(255, Math.round(g + (255 - g) * factor)));
    const newB = Math.max(0, Math.min(255, Math.round(b + (255 - b) * factor)));
    return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
  };

  // Função para escurecer cor
  const darkenColor = (r: number, g: number, b: number, factor: number) => {
    const newR = Math.max(0, Math.round(r * (1 - factor)));
    const newG = Math.max(0, Math.round(g * (1 - factor)));
    const newB = Math.max(0, Math.round(b * (1 - factor)));
    return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
  };

  return {
    50: adjustColor(r, g, b, 0.95),   // Muito claro
    100: adjustColor(r, g, b, 0.9),   // Claro
    200: adjustColor(r, g, b, 0.8),   // Claro médio
    300: adjustColor(r, g, b, 0.6),   // Médio claro
    400: adjustColor(r, g, b, 0.4),   // Médio
    500: baseColor,                   // Cor base
    600: darkenColor(r, g, b, 0.1),   // Médio escuro
    700: darkenColor(r, g, b, 0.2),   // Escuro médio
    800: darkenColor(r, g, b, 0.3),   // Escuro
    900: darkenColor(r, g, b, 0.4),   // Muito escuro
  };
}

// Configuração de cores personalizadas para Tailwind
export const themeColors = {
  primary: generateColorVariations(siteConfig.theme.colors.primary),
  secondary: generateColorVariations(siteConfig.theme.colors.secondary),
  tertiary: generateColorVariations(siteConfig.theme.colors.tertiary),
  quaternary: generateColorVariations(siteConfig.theme.colors.quaternary),
  quinary: generateColorVariations(siteConfig.theme.colors.quinary),
};

// Configuração de fontes personalizadas
export const themeFonts = {
  primary: siteConfig.theme.fonts.primary,
  secondary: siteConfig.theme.fonts.secondary,
};

// Configuração completa do tema para Tailwind
export const tailwindTheme = {
  extend: {
    colors: themeColors,
    fontFamily: {
      primary: [themeFonts.primary, 'sans-serif'],
      secondary: [themeFonts.secondary, 'sans-serif'],
    },
    // Adicione outras customizações do tema aqui
    spacing: {
      '18': '4.5rem',
      '88': '22rem',
      '128': '32rem',
    },
    animation: {
      'fade-in': 'fadeIn 0.5s ease-in-out',
      'slide-up': 'slideUp 0.3s ease-out',
      'bounce-slow': 'bounce 2s infinite',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      slideUp: {
        '0%': { transform: 'translateY(10px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
    },
  },
};

// Função para obter cor primária
export function getPrimaryColor(): string {
  return siteConfig.theme.colors.primary;
}

// Função para obter cor secundária
export function getSecondaryColor(): string {
  return siteConfig.theme.colors.secondary;
}

// Função para obter cor terciária
export function getTertiaryColor(): string {
  return siteConfig.theme.colors.tertiary;
}

// Função para obter cor quaternária
export function getQuaternaryColor(): string {
  return siteConfig.theme.colors.quaternary;
}

// Função para obter cor quinária
export function getQuinaryColor(): string {
  return siteConfig.theme.colors.quinary;
}



// Função para obter fonte primária
export function getPrimaryFont(): string {
  return siteConfig.theme.fonts.primary;
}

// Função para obter fonte secundária
export function getSecondaryFont(): string {
  return siteConfig.theme.fonts.secondary;
} 