'use client';

import { useEffect } from 'react';
import { siteConfig } from '@/data/config';

export function CSSVariablesProvider() {
  useEffect(() => {
    // Sincronização automática de fontes apenas no cliente
    const root = document.documentElement;
    root.style.setProperty('--font-primary', siteConfig.theme.fonts.primary);
    root.style.setProperty('--font-secondary', siteConfig.theme.fonts.secondary);
    
    // Sincronização das cores do config.ts com CSS variables
    root.style.setProperty('--color-primary', siteConfig.theme.colors.primary);
    root.style.setProperty('--color-secondary', siteConfig.theme.colors.secondary);
    root.style.setProperty('--color-tertiary', siteConfig.theme.colors.tertiary);
    root.style.setProperty('--color-quaternary', siteConfig.theme.colors.quaternary);
    root.style.setProperty('--color-quinary', siteConfig.theme.colors.quinary);
    
    // Definir variável de raio para border-radius
    root.style.setProperty('--radius', '0.5rem');
  }, []);

  return null;
} 