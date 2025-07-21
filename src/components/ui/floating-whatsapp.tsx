'use client';

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/data';

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Mostrar o WhatsApp após 3 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsPulsing(true);
    }, 3000);

    // Parar a animação de pulso após 5 segundos
    const pulseTimer = setTimeout(() => {
      setIsPulsing(false);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearTimeout(pulseTimer);
    };
  }, [isClient]);

  const handleWhatsAppClick = () => {
    if (!isClient) return;
    
    const message = `Olá, vim pelo site! Gostaria de tirar algumas dúvidas.`;
    window.open(getWhatsAppLink(message), '_blank');
  };

  // Não renderizar nada até que o cliente esteja pronto
  if (!isClient || !isVisible) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 group">
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`
          relative w-16 h-16 bg-green-500 hover:bg-green-600 
          rounded-full shadow-lg flex items-center justify-center 
          text-white transition-all duration-300 transform hover:scale-110
          ${isPulsing ? 'animate-pulse' : ''}
        `}
        aria-label="Enviar mensagem no WhatsApp"
      >
        <MessageCircle size={28} />
        
        {/* Anel de pulso */}
        {isPulsing && (
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
        )}
        
        {/* Indicador de notificação */}
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-bounce-slow">
          1
        </div>
      </button>
      
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-3 w-48 bg-white text-gray-800 text-sm rounded-lg shadow-lg p-3 border border-gray-200 animate-fade-in">
          <div className="text-center">
            <p className="font-semibold text-green-600">Precisa de ajuda?</p>
            <p className="text-xs text-gray-600 mt-1">Clique para conversar conosco no WhatsApp</p>
          </div>
          {/* Seta do tooltip */}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white" />
        </div>
      )}
    </div>
  );
} 