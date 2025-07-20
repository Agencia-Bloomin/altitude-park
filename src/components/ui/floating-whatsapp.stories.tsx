import type { Meta, StoryObj } from '@storybook/react';
import { FloatingWhatsApp } from './floating-whatsapp';

const meta: Meta<typeof FloatingWhatsApp> = {
  title: 'UI/FloatingWhatsApp',
  component: FloatingWhatsApp,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Componente de WhatsApp flutuante com animações para chamar atenção do usuário.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // Como este componente não aceita props, não precisamos de argTypes
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="mb-4">
          <h1 className="text-2xl font-bold mb-2">Página de Exemplo</h1>
          <p className="text-gray-600">
            Role para baixo para ver o componente WhatsApp flutuante em ação.
          </p>
        </div>
        
        {/* Conteúdo para simular scroll */}
        <div className="space-y-4">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">Seção {i + 1}</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
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

// Story com descrição customizada
export const WithDescription: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'O componente aparece automaticamente após 3 segundos e pulsa por 5 segundos para chamar atenção.',
      },
    },
  },
};

// Story mostrando o comportamento
export const Behavior: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
          ## Comportamento do Componente:
          
          1. **Aparecimento**: Aparece após 3 segundos da carga da página
          2. **Animação de Pulso**: Pulsa por 5 segundos para chamar atenção
          3. **Indicador de Notificação**: Mostra "1" com animação bounce
          4. **Tooltip**: Aparece no hover com informações
          5. **Ação**: Abre WhatsApp com mensagem pré-definida
          
          ## Características:
          - Posicionamento fixo no canto inferior direito
          - Z-index alto para ficar sobre outros elementos
          - Responsivo em todos os dispositivos
          - Acessível com aria-labels
        `,
      },
    },
  },
}; 