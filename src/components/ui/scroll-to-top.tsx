'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollProgress(Math.min(scrollPercent, 100));
      
      // Mostrar o botão quando o usuário rolar 300px para baixo
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Calcular progresso inicial

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, [isClient]);

  const scrollToTop = () => {
    if (!isClient) return;
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Não renderizar nada até que o cliente esteja pronto
  if (!isClient) {
    return null;
  }

  // Calcular o stroke-dasharray baseado no progresso
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  // Determinar se o progresso está completo
  const isComplete = scrollProgress >= 95;

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`
            fixed bottom-6 right-6 z-40 w-12 h-12 
            bg-white hover:bg-gray-50
            text-primary-600 rounded-full shadow-lg 
            flex items-center justify-center 
            transition-all duration-300 transform hover:scale-110
            animate-fade-in
            ${isComplete ? 'ring-2 ring-primary-400 ring-opacity-50 animate-pulse-complete' : ''}
          `}
          aria-label="Voltar ao topo"
        >
          {/* Progress Ring */}
          <svg
            className="absolute inset-0 w-full h-full transform -rotate-90"
            viewBox="0 0 48 48"
          >
            {/* Background circle */}
            <circle
              cx="24"
              cy="24"
              r={radius}
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-gray-200"
            />
            {/* Progress circle */}
            <circle
              cx="24"
              cy="24"
              r={radius}
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className={`transition-all duration-300 ease-out ${
                isComplete ? 'text-green-500' : 'text-primary-600'
              }`}
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>
          
          {/* Icon */}
          <ChevronUp 
            size={20} 
            className={`relative z-10 transition-colors duration-300 ${
              isComplete ? 'text-green-600' : 'text-primary-600'
            }`} 
          />
        </button>
      )}
    </>
  );
} 