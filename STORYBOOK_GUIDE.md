# 📚 Guia do Storybook

Este guia ensina como usar o Storybook para desenvolver, testar e documentar os componentes do projeto.

## 🚀 O que é o Storybook?

O Storybook é uma ferramenta de desenvolvimento que permite:

- **Visualizar componentes** isoladamente
- **Testar diferentes estados** e variações
- **Documentar** como usar cada componente
- **Desenvolver** componentes de forma independente
- **Testar responsividade** e acessibilidade

## 📦 Instalação e Configuração

### Pré-requisitos

```bash
# Certifique-se de ter o Node.js instalado
node --version

# Instale as dependências do projeto
npm install
```

### Iniciar o Storybook

```bash
# Iniciar o servidor de desenvolvimento
npm run storybook

# Ou usando yarn
yarn storybook
```

O Storybook estará disponível em: `http://localhost:6006`

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── ui/                    # Componentes base
│   │   ├── button.tsx
│   │   ├── button.stories.tsx # Stories do botão
│   │   ├── card.tsx
│   │   └── ...
│   ├── sections/              # Seções da página
│   │   ├── HeroBanner.tsx
│   │   └── ...
│   └── layout/                # Componentes de layout
│       ├── Header.tsx
│       └── Footer.tsx
.storybook/
├── main.ts                    # Configuração principal
└── preview.ts                 # Configuração de preview
```

## 📝 Como Criar Stories

### 1. Estrutura Básica de um Story

```typescript
// button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

// Configuração do componente
const meta: Meta<typeof Button> = {
  title: 'UI/Button', // Categoria/Nome no sidebar
  component: Button, // Componente a ser documentado
  parameters: {
    layout: 'centered', // Layout do preview
  },
  tags: ['autodocs'], // Gerar documentação automática
  argTypes: {
    // Controles do painel
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline', 'secondary'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story básico
export const Default: Story = {
  args: {
    children: 'Clique aqui',
    variant: 'default',
  },
};

// Story com variações
export const Outline: Story = {
  args: {
    children: 'Botão Outline',
    variant: 'outline',
  },
};
```

### 2. Tipos de Controles

```typescript
argTypes: {
  // Select dropdown
  variant: {
    control: { type: 'select' },
    options: ['default', 'outline', 'secondary'],
  },

  // Checkbox
  disabled: {
    control: { type: 'boolean' },
  },

  // Input de texto
  children: {
    control: { type: 'text' },
  },

  // Slider numérico
  size: {
    control: { type: 'range', min: 1, max: 10, step: 1 },
  },

  // Color picker
  color: {
    control: { type: 'color' },
  },

  // Radio buttons
  alignment: {
    control: { type: 'radio' },
    options: ['left', 'center', 'right'],
  },
}
```

### 3. Stories com Renderização Customizada

```typescript
// Story com layout customizado
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  ),
};

// Story com diferentes backgrounds
export const WithBackground: Story = {
  args: {
    children: 'Botão com fundo',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
```

## 🎨 Configurações Avançadas

### 1. Parâmetros Globais

```typescript
// .storybook/preview.ts
const preview: Preview = {
  parameters: {
    // Layout padrão
    layout: 'centered',

    // Backgrounds disponíveis
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1f2937' },
        { name: 'blue', value: '#3b82f6' },
      ],
    },

    // Controles padrão
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  // Tipos globais
  globalTypes: {
    theme: {
      description: 'Tema global',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        items: ['light', 'dark'],
      },
    },
  },
};
```

### 2. Decorators

```typescript
// Aplicar wrapper em todos os stories
const meta: Meta<typeof Button> = {
  decorators: [
    (Story) => (
      <div className="p-4 bg-gray-100">
        <Story />
      </div>
    ),
  ],
};

// Decorator específico para um story
export const WithPadding: Story = {
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
};
```

## 🔧 Comandos Úteis

### Desenvolvimento

```bash
# Iniciar Storybook
npm run storybook

# Build para produção
npm run build-storybook

# Testar interações
npm run test-storybook
```

### Adicionons Úteis

```bash
# Instalar addon de acessibilidade
npm install --save-dev @storybook/addon-a11y

# Instalar addon de viewport
npm install --save-dev @storybook/addon-viewport

# Instalar addon de actions
npm install --save-dev @storybook/addon-actions
```

## 📱 Testando Responsividade

### 1. Usando Viewport Addon

```typescript
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
```

### 2. Viewports Disponíveis

- `mobile1`: 320px
- `mobile2`: 375px
- `tablet`: 768px
- `desktop`: 1024px
- `desktop2`: 1440px

## ♿ Testando Acessibilidade

### 1. Addon A11y

O addon de acessibilidade verifica automaticamente:

- Contraste de cores
- Estrutura de heading
- Labels de formulários
- ARIA attributes

### 2. Configuração

```typescript
// .storybook/main.ts
addons: [
  '@storybook/addon-a11y',
],
```

## 🧪 Testando Interações

### 1. Story com Interações

```typescript
import { userEvent, within } from '@storybook/testing-library';

export const WithInteraction: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    await userEvent.click(button);
  },
};
```

### 2. Testes de Estado

```typescript
export const Loading: Story = {
  args: {
    loading: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    // Simular loading
    await userEvent.click(button);
  },
};
```

## 📚 Documentação

### 1. Documentação Automática

```typescript
const meta: Meta<typeof Button> = {
  tags: ['autodocs'], // Gera docs automaticamente
};
```

### 2. Documentação Manual

```typescript
export const CustomDocs: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Este botão é usado para ações principais.',
      },
    },
  },
};
```

## 🎯 Boas Práticas

### 1. Nomenclatura

- Use nomes descritivos para stories
- Agrupe por categoria (UI/, Layout/, etc.)
- Mantenha consistência

### 2. Organização

```typescript
// ✅ Bom
export const Primary: Story = { ... };
export const Secondary: Story = { ... };
export const Disabled: Story = { ... };

// ❌ Evite
export const Story1: Story = { ... };
export const Test: Story = { ... };
```

### 3. Props e Estados

- Documente todas as props importantes
- Teste estados extremos (disabled, loading, error)
- Inclua variações de tamanho e cor

## 🚨 Troubleshooting

### Problemas Comuns

1. **Tailwind CSS não funciona**

   ```bash
   # Verifique se o postcss.config.js está configurado
   # Certifique-se de que o globals.css está importado
   ```

2. **Componentes não aparecem**

   ```bash
   # Verifique se o arquivo .stories.tsx está no local correto
   # Confirme se o componente está sendo exportado corretamente
   ```

3. **Erro de build**
   ```bash
   # Limpe o cache
   npm run storybook -- --no-manager-cache
   ```

## 📖 Recursos Adicionais

- [Documentação Oficial do Storybook](https://storybook.js.org/docs)
- [Addons do Storybook](https://storybook.js.org/addons)
- [Testing com Storybook](https://storybook.js.org/docs/writing-tests)
- [Deploy do Storybook](https://storybook.js.org/docs/deploy)

## 🤝 Contribuindo

Ao criar novos componentes:

1. Crie o componente em `src/components/`
2. Crie o arquivo `.stories.tsx` correspondente
3. Documente todas as props e variações
4. Teste responsividade e acessibilidade
5. Adicione exemplos de uso

---

**Dica**: Use o Storybook como ferramenta de desenvolvimento. Ele ajuda a pensar em todos os casos de uso do componente antes de implementá-lo no projeto principal.
