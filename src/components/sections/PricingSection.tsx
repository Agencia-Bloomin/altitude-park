import { FloatingElements } from '@/components/ui/FloatingElements';
import { Button } from '@/components/ui/button';
import { getWhatsAppLink, siteConfig } from '@/data/config';

export function PricingSection() {
  const whatsappMessage = "Olá, vim pelo site. Gostaria de saber mais sobre os valores dos ingressos.";
  const whatsappLink = getWhatsAppLink(whatsappMessage);

  return (
    <section className="section-padding section-animate bg-custom-background relative">
      <FloatingElements />
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-white mb-4">Valores</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 - 30 Minutos */}
          <div className="relative rounded-xl overflow-hidden shadow-lg h-full border-2 border-transparent hover:border-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="p-8 text-center h-full flex flex-col justify-between" style={{ backgroundColor: siteConfig.theme.colors.quinary }}>
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2" style={{ color: siteConfig.theme.colors.primary }}>30 MINUTOS</h3>
                <p className="text-sm font-medium" style={{ color: '#1f2937' }}>TODAS AS IDADES</p>
              </div>

              {/* Preços */}
              <div className="space-y-6 flex-grow">
                <div>
                  <p className="text-sm mb-2" style={{ color: '#1f2937' }}>SEGUNDA A QUINTA</p>
                  <div className="flex items-center justify-center">
                    <span className="text-xl mr-1" style={{ color: '#1f2937' }}>R$</span>
                    <span className="text-7xl font-bold" style={{ color: '#1f2937' }}>49,99</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm mb-2" style={{ color: '#1f2937' }}>SEXTA A DOMINGO E FERIADOS</p>
                  <div className="flex items-center justify-center">
                    <span className="text-xl mr-1" style={{ color: '#1f2937' }}>R$</span>
                    <span className="text-7xl font-bold" style={{ color: '#1f2937' }}>59,99</span>
                  </div>
                </div>
              </div>

              {/* Botão */}
              <div className="mt-6">
                <button className="text-white px-8 py-3 rounded-lg font-bold text-sm hover:scale-110 transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: siteConfig.theme.colors.secondary }}>
                  QUERO ESSE
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 - 1 Hora */}
          <div className="relative rounded-xl overflow-hidden shadow-lg h-full border-2 border-transparent hover:border-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="p-8 text-center h-full flex flex-col justify-between" style={{ backgroundColor: siteConfig.theme.colors.quinary }}>
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2" style={{ color: siteConfig.theme.colors.primary }}>1 HORA</h3>
                <p className="text-sm font-medium" style={{ color: '#1f2937' }}>TODAS AS IDADES</p>
              </div>

              {/* Preços */}
              <div className="space-y-6 flex-grow">
                <div>
                  <p className="text-sm mb-2" style={{ color: '#1f2937' }}>SEGUNDA A QUINTA</p>
                  <div className="flex items-center justify-center">
                    <span className="text-xl mr-1" style={{ color: '#1f2937' }}>R$</span>
                    <span className="text-7xl font-bold" style={{ color: '#1f2937' }}>79,99</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm mb-2" style={{ color: '#1f2937' }}>SEXTA A DOMINGO E FERIADOS</p>
                  <div className="flex items-center justify-center">
                    <span className="text-xl mr-1" style={{ color: '#1f2937' }}>R$</span>
                    <span className="text-7xl font-bold" style={{ color: '#1f2937' }}>89,99</span>
                  </div>
                </div>
              </div>

              {/* Botão */}
              <div className="mt-6">
                <button className="text-white px-8 py-3 rounded-lg font-bold text-sm hover:scale-110 transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: siteConfig.theme.colors.secondary }}>
                  QUERO ESSE
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 - Meia Antiderrapante */}
          <div className="relative rounded-xl overflow-hidden shadow-lg h-full border-2 border-transparent hover:border-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="p-8 text-center h-full flex flex-col justify-between" style={{ backgroundColor: siteConfig.theme.colors.quinary }}>
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2" style={{ color: siteConfig.theme.colors.primary }}>MEIA ANTIDERRAPANTE</h3>
                <p className="text-sm font-medium" style={{ color: '#1f2937' }}>OBRIGATÓRIA</p>
              </div>

              {/* Preço */}
              <div className="flex-grow flex items-center justify-center">
                <div>
                  <div className="flex items-center justify-center">
                    <span className="text-xl mr-1" style={{ color: '#1f2937' }}>R$</span>
                    <span className="text-7xl font-bold" style={{ color: '#1f2937' }}>35,00</span>
                  </div>
                </div>
              </div>

              {/* Botão */}
              <div className="mt-6">
                <button className="text-white px-8 py-3 rounded-lg font-bold text-sm hover:scale-110 transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: siteConfig.theme.colors.secondary }}>
                  QUERO ESSE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Informações adicionais divididas em 3 seções */}
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Informação 1 - PCD + Acompanhante */}
            <div className="bg-custom-background rounded-lg p-6 border border-gray-600">
              <h3 className="text-lg font-bold text-white mb-3">PCD + Acompanhante</h3>
              <div className="text-sm text-gray-300">
                <p><strong>Ingresso Promocional</strong> para pessoa com deficiência.</p>
                <p>O acompanhante da PCD é cortesia.</p>
              </div>
            </div>

            {/* Informação 2 - Menor de 5 anos */}
            <div className="bg-custom-background rounded-lg p-6 border border-gray-600">
              <h3 className="text-lg font-bold text-white mb-3">Menor de 5 anos</h3>
              <div className="text-sm text-gray-300">
                <p><strong>Ingresso Promocional</strong> para aniversariante e acompanhante de menor de 5 anos.</p>
              </div>
            </div>

            {/* Informação 3 - Unidades Especiais */}
            <div className="bg-custom-background rounded-lg p-6 border border-gray-600">
              <h3 className="text-lg font-bold text-white mb-3">Unidades Especiais</h3>
              <div className="text-sm text-gray-300">
                <p><strong>São José dos Campos e Vila Olímpia:</strong></p>
                <p>• Online: vendido a partir de 30min</p>
                <p>• Presencial: plano de 20min com adicional de R$ 1,00 por minuto</p>
              </div>
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