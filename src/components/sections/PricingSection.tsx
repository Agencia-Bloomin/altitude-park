import { FloatingElements } from './FloatingElements';
import { Button } from '@/components/ui/button';
import { getWhatsAppLink } from '@/data/config';

export function PricingSection() {
  const whatsappMessage = "Olá, vim pelo site. Gostaria de saber mais sobre os valores dos ingressos.";
  const whatsappLink = getWhatsAppLink(whatsappMessage);

  return (
    <section className="section-padding section-animate bg-gray-800 relative">
      <FloatingElements />
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-white mb-4">Nossos Valores</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Preços especiais para toda a família!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Valor Especial */}
          <div className="card-special relative py-10 border-2 border-primary-500 rounded-lg">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
              <span className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                SHOPPING
              </span>
            </div>
            <div className="p-8 text-center">
              <div className="text-4xl font-bold text-primary-400 mb-2">R$ 49,99</div>
              <div className="text-lg text-gray-300 mb-4">20 Primeiros Minutos</div>
              <div className="text-sm text-gray-400 mb-6">R$ 1,00 - Minuto Adicional</div>
              <div className="text-xs text-gray-500">Somente Unidades SÃO JOSÉ E VILA OLÍMPIA</div>
            </div>
          </div>

          {/* Valor Semana */}
          <div className="card-special relative py-10 border-2 border-secondary-500 rounded-lg">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
              <span className="bg-secondary-500 text-white px-10 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                DURANTE A SEMANA
              </span>
            </div>
            <div className="p-8 text-center">
              <div className="text-4xl font-bold text-secondary-400 mb-2">R$ 79,99</div>
              <div className="text-lg text-gray-300 mb-4">por hora</div>
              <div className="text-sm text-gray-400">Segunda à Quinta-Feira</div>
            </div>
          </div>

          {/* Valor Fim de Semana */}
          <div className="card-special relative py-10 border-2 border-tertiary-500 rounded-lg">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
              <span className="bg-tertiary-500 text-white px-10 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                FINAIS DE SEMANA
              </span>
            </div>
            <div className="p-8 text-center">
              <div className="text-4xl font-bold text-tertiary-400 mb-2">R$ 89,99</div>
              <div className="text-lg text-gray-300 mb-4">por hora</div>
              <div className="text-sm text-gray-400">Sexta à Domingo e Feriados</div>
            </div>
          </div>
        </div>

        {/* Informações adicionais */}
        <div className="mt-12 text-center">
          <div className="bg-gray-700 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Informações Importantes</h3>
            <div className="space-y-2 text-gray-300">
              <p><strong>MEIA ANTIDERRAPANTE:</strong> R$ 35,00</p>
              <p><strong>INGRESSO PROMOCIONAL</strong> para aniversariante, acompanhante de menor de 5 anos e pessoa com deficiência.</p>
              <p>O acompanhante da PCD é cortesia.</p>
            </div>
          </div>
        </div>

        {/* Botões de ação */}
        <div className="mt-12 text-center space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
          <Button 
            variant="quinary" 
            size="xl" 
            asChild
          >
            <a href="#">
              Compre seu ingresso
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="xl" 
            asChild
          >
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
            >
              Entre em contato
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
} 