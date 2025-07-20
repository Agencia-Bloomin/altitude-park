# Template Next.js para Agências de Marketing

Um template moderno e completo para agências de marketing, construído com Next.js 14, TypeScript, Tailwind CSS e focado em SEO e performance.

## 🚀 Características

### ✨ Funcionalidades Principais

- **Next.js 14** com App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilização
- **shadcn/ui** para componentes UI reutilizáveis
- **GSAP** para animações avançadas
- **Swiper** para carrosséis
- **Lucide React** para ícones
- **SEO otimizado** com next-seo
- **Responsivo** e acessível
- **Lazy loading** para performance
- **Storybook** para documentação visual
- **Jest + Testing Library** para testes

### 📱 Páginas Implementadas

- **Home** - Landing page principal
- **Sobre Nós** - História, valores e equipe
- **Produtos** - Catálogo de serviços com filtros
- **Produto Individual** - Página detalhada de cada serviço
- **Contato** - Formulário e informações de contato

### 🎨 Componentes UI

- **Button** - Múltiplas variantes e tamanhos
- **Card** - Componente de cartão flexível
- **Breadcrumb** - Navegação hierárquica
- **PageHero** - Hero section com breadcrumb

### 🏗️ Estrutura Organizada

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   ├── sobre/             # Página Sobre Nós
│   ├── produtos/          # Página de Produtos
│   └── contato/           # Página de Contato
├── components/
│   ├── layout/            # Componentes de layout
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/          # Seções de página
│   │   ├── HeroBanner.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── CTASection.tsx
│   │   └── PageHero.tsx
│   ├── ui/                # Componentes UI reutilizáveis
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── breadcrumb.tsx
│   └── index.ts           # Exportações centralizadas
├── lib/
│   └── utils.ts           # Utilitários (shadcn/ui)
├── types/
│   └── index.ts           # Tipos TypeScript
└── data/
    ├── metadata.ts        # Metadados das páginas
    └── contact.ts         # Dados de contato
```

## 🛠️ Instalação

1. **Clone o repositório**

```bash
git clone <repository-url>
cd template-next-marketing
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure as variáveis de ambiente**

```bash
cp .env.example .env.local
```

4. **Execute o projeto**

```bash
npm run dev
```

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de desenvolvimento
npm run build            # Build para produção
npm run start            # Inicia servidor de produção
npm run lint             # Executa ESLint
npm run type-check       # Verifica tipos TypeScript

# Storybook
npm run storybook        # Inicia Storybook
npm run build-storybook  # Build do Storybook

# Testes
npm run test             # Executa testes
npm run test:watch       # Executa testes em modo watch
npm run test:coverage    # Executa testes com cobertura
```

## 🎨 shadcn/ui

Este projeto utiliza o shadcn/ui para componentes UI reutilizáveis. Para adicionar novos componentes:

```bash
npx shadcn@latest add <component-name>
```

### Componentes Disponíveis

- `Button` - Botões com múltiplas variantes
- `Card` - Cartões flexíveis
- `Breadcrumb` - Navegação hierárquica

## 📚 Storybook

O Storybook está configurado para documentação visual dos componentes:

```bash
npm run storybook
```

Acesse `http://localhost:6006` para ver a documentação.

### 📖 Guia Completo

Consulte o [**STORYBOOK_GUIDE.md**](./STORYBOOK_GUIDE.md) para um tutorial detalhado sobre:

- Como criar e configurar stories
- Tipos de controles e parâmetros
- Testando responsividade e acessibilidade
- Boas práticas e troubleshooting

### Estrutura das Stories

```
src/components/ui/
├── button.tsx
├── button.stories.tsx    # Stories do Button
├── floating-whatsapp.tsx
├── floating-whatsapp.stories.tsx  # Stories do WhatsApp
├── scroll-to-top.tsx
├── scroll-to-top.stories.tsx      # Stories do ScrollToTop
└── button.test.tsx       # Testes do Button
```

## 🧪 Testes

O projeto inclui configuração completa de testes com Jest e Testing Library:

```bash
npm run test             # Executa todos os testes
npm run test:watch       # Modo watch
npm run test:coverage    # Com cobertura
```

### Cobertura de Testes

- **Branches**: 70%
- **Functions**: 70%
- **Lines**: 70%
- **Statements**: 70%

## 🎯 Páginas Internas

### Sobre Nós (`/sobre`)

- Hero section com breadcrumb
- História da empresa
- Valores e missão
- Equipe
- Arquivos CSS/JS específicos: `sobre.css`, `sobre.js`

### Produtos (`/produtos`)

- Catálogo de serviços
- Filtros por categoria
- Busca em tempo real
- Cards interativos
- Arquivos CSS/JS específicos: `produtos.css`, `produtos.js`

### Produto Individual (`/produtos/[slug]`)

- Página dinâmica por produto
- Breadcrumb hierárquico
- Detalhes completos do serviço
- Depoimentos de clientes
- Call-to-action

### Contato (`/contato`)

- Formulário de contato completo
- Validação em tempo real
- Informações de contato
- Mapa interativo
- Arquivos CSS/JS específicos: `contato.css`, `contato.js`

## 🎨 Estilos e Animações

### CSS Modular

Cada página interna possui seus próprios arquivos CSS e JS:

- Estilos específicos para cada página
- Animações personalizadas
- Responsividade otimizada
- Performance otimizada

### Animações GSAP

- Animações de entrada
- Scroll-triggered animations
- Hover effects
- Parallax effects

### Tailwind CSS

- Sistema de design consistente
- Componentes responsivos
- Dark mode support
- Customização avançada

## 🔧 Configurações

### Tailwind CSS

```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        // ... outras cores
      },
    },
  },
  plugins: [],
};
```

### TypeScript

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### ESLint + Prettier

Configuração otimizada para Next.js e TypeScript.

## 📱 Responsividade

O template é totalmente responsivo com breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Acessibilidade

- Semântica HTML correta
- Navegação por teclado
- Screen reader friendly
- Contraste adequado
- ARIA labels

## 🚀 Performance

- **Lazy loading** de componentes
- **Image optimization** com Next.js
- **Code splitting** automático
- **Bundle analysis** disponível
- **Core Web Vitals** otimizados

## 🔍 SEO

- **Meta tags** dinâmicas
- **Open Graph** tags
- **Structured data** (JSON-LD)
- **Sitemap** automático
- **Robots.txt** configurado

## 📈 Analytics e Tracking

Preparado para integração com:

- Google Analytics 4
- Google Tag Manager
- Facebook Pixel
- Hotjar
- Outras ferramentas

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm run build
vercel --prod
```

### Netlify

```bash
npm run build
# Upload da pasta .next
```

### Outros

O projeto é compatível com qualquer plataforma que suporte Next.js.

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🆘 Suporte

Para suporte e dúvidas:

- Abra uma issue no GitHub
- Consulte a documentação do Storybook
- Verifique os testes para exemplos de uso

## 🔄 Atualizações

Para manter o projeto atualizado:

```bash
# Atualizar dependências
npm update

# Atualizar shadcn/ui
npx shadcn@latest update

# Atualizar Storybook
npx storybook@latest upgrade
```

---

**Desenvolvido com ❤️ para agências de marketing**
