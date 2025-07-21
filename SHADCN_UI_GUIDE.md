# Guia Completo do shadcn/ui

Este guia explica como usar e estender o shadcn/ui no template de marketing.

## 🎯 O que é shadcn/ui?

O shadcn/ui é uma biblioteca de componentes React que oferece:

- **Componentes reutilizáveis** e acessíveis
- **Totalmente customizáveis** com Tailwind CSS
- **TypeScript** nativo
- **Sem dependências** externas desnecessárias
- **Copy-paste** friendly (você copia o código para seu projeto)

## 🚀 Por que usar shadcn/ui?

### ✅ Vantagens

- **Performance**: Sem bundle size desnecessário
- **Flexibilidade**: Controle total sobre os componentes
- **Consistência**: Design system unificado
- **Acessibilidade**: Componentes acessíveis por padrão
- **TypeScript**: Tipagem completa
- **Tailwind**: Integração perfeita

### 🔧 Configuração

O projeto já está configurado com shadcn/ui. Arquivos de configuração:

```json
// components.json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components/ui",
    "utils": "@/lib/utils"
  }
}
```

## 📦 Componentes Disponíveis

### 1. Button

```tsx
import { Button } from '@/components/ui/button'

// Variantes
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Tamanhos
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">🔍</Button>

// Estados
<Button disabled>Disabled</Button>
<Button asChild>
  <a href="/link">Link Button</a>
</Button>
```

### 2. Card

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
    <CardDescription>Descrição do card</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Conteúdo do card</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>;
```

### 3. Breadcrumb

```tsx
import { Breadcrumb } from '@/components/ui/breadcrumb'

const items = [
  { label: 'Home', href: '/' },

  { label: 'Marketing Digital' }
]

<Breadcrumb items={items} />
```

## 🛠️ Adicionando Novos Componentes

### 1. Via CLI (Recomendado)

```bash
npx shadcn@latest add <component-name>
```

Exemplos:

```bash
npx shadcn@latest add input
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add form
npx shadcn@latest add select
npx shadcn@latest add textarea
```

### 2. Manualmente

1. Copie o componente do site do shadcn/ui
2. Cole em `src/components/ui/`
3. Ajuste as importações conforme necessário

## 🎨 Customização

### 1. Cores

Edite o arquivo `src/app/globals.css`:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 84% 4.9%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 84% 4.9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ... outras variáveis dark */
  }
}
```

### 2. Tema Personalizado

```css
:root {
  --primary: 221.2 83.2% 53.3%; /* Azul */
  --primary-foreground: 210 40% 98%;

  /* Cores da sua marca */
  --brand: 262.1 83.3% 57.8%; /* Roxo */
  --brand-foreground: 210 40% 98%;
}
```

### 3. Componentes Customizados

```tsx
// src/components/ui/custom-button.tsx
import { Button, ButtonProps } from './button';
import { cn } from '@/lib/utils';

interface CustomButtonProps extends ButtonProps {
  gradient?: boolean;
}

export function CustomButton({
  gradient = false,
  className,
  ...props
}: CustomButtonProps) {
  return (
    <Button
      className={cn(
        gradient && 'bg-gradient-to-r from-blue-500 to-purple-600',
        className
      )}
      {...props}
    />
  );
}
```

## 📱 Responsividade

Os componentes shadcn/ui são responsivos por padrão:

```tsx
<Button className="w-full sm:w-auto">
  Responsive Button
</Button>

<Card className="p-4 md:p-6 lg:p-8">
  Responsive Card
</Card>
```

## ♿ Acessibilidade

Todos os componentes incluem:

- **ARIA labels** apropriados
- **Navegação por teclado**
- **Screen reader support**
- **Contraste adequado**

```tsx
<Button aria-label="Fechar modal">
  <X className="h-4 w-4" />
</Button>
```

## 🧪 Testes

### Testando Componentes shadcn/ui

```tsx
// src/components/ui/button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## 📚 Storybook

### Stories para Componentes shadcn/ui

```tsx
// src/components/ui/button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'secondary',
        'destructive',
        'outline',
        'ghost',
        'link',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};
```

## 🔄 Atualizações

### Atualizar shadcn/ui

```bash
npx shadcn@latest update
```

### Atualizar Componentes Específicos

```bash
npx shadcn@latest add button --overwrite
```

## 🎯 Melhores Práticas

### 1. Composição

```tsx
// ✅ Bom: Use composição
<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
  </CardHeader>
  <CardContent>Conteúdo</CardContent>
</Card>

// ❌ Evite: Props complexas
<Card title="Título" content="Conteúdo" />
```

### 2. Extensão de Componentes

```tsx
// ✅ Bom: Estenda interfaces
interface CustomButtonProps extends ButtonProps {
  loading?: boolean;
}

// ✅ Bom: Use forwardRef
const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ loading, children, ...props }, ref) => {
    return (
      <Button ref={ref} disabled={loading} {...props}>
        {loading ? 'Carregando...' : children}
      </Button>
    );
  }
);
```

### 3. Utilitários

```tsx
// ✅ Bom: Use cn() para classes condicionais
import { cn } from '@/lib/utils'

<Button className={cn(
  "base-classes",
  variant === "primary" && "primary-classes",
  disabled && "disabled-classes"
)}>
```

## 🚀 Exemplos Práticos

### Formulário de Contato

```tsx
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ContactForm() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Entre em Contato</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="Nome" />
        <Input type="email" placeholder="Email" />
        <Textarea placeholder="Mensagem" />
        <Button className="w-full">Enviar</Button>
      </CardContent>
    </Card>
  );
}
```

### Modal de Confirmação

```tsx
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export function ConfirmationModal({ open, onConfirm, onCancel }) {
  return (
    <Dialog open={open} onOpenChange={onCancel}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirmar Ação</DialogTitle>
        </DialogHeader>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onCancel}>
            Cancelar
          </Button>
          <Button variant="destructive" onClick={onConfirm}>
            Confirmar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
```

## 📖 Recursos Adicionais

- [Documentação Oficial](https://ui.shadcn.com/)
- [Componentes Disponíveis](https://ui.shadcn.com/docs/components)
- [Exemplos](https://ui.shadcn.com/examples)
- [GitHub](https://github.com/shadcn/ui)

---

**Dica**: O shadcn/ui é uma ferramenta poderosa que permite criar interfaces consistentes e acessíveis. Use-o como base e estenda conforme necessário para seu projeto específico.
