# 🎯 Guia de Animações GSAP com Scroll Trigger

Este guia explica como usar as animações GSAP implementadas no projeto, incluindo hooks personalizados e exemplos práticos.

## 📋 Índice

1. [Hooks Disponíveis](#hooks-disponíveis)
2. [Como Usar](#como-usar)
3. [Exemplos Práticos](#exemplos-práticos)
4. [Configurações Avançadas](#configurações-avançadas)
5. [Boas Práticas](#boas-práticas)

## 🎯 Hooks Disponíveis

### 1. `useFadeInAnimation(delay?)`

Animação de fade in com movimento para cima.

```typescript
const elementRef = useFadeInAnimation(0.2); // delay opcional
```

### 2. `useSlideInLeft(delay?)`

Animação de slide da esquerda para a direita.

```typescript
const elementRef = useSlideInLeft(0.3);
```

### 3. `useSlideInRight(delay?)`

Animação de slide da direita para a esquerda.

```typescript
const elementRef = useSlideInRight(0.3);
```

### 4. `useScaleIn(delay?)`

Animação de escala com efeito bounce.

```typescript
const elementRef = useScaleIn(0.5);
```

### 5. `useStaggerAnimation(delay?, stagger?)`

Animação em sequência para elementos filhos.

```typescript
const containerRef = useStaggerAnimation(0.2, 0.15);
```

### 6. `useTextAnimation(delay?)`

Efeito typewriter para texto.

```typescript
const textRef = useTextAnimation(0.5);
```

### 7. `useParallax(speed?)`

Efeito parallax com velocidade personalizada.

```typescript
const parallaxRef = useParallax(0.5);
```

## 🚀 Como Usar

### Passo 1: Importar os Hooks

```typescript
import {
  useFadeInAnimation,
  useSlideInLeft,
  useStaggerAnimation,
} from '@/lib/animations';
```

### Passo 2: Usar nos Componentes

```typescript
export function MeuComponente() {
  const headerRef = useFadeInAnimation(0);
  const contentRef = useSlideInLeft(0.2);
  const listRef = useStaggerAnimation(0.4, 0.1);

  return (
    <section>
      <div ref={headerRef}>
        <h1>Título</h1>
      </div>

      <div ref={contentRef}>
        <p>Conteúdo</p>
      </div>

      <div ref={listRef}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </div>
    </section>
  );
}
```

## 📝 Exemplos Práticos

### Exemplo 1: Seção com Header e Cards

```typescript
export function ProductsSection() {
  const headerRef = useFadeInAnimation(0);
  const cardsRef = useStaggerAnimation(0.2, 0.15);

  return (
    <section>
      <div ref={headerRef} className="text-center">
        <h2>Nossos Produtos</h2>
        <p>Descrição dos produtos</p>
      </div>

      <div ref={cardsRef} className="grid grid-cols-3">
        <Card>Produto 1</Card>
        <Card>Produto 2</Card>
        <Card>Produto 3</Card>
      </div>
    </section>
  );
}
```

### Exemplo 2: Layout com Duas Colunas

```typescript
export function AboutSection() {
  const leftRef = useSlideInLeft(0);
  const rightRef = useSlideInRight(0.3);

  return (
    <section>
      <div className="grid grid-cols-2">
        <div ref={leftRef}>
          <h2>Sobre Nós</h2>
          <p>Texto sobre a empresa</p>
        </div>

        <div ref={rightRef}>
          <img src="/image.jpg" alt="Equipe" />
        </div>
      </div>
    </section>
  );
}
```

### Exemplo 3: Lista com Stagger

```typescript
export function FeaturesList() {
  const listRef = useStaggerAnimation(0.2, 0.1);

  return (
    <div ref={listRef} className="space-y-4">
      <Feature icon={Star} title="Feature 1" />
      <Feature icon={Heart} title="Feature 2" />
      <Feature icon={Check} title="Feature 3" />
    </div>
  );
}
```

## ⚙️ Configurações Avançadas

### Animações Customizadas

Para animações mais complexas, você pode usar o GSAP diretamente:

```typescript
import { useEffect, useRef } from 'react';

export function CustomAnimation() {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = async () => {
      // Carregar GSAP dinamicamente
      const gsapModule = await import('gsap');
      const scrollTriggerModule = await import('gsap/ScrollTrigger');

      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      const element = elementRef.current;
      if (!element) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        element,
        {
          opacity: 0,
          rotation: -45,
          scale: 0.5,
        },
        {
          opacity: 1,
          rotation: 0,
          scale: 1,
          duration: 1.5,
          ease: 'back.out(1.7)',
        }
      );
    };

    animate();
  }, []);

  return <div ref={elementRef}>Conteúdo animado</div>;
}
```

### Configurações do ScrollTrigger

```typescript
scrollTrigger: {
  trigger: element,           // Elemento que dispara a animação
  start: 'top 80%',          // Quando começar (topo do elemento a 80% da viewport)
  end: 'bottom 20%',         // Quando terminar
  toggleActions: 'play none none reverse', // Ações: play, pause, resume, reverse
  scrub: true,               // Animação segue o scroll
  markers: false,            // Marcadores para debug
  once: true,                // Executar apenas uma vez
}
```

## 🎨 Boas Práticas

### 1. Performance

- Use `once: true` para animações que devem executar apenas uma vez
- Evite animar muitos elementos simultaneamente
- Use `will-change: transform` no CSS para otimizar

### 2. Acessibilidade

- Respeite as preferências de movimento reduzido do usuário
- Não use animações que possam causar náusea ou desconforto
- Mantenha o foco visível durante animações

### 3. UX

- Use delays apropriados para criar sequências naturais
- Não sobrecarregue com muitas animações
- Mantenha consistência visual

### 4. Limpeza

- Sempre limpe os ScrollTriggers no cleanup do useEffect
- Use `ScrollTrigger.getAll().forEach(trigger => trigger.kill())`

## 🔧 Troubleshooting

### Problema: Animações não funcionam

```typescript
// Verifique se o GSAP está sendo carregado corretamente
console.log('GSAP loaded successfully'); // Deve aparecer no console
```

### Problema: Animações executam múltiplas vezes

```typescript
// Use once: true ou toggleActions apropriado
scrollTrigger: {
  once: true,
  toggleActions: 'play none none none',
}
```

### Problema: Performance ruim

```typescript
// Use will-change no CSS
.animated-element {
  will-change: transform, opacity;
}
```

## 📚 Recursos Adicionais

- [Documentação oficial do GSAP](https://greensock.com/docs/)
- [ScrollTrigger Plugin](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [Easing Functions](https://greensock.com/docs/v3/Eases)

## 🎯 Exemplos Implementados

No projeto, você pode ver exemplos práticos nos seguintes componentes:

- `HeroBanner.tsx` - Animação do conteúdo do banner
- `AboutSection.tsx` - Layout com duas colunas animadas
- `ProductsSection.tsx` - Cards com stagger animation
- `FAQSection.tsx` - Lista de FAQs com animação
- `CTASection.tsx` - Seção de call-to-action
- `ReviewsSection.tsx` - Usando hooks personalizados

Cada componente demonstra diferentes técnicas e padrões de animação que você pode adaptar para suas necessidades.

## 🔄 Carregamento Dinâmico

O GSAP é carregado dinamicamente para evitar problemas de SSR:

```typescript
// Carregamento automático no GSAPProvider
const gsapModule = await import('gsap');
const scrollTriggerModule = await import('gsap/ScrollTrigger');

const gsap = gsapModule.gsap;
const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

gsap.registerPlugin(ScrollTrigger);
```

Isso garante que:

- ✅ GSAP carrega apenas no cliente
- ✅ Sem problemas de SSR
- ✅ Performance otimizada
- ✅ Fallback automático em caso de falha
