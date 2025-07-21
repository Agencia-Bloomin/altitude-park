'use client';

import { useEffect } from 'react';
import { siteConfig } from '@/data/config';

export function CSSVariablesProvider() {
  useEffect(() => {
    // Sincronização automática de fontes apenas no cliente
    const root = document.documentElement;
    root.style.setProperty('--font-primary', siteConfig.theme.fonts.primary);
    root.style.setProperty('--font-secondary', siteConfig.theme.fonts.secondary);
  }, []);

  return null;
} 