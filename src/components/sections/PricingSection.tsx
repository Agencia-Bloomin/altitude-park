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
          <div className="group relative h-full transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
            {/* Container do card com overflow hidden para as bolas */}
            <div className="relative rounded-2xl overflow-hidden h-full">
              {/* Background com gradiente suave */}
              <div className="absolute inset-0 opacity-90 gradient-quinary"></div>
              
              {/* Elementos decorativos */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
              
              {/* Conteúdo */}
              <div className="relative p-8 text-center h-full flex flex-col justify-between pt-20">
                {/* Header */}
                <div className="mb-8 mt-6">
                  <h3 className="text-3xl font-black mb-3 text-white drop-shadow-lg">30 MINUTOS</h3>
                  <p className="text-sm font-semibold text-white/90">TODAS AS IDADES</p>
                </div>

                {/* Preços */}
                <div className="space-y-6 flex-grow">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                    <p className="text-xs font-bold text-white/80 mb-2 uppercase tracking-wider">SEGUNDA A QUINTA</p>
                    <div className="flex items-center justify-center">
                      <span className="text-lg text-white mr-1 font-bold">R$</span>
                      <span className="text-6xl font-black text-white drop-shadow-lg">49,99</span>
                    </div>
                  </div>

                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                    <p className="text-xs font-bold text-white/80 mb-2 uppercase tracking-wider">SEXTA A DOMINGO</p>
                    <div className="flex items-center justify-center">
                      <span className="text-lg text-white mr-1 font-bold">R$</span>
                      <span className="text-6xl font-black text-white drop-shadow-lg">59,99</span>
                    </div>
                  </div>
                </div>

                {/* Botão */}
                <div className="mt-8">
                  <button className="w-full bg-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl transform group-hover:rotate-1 text-primary">
                    🎯 QUERO ESSE
                  </button>
                </div>
              </div>
            </div>

            {/* Badge de destaque - fora do container com overflow */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-white text-primary px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                ⭐ MAIS POPULAR
              </div>
            </div>
          </div>

          {/* Card 2 - 1 Hora */}
          <div className="group relative h-full transform transition-all duration-500 hover:scale-105 hover:rotate-1">
            {/* Container do card com overflow hidden para as bolas */}
            <div className="relative rounded-2xl overflow-hidden h-full">
              {/* Background com gradiente suave */}
              <div className="absolute inset-0 opacity-90 gradient-secondary"></div>
              
              {/* Elementos decorativos */}
              <div className="absolute top-0 left-0 w-28 h-28 bg-white opacity-10 rounded-full -translate-y-14 -translate-x-14"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full translate-y-10 translate-x-10"></div>
              
              {/* Conteúdo */}
              <div className="relative p-8 text-center h-full flex flex-col justify-between pt-20">
                {/* Header */}
                <div className="mb-8 mt-6">
                  <h3 className="text-3xl font-black mb-3 text-white drop-shadow-lg">1 HORA</h3>
                  <p className="text-sm font-semibold text-white/90">TODAS AS IDADES</p>
                </div>

                {/* Preços */}
                <div className="space-y-6 flex-grow">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                    <p className="text-xs font-bold text-white/80 mb-2 uppercase tracking-wider">SEGUNDA A QUINTA</p>
                    <div className="flex items-center justify-center">
                      <span className="text-lg text-white mr-1 font-bold">R$</span>
                      <span className="text-6xl font-black text-white drop-shadow-lg">79,99</span>
                    </div>
                  </div>

                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                    <p className="text-xs font-bold text-white/80 mb-2 uppercase tracking-wider">SEXTA A DOMINGO</p>
                    <div className="flex items-center justify-center">
                      <span className="text-lg text-white mr-1 font-bold">R$</span>
                      <span className="text-6xl font-black text-white drop-shadow-lg">89,99</span>
                    </div>
                  </div>
                </div>

                {/* Botão */}
                <div className="mt-8">
                  <button className="w-full bg-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl transform group-hover:-rotate-1 text-secondary">
                    🚀 QUERO ESSE
                  </button>
                </div>
              </div>
            </div>

            {/* Badge de destaque - fora do container com overflow */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-white text-secondary px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                ⚡ MAIS COMPLETO
              </div>
            </div>
          </div>

          {/* Card 3 - Meia Antiderrapante */}
          <div className="group relative h-full transform transition-all duration-500 hover:scale-105 hover:rotate-1">
            {/* Container do card com overflow hidden para as bolas */}
            <div className="relative rounded-2xl overflow-hidden h-full">
              {/* Background com gradiente suave */}
              <div className="absolute inset-0 opacity-90 gradient-tertiary"></div>
              
              {/* Elementos decorativos */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white opacity-10 rounded-full translate-y-8 -translate-x-8"></div>
              
              {/* Conteúdo */}
              <div className="relative p-8 text-center h-full flex flex-col justify-between pt-20">
                {/* Header */}
                <div className="mb-8 mt-6">
                  <h3 className="text-2xl font-black mb-3 text-white drop-shadow-lg">MEIA ANTIDERRAPANTE</h3>
                  <p className="text-sm font-semibold text-white/90">SEGURANÇA GARANTIDA</p>
                </div>

                {/* Preço */}
                <div className="flex-grow flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                    <div className="flex items-center justify-center">
                      <span className="text-xl text-white mr-2 font-bold">R$</span>
                      <span className="text-7xl font-black text-white drop-shadow-lg">35,00</span>
                    </div>
                    <p className="text-xs text-white/80 mt-2 font-semibold">POR VISITA</p>
                  </div>
                </div>

                {/* Botão */}
                <div className="mt-8">
                  <button className="w-full bg-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl transform group-hover:-rotate-1 text-tertiary">
                    🛒 QUERO ESSE
                  </button>
                </div>
              </div>
            </div>

            {/* Badge de destaque - fora do container com overflow */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-white text-tertiary px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                🛡️ OBRIGATÓRIA
              </div>
            </div>
          </div>
        </div>

        {/* Informações adicionais divididas em 3 seções */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Informação 1 - PCD + Acompanhante - Verde (como card 1) */}
            <div className="rounded-xl p-6 border backdrop-blur-sm gradient-quinary-soft border-quinary">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                <span className="mr-2">♿</span> PCD + Acompanhante
              </h3>
              <div className="text-sm text-white/90">
                <p><strong>Ingresso Promocional</strong> para pessoa com deficiência.</p>
                <p className="mt-2">O acompanhante da PCD é cortesia.</p>
              </div>
            </div>

            {/* Informação 2 - Menor de 5 anos - Azul (como card 2) */}
            <div className="rounded-xl p-6 border backdrop-blur-sm gradient-secondary-soft border-secondary">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                <span className="mr-2">👶</span> Menor de 5 anos
              </h3>
              <div className="text-sm text-white/90">
                <p><strong>Ingresso Promocional</strong> para aniversariante e acompanhante de menor de 5 anos.</p>
              </div>
            </div>

            {/* Informação 3 - Unidades Especiais - Laranja (como card 3) */}
            <div className="rounded-xl p-6 border backdrop-blur-sm gradient-tertiary-soft border-tertiary">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                <span className="mr-2">🏢</span> Unidades Especiais
              </h3>
              <div className="text-sm text-white/90">
                <p><strong>São José dos Campos e Vila Olímpia:</strong></p>
                <p className="mt-2">• Online: vendido a partir de 30min</p>
                <p>• Presencial: plano de 20min com adicional de R$ 1,00 por minuto</p>
              </div>
            </div>
          </div>
        </div>

        {/* Botões de ação */}
        <div className="mt-16 text-center space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
          <Button 
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