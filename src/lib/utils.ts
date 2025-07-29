import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { siteConfig } from "@/data/config"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Sincroniza as cores do config.ts com as CSS variables
 * Deve ser chamada no início da aplicação
 */
export function syncThemeColors() {
  if (typeof window === 'undefined') return;

  const root = document.documentElement;
  
  // Atualiza as CSS variables com as cores do config.ts
  root.style.setProperty('--color-primary', siteConfig.theme.colors.primary);
  root.style.setProperty('--color-secondary', siteConfig.theme.colors.secondary);
  root.style.setProperty('--color-tertiary', siteConfig.theme.colors.tertiary);
  root.style.setProperty('--color-quaternary', siteConfig.theme.colors.quaternary);
  root.style.setProperty('--color-quinary', siteConfig.theme.colors.quinary);
}

/**
 * Atualiza uma cor específica dinamicamente
 */
export function updateThemeColor(colorName: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary', newColor: string) {
  if (typeof window === 'undefined') return;

  const root = document.documentElement;
  const cssVarName = `--color-${colorName}`;
  root.style.setProperty(cssVarName, newColor);
} 