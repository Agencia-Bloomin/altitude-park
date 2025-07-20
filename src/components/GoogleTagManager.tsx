'use client';

import { useEffect, useState } from 'react';
import { siteConfig } from '@/data/config';

interface GoogleTagManagerProps {
  gtmId?: string;
}

export default function GoogleTagManager({ gtmId }: GoogleTagManagerProps) {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [gtmLoaded, setGtmLoaded] = useState(false);
  
  const gtmIdToUse = gtmId || siteConfig.google.tagManagerId;

  useEffect(() => {
    // Lista de eventos que indicam interação do usuário
    const interactionEvents = [
      'click',
      'scroll',
      'mousemove',
      'keydown',
      'touchstart',
      'focus',
    ];

    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        loadGTM();
      }
    };

    // Adiciona listeners para eventos de interação
    interactionEvents.forEach(event => {
      document.addEventListener(event, handleInteraction, { once: true, passive: true });
    });

    // Fallback: carrega GTM após 5 segundos mesmo sem interação
    const fallbackTimer = setTimeout(() => {
      if (!hasInteracted) {
        setHasInteracted(true);
        loadGTM();
      }
    }, 5000);

    return () => {
      interactionEvents.forEach(event => {
        document.removeEventListener(event, handleInteraction);
      });
      clearTimeout(fallbackTimer);
    };
  }, [hasInteracted]);

  const loadGTM = () => {
    if (gtmLoaded || !gtmIdToUse) return;

    // Carrega o script do GTM
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmIdToUse}');
    `;
    document.head.appendChild(script);

    // Adiciona o noscript para o body
    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmIdToUse}`;
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    noscript.appendChild(iframe);
    document.body.appendChild(noscript);

    setGtmLoaded(true);
  };

  // Não renderiza nada até que o GTM seja carregado
  if (!hasInteracted || !gtmLoaded) {
    return null;
  }

  return null;
}

// Hook para usar o GTM em componentes
export function useGTM() {
  const [dataLayer, setDataLayer] = useState<any[]>([]);

  useEffect(() => {
    // Inicializa o dataLayer se não existir
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      setDataLayer(window.dataLayer);
    }
  }, []);

  const pushToDataLayer = (event: any) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push(event);
    }
  };

  return { pushToDataLayer, dataLayer };
}

// Declaração global para TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
} 