'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    id: '1',
    title: 'Como o SEO pode transformar seu negócio em 2024',
    excerpt: 'Descubra as principais estratégias de SEO que estão funcionando este ano e como implementá-las para aumentar seu tráfego orgânico.',
    author: 'Equipe Marketing',
    date: '15 Jan 2024',
    readTime: '5 min',
    category: 'SEO',
    image: '/images/blog/seo-2024.jpg',
    slug: 'como-seo-pode-transformar-negocio-2024',
  },
  {
    id: '2',
    title: 'Design responsivo: Por que é fundamental para seu site',
    excerpt: 'Entenda a importância do design responsivo e como ele impacta diretamente na experiência do usuário e no ranking do Google.',
    author: 'Design Team',
    date: '12 Jan 2024',
    readTime: '4 min',
    category: 'Design',
    image: '/images/blog/design-responsivo.jpg',
    slug: 'design-responsivo-fundamental-site',
  },
  {
    id: '3',
    title: 'E-commerce: Dicas para aumentar suas vendas online',
    excerpt: 'Confira as melhores práticas para otimizar sua loja virtual e converter mais visitantes em clientes.',
    author: 'E-commerce Expert',
    date: '10 Jan 2024',
    readTime: '6 min',
    category: 'E-commerce',
    image: '/images/blog/ecommerce-vendas.jpg',
    slug: 'ecommerce-dicas-aumentar-vendas-online',
  },
  {
    id: '4',
    title: 'Google Ads vs Facebook Ads: Qual escolher?',
    excerpt: 'Análise comparativa entre as duas principais plataformas de anúncios e quando usar cada uma.',
    author: 'PPC Specialist',
    date: '8 Jan 2024',
    readTime: '7 min',
    category: 'Marketing Digital',
    image: '/images/blog/google-ads-vs-facebook.jpg',
    slug: 'google-ads-vs-facebook-ads-qual-escolher',
  },
];

export function BlogSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">
            Blog <span className="text-gradient">Digital</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fique por dentro das últimas tendências em marketing digital, 
            design e desenvolvimento web com nossos artigos especializados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="card-hover group">
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-t-lg flex items-center justify-center">
                <div className="text-primary-600 text-sm font-medium">
                  {post.category}
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                </div>
                
                <CardTitle className="text-lg leading-tight group-hover:text-primary-600 transition-colors duration-200">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </CardDescription>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User size={14} />
                    {post.author}
                  </div>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary-600">
                      Ler mais
                      <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Ver Todos os Artigos
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 