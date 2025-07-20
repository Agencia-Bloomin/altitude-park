import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FloatingElements } from './FloatingElements';

export function PartySection() {
  return (
    <section className="section-padding section-animate relative">
      <FloatingElements />
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
              Festas Inesquecíveis
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Oferecemos pacotes completos para festas de aniversário, eventos corporativos e comemorações especiais. 
              Entre em contato conosco para solicitar um orçamento personalizado!
            </p>
            <Button asChild className="btn-highlight text-lg px-8 py-4">
              <Link href="/faca-sua-festa">
                Solicitar Cotação
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 