'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ConfettiElements } from '@/components/ui/ConfettiElements';
import { siteConfig } from '@/data/config';

export function PartySection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleWhatsAppClick = () => {
    if (!isClient) return;
    
    const message = "Olá, vim pelo site, gostaria de realizar uma cotação de festa.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `${siteConfig.contact.whatsappLink}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <section className="section-padding section-animate relative bg-custom-background">
      <ConfettiElements />
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-white mb-4">Faça sua Festa</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Celebre seu aniversário ou evento especial no Altitude Park!
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-6">
            Faça o seu evento ser inesquecível
            </h3>
            <p className="text-xl text-white/90 mb-8">
            Oferecemos pacotes completos para festas de aniversário, eventos corporativos e comemorações especiais. Entre em contato conosco para solicitar um orçamento personalizado!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                size="xl"
                onClick={handleWhatsAppClick}
              >
                Solicitar Cotação
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link href="/faca-sua-festa">
                  Saiba Mais
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 