# Altitude Park - Template Website

Um template moderno e responsivo para o website do Altitude Park, desenvolvido com Next.js 14, TypeScript, Tailwind CSS e GSAP para animações.

## 🎯 Características

- **Design Moderno**: Interface escura com cores vibrantes do Altitude Park
- **Fonte Animada**: Orbitron para títulos, criando uma identidade visual única
- **Animações GSAP**: Efeitos de scroll, parallax e animações suaves
- **Totalmente Responsivo**: Otimizado para todos os dispositivos
- **Performance**: Otimizado para SEO e velocidade de carregamento
- **Acessibilidade**: Seguindo as melhores práticas de acessibilidade

## 🎨 Cores do Brand

- **Primary (Pink)**: `#ea258e` - Cor principal do Altitude Park
- **Secondary (Blue)**: `#00b4f5` - Cor secundária
- **Tertiary (Orange)**: `#fe8d35` - Cor terciária
- **Quaternary (Yellow)**: `#f0e410` - Cor quaternária
- **Quinary (Green)**: `#a1da00` - Cor quinária

## 🏗️ Estrutura do Projeto

```
altitude-park/
├── src/
│   ├── app/                 # Páginas Next.js 14 (App Router)
│   ├── components/          # Componentes React
│   │   ├── layout/         # Header, Footer
│   │   ├── sections/       # Seções da página
│   │   └── ui/            # Componentes de UI
│   ├── data/              # Configurações e dados
│   ├── lib/               # Utilitários e bibliotecas
│   ├── types/             # Tipos TypeScript
│   └── utils/             # Funções utilitárias
├── public/
│   ├── images/            # Imagens do site
│   │   ├── atracoes/      # Imagens das atrações
│   │   ├── elementos/     # Elementos decorativos
│   │   ├── logo/          # Logos
│   │   └── unidades/      # Imagens das unidades
└── docs/                  # Documentação
```

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **GSAP** - Animações avançadas
- **Radix UI** - Componentes acessíveis
- **Framer Motion** - Animações de transição
- **Swiper** - Carrosséis e sliders

## 📱 Seções do Website

### 1. Header

- Faixa superior com "Acesse sua conta" e "Carrinho"
- Logo do Altitude Park
- Menu de navegação com dropdown
- Botão "Ingressos" em destaque

### 2. Banner Hero

- Banner animado com GSAP
- Título com animação de bounce
- Botões de call-to-action
- Indicador de scroll

### 3. Seção Unidades

- Grid responsivo com todas as unidades
- Imagens das unidades
- Informações de endereço e horários
- Elementos flutuantes animados

### 4. Seção Valores

- Cards com preços especiais
- Destaque para promoção especial
- Informações sobre meias antiderrapantes
- Políticas de desconto

### 5. Seção Atrações

- Grid com todas as atrações
- Imagens das atrações
- Descrições
- Efeitos hover

### 6. Seção FAQ

- Accordion interativo
- Perguntas frequentes completas
- Animações suaves

### 7. Seção Faça sua Festa

- Call-to-action para festas
- Botão para solicitar cotação
- Design em gradiente

### 8. Footer

- Logo do Altitude Park
- Links rápidos
- Informações de contato
- Redes sociais
- Elementos flutuantes

## 🎭 Animações e Efeitos

### GSAP Animations

- **Banner Hero**: Animação de entrada com scale e fade
- **Scroll Triggers**: Animações baseadas no scroll
- **Floating Elements**: Elementos decorativos flutuantes
- **Section Animations**: Fade-in das seções

### CSS Animations

- **Bounce Altitude**: Animação personalizada para o título
- **Float Animations**: Animações de flutuação para elementos
- **Hover Effects**: Efeitos de hover nos cards
- **Transitions**: Transições suaves em todos os elementos

## 🛠️ Configuração

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone [url-do-repositorio]
cd altitude-park
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

```bash
cp .env.example .env.local
```

4. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📝 Configuração de Dados

### Configuração Principal (`src/data/config.ts`)

- Informações da empresa
- Endereços das unidades
- Horários de funcionamento
- Cores e fontes
- Redes sociais
- Configurações de contato

### Personalização

1. Edite `src/data/config.ts` com os dados da sua empresa
2. Substitua as imagens em `public/images/`
3. Ajuste as cores no `tailwind.config.js`
4. Modifique os textos nas páginas

## 🎨 Customização

### Cores

As cores podem ser personalizadas no arquivo `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: "#ea258e", // Cor principal
    500: "#ea258e",
    // ... outras variações
  },
  // ... outras cores
}
```

### Fontes

As fontes estão configuradas no `tailwind.config.js`:

```javascript
fontFamily: {
  orbitron: ['Orbitron', 'sans-serif'],
  inter: ['Inter', 'sans-serif'],
  poppins: ['Poppins', 'sans-serif'],
}
```

### Animações

As animações GSAP podem ser personalizadas nos componentes:

- `src/app/page.tsx` - Animações da página principal
- `src/components/sections/FloatingElements.tsx` - Elementos flutuantes

## 📱 Responsividade

O template é totalmente responsivo com breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático

### Outras Plataformas

- **Netlify**: Compatível com Next.js
- **AWS Amplify**: Suporte completo
- **DigitalOcean App Platform**: Deploy simples

## 📊 Performance

### Otimizações Implementadas

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automático com Next.js
- **Lazy Loading**: Componentes e imagens
- **CSS Purge**: Tailwind CSS otimizado
- **Bundle Analysis**: Análise de tamanho do bundle

### Métricas Esperadas

- **Lighthouse Score**: 90+ em todas as categorias
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Linting do código
npm run type-check   # Verificação de tipos TypeScript
npm run test         # Executar testes
npm run storybook    # Abrir Storybook
```

## 📚 Documentação Adicional

- [GSAP Animations Guide](./GSAP_ANIMATIONS_GUIDE.md)
- [Shadcn UI Guide](./SHADCN_UI_GUIDE.md)
- [Storybook Guide](./STORYBOOK_GUIDE.md)
- [Formulário Guide](./FORMULARIO_GUIDE.md)

---

**Altitude Park** - Diversão garantida para toda a família! 🎪
