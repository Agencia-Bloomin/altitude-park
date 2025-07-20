# Configuração do CMS Strapi

Este guia mostra como configurar o Strapi como CMS headless para o template Next.js.

## 🚀 Por que Strapi?

- **Headless CMS** nativo em Node.js
- **API REST/GraphQL** automática
- **Interface admin** intuitiva
- **Fácil integração** com Next.js
- **Sistema de permissões** robusto
- **Suporte a múltiplos tipos** de conteúdo
- **Melhor para projetos** de agência

## 📋 Pré-requisitos

- Node.js 18+
- npm ou yarn
- Banco de dados (PostgreSQL, MySQL, SQLite)

## 🛠️ Instalação do Strapi

### 1. Criar novo projeto Strapi

```bash
npx create-strapi-app@latest cms-backend --quickstart
cd cms-backend
```

### 2. Configurar banco de dados

```bash
# Para PostgreSQL
npm install pg
# Para MySQL
npm install mysql
```

### 3. Configurar .env

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
JWT_SECRET=your-jwt-secret

# Database
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=strapi_cms
DATABASE_USERNAME=your_username
DATABASE_PASSWORD=your_password
DATABASE_SSL=false
```

## 📊 Estrutura de Conteúdo

### 1. Tipos de Conteúdo (Content Types)

#### Banner/Carrossel
```javascript
// Banner
{
  title: String (required),
  subtitle: String,
  description: Text,
  image: Media (required),
  mobileImage: Media,
  buttonText: String,
  buttonLink: String,
  isActive: Boolean,
  order: Number,
  createdAt: DateTime,
  updatedAt: DateTime
}
```

#### Produtos
```javascript
// Product
{
  name: String (required),
  description: Text,
  shortDescription: String,
  price: Number,
  originalPrice: Number,
  image: Media (required),
  images: Media (multiple),
  category: Relation (many-to-one),
  tags: JSON,
  features: JSON,
  specifications: JSON,
  inStock: Boolean,
  slug: String (unique),
  isActive: Boolean,
  createdAt: DateTime,
  updatedAt: DateTime
}
```

#### Categorias
```javascript
// Category
{
  name: String (required),
  description: Text,
  image: Media,
  slug: String (unique),
  parentId: Relation (self),
  isActive: Boolean,
  createdAt: DateTime,
  updatedAt: DateTime
}
```

#### Depoimentos
```javascript
// Testimonial
{
  name: String (required),
  company: String,
  position: String,
  content: Text (required),
  rating: Number (1-5),
  image: Media,
  source: Enumeration (google, facebook, instagram, manual),
  sourceUrl: String,
  isVerified: Boolean,
  isActive: Boolean,
  createdAt: DateTime,
  updatedAt: DateTime
}
```

#### FAQ
```javascript
// FAQ
{
  question: String (required),
  answer: Text (required),
  category: String,
  order: Number,
  isActive: Boolean,
  createdAt: DateTime,
  updatedAt: DateTime
}
```

#### Blog Posts
```javascript
// Blog Post
{
  title: String (required),
  slug: String (unique),
  excerpt: Text,
  content: RichText (required),
  featuredImage: Media,
  author: Relation (many-to-one),
  category: String,
  tags: JSON,
  isPublished: Boolean,
  publishedAt: DateTime,
  seo: Component (seo-component),
  createdAt: DateTime,
  updatedAt: DateTime
}
```

### 2. Componentes Reutilizáveis

#### SEO Component
```javascript
// SEO Component
{
  title: String,
  description: Text,
  keywords: JSON,
  ogImage: Media,
  canonical: String
}
```

#### Author Component
```javascript
// Author Component
{
  name: String (required),
  email: String,
  avatar: Media,
  bio: Text,
  socialLinks: JSON
}
```

## 🔧 Configuração da API

### 1. Configurar CORS

```javascript
// config/middlewares.js
module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https:'],
          'media-src': ["'self'", 'data:', 'blob:', 'https:'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: ['http://localhost:3000', 'https://yourdomain.com']
    }
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
```

### 2. Configurar Permissões

1. Acesse o admin do Strapi
2. Vá em Settings > Users & Permissions Plugin > Roles
3. Configure as permissões para "Public" e "Authenticated"

## 🔌 Integração com Next.js

### 1. Instalar dependências

```bash
npm install axios
```

### 2. Criar serviço de API

```typescript
// src/lib/api.ts
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getBanners = async () => {
  const response = await api.get('/banners?populate=*');
  return response.data;
};

export const getProducts = async () => {
  const response = await api.get('/products?populate=*');
  return response.data;
};

export const getTestimonials = async () => {
  const response = await api.get('/testimonials?populate=*');
  return response.data;
};

export const getFAQs = async () => {
  const response = await api.get('/faqs?populate=*');
  return response.data;
};

export const getBlogPosts = async () => {
  const response = await api.get('/blog-posts?populate=*');
  return response.data;
};
```

### 3. Usar no Next.js

```typescript
// src/app/page.tsx
import { getBanners, getProducts } from '@/lib/api';

export default async function HomePage() {
  const [banners, products] = await Promise.all([
    getBanners(),
    getProducts(),
  ]);

  return (
    <div>
      <HeroBanner banners={banners.data} />
      <ProductsSection products={products.data} />
    </div>
  );
}
```

## 🚀 Deploy

### 1. Strapi (Backend)

#### Vercel
```bash
# vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/node"
    }
  ]
}
```

#### Railway
```bash
# Conecte diretamente no Railway
# Configure as variáveis de ambiente
```

#### Heroku
```bash
# Procfile
web: npm start
```

### 2. Next.js (Frontend)

Configure as variáveis de ambiente:

```env
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-app.vercel.app
```

## 📊 Monitoramento

### 1. Logs
```bash
# Strapi logs
npm run strapi logs

# PM2 logs
pm2 logs strapi
```

### 2. Health Check
```bash
curl https://your-strapi-app.com/healthcheck
```

## 🔒 Segurança

### 1. API Tokens
```bash
# Gerar token no admin do Strapi
# Settings > API Tokens > Create new API Token
```

### 2. Rate Limiting
```javascript
// config/middlewares.js
{
  name: 'strapi::rateLimit',
  config: {
    interval: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per interval
  },
}
```

## 📈 Performance

### 1. Cache
```javascript
// config/plugins.js
module.exports = {
  'rest-cache': {
    config: {
      provider: {
        name: 'memory',
        options: {
          max: 32767,
          ttl: 3600000,
        },
      },
      strategy: {
        contentTypes: [
          'api::banner.banner',
          'api::product.product',
          'api::testimonial.testimonial',
        ],
      },
    },
  },
};
```

### 2. Image Optimization
```javascript
// config/plugins.js
module.exports = {
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
      },
    },
  },
};
```

## 🎯 Próximos Passos

1. **Configurar backup automático** do banco de dados
2. **Implementar webhooks** para sincronização
3. **Configurar CDN** para imagens
4. **Implementar cache** no frontend
5. **Configurar monitoramento** e alertas

---

**Strapi é a escolha ideal para agências que precisam de flexibilidade e controle total sobre o conteúdo.** 