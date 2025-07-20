import type { Meta, StoryObj } from '@storybook/react';
import { ScrollToTop } from './scroll-to-top';

const meta: Meta<typeof ScrollToTop> = {
  title: 'UI/ScrollToTop',
  component: ScrollToTop,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Componente de scroll para o topo com animação de progresso circular.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gray-100">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">Página de Exemplo</h1>
          <p className="text-gray-600 mb-8">
            Role para baixo para ver o componente ScrollToTop em ação. 
            O progresso circular se preenche conforme você rola a página.
          </p>
        </div>
        
        {/* Conteúdo extenso para simular scroll */}
        <div className="space-y-6 px-8">
          {Array.from({ length: 30 }, (_, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-primary-600">
                Seção {i + 1}
              </h2>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-medium mb-2">Subseção {i + 1}.1</h3>
                <p className="text-sm text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story padrão
export const Default: Story = {
  args: {},
};

// Story com documentação detalhada
export const Documentation: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
          ## Funcionalidades do ScrollToTop:
          
          ### 🎯 **Progress Ring Circular**
          - **Cálculo em tempo real** do progresso de scroll
          - **Anel SVG** que se preenche conforme o usuário rola
          - **Transição suave** com stroke-dasharray
          
          ### 🎨 **Indicadores Visuais**
          - **Cor primária** durante o scroll (azul)
          - **Cor verde** quando progresso ≥ 95% (completo)
          - **Ring de destaque** quando completo
          - **Animação de pulso** quando finalizado
          
          ### 📊 **Tooltip Informativo**
          - **Porcentagem exata** do progresso no hover
          - **Posicionamento inteligente** acima do botão
          - **Fundo escuro** para boa legibilidade
          
          ### ⚡ **Comportamento**
          1. Aparece após 300px de scroll
          2. Progress ring se preenche conforme scroll
          3. Muda para verde quando próximo do final
          4. Pulsa quando progresso ≥ 95%
          5. Tooltip mostra porcentagem no hover
          6. Scroll suave para o topo ao clicar
          
          ### 🔧 **Técnico**
          - **Cálculo**: \`(scrollTop / docHeight) * 100\`
          - **SVG**: ViewBox 48x48 com raio 20
          - **Stroke**: 2px com linecap round
          - **Z-index**: 40 (abaixo do WhatsApp)
        `,
      },
    },
  },
};

// Story mostrando diferentes estados
export const States: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
          ## Estados do Componente:
          
          ### 🔵 **Estado Normal** (0-94%)
          - Anel azul preenchendo gradualmente
          - Ícone azul
          - Sem animações especiais
          
          ### 🟢 **Estado Completo** (95-100%)
          - Anel verde completamente preenchido
          - Ícone verde
          - Ring de destaque
          - Animação de pulso
          
          ### 📱 **Responsivo**
          - Funciona em todos os tamanhos de tela
          - Posicionamento fixo mantido
          - Tooltip adaptável
        `,
      },
    },
  },
}; 