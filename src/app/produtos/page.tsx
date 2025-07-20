import React from 'react'
import PageHero from '@/components/sections/PageHero'
import { BreadcrumbItem } from '@/components/ui/breadcrumb'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'Produtos' }
]

const produtos = [
  {
    id: 'marketing-digital',
    titulo: 'Marketing Digital Completo',
    descricao: 'Estratégia completa de marketing digital para aumentar suas vendas e presença online.',
    preco: 'A partir de R$ 2.500/mês',
    caracteristicas: ['SEO', 'Google Ads', 'Redes Sociais', 'Analytics'],
    imagem: '/images/produtos/marketing-digital.jpg',
    destaque: true
  },
  {
    id: 'seo',
    titulo: 'Otimização SEO',
    descricao: 'Melhore o posicionamento do seu site nos motores de busca e aumente o tráfego orgânico.',
    preco: 'A partir de R$ 1.800/mês',
    caracteristicas: ['Análise de Keywords', 'Otimização On-Page', 'Link Building', 'Relatórios'],
    imagem: '/images/produtos/seo.jpg',
    destaque: false
  },
  {
    id: 'google-ads',
    titulo: 'Google Ads',
    descricao: 'Campanhas publicitárias no Google para gerar leads qualificados e aumentar conversões.',
    preco: 'A partir de R$ 1.200/mês',
    caracteristicas: ['Campanhas Search', 'Display Ads', 'Remarketing', 'Otimização'],
    imagem: '/images/produtos/google-ads.jpg',
    destaque: false
  },
  {
    id: 'redes-sociais',
    titulo: 'Gestão de Redes Sociais',
    descricao: 'Presença ativa nas principais redes sociais para engajar sua audiência.',
    preco: 'A partir de R$ 1.500/mês',
    caracteristicas: ['Facebook', 'Instagram', 'LinkedIn', 'Conteúdo'],
    imagem: '/images/produtos/redes-sociais.jpg',
    destaque: false
  },
  {
    id: 'web-design',
    titulo: 'Web Design',
    descricao: 'Sites modernos e responsivos que convertem visitantes em clientes.',
    preco: 'A partir de R$ 3.000',
    caracteristicas: ['Design Responsivo', 'UX/UI', 'Otimização', 'Manutenção'],
    imagem: '/images/produtos/web-design.jpg',
    destaque: false
  },
  {
    id: 'consultoria',
    titulo: 'Consultoria Estratégica',
    descricao: 'Análise e planejamento estratégico para otimizar seus resultados de marketing.',
    preco: 'A partir de R$ 800/hora',
    caracteristicas: ['Auditoria', 'Planejamento', 'Implementação', 'Acompanhamento'],
    imagem: '/images/produtos/consultoria.jpg',
    destaque: false
  }
]

export default function ProdutosPage() {
  return (
    <main>
      <PageHero
        title="Nossos Produtos"
        description="Soluções completas em marketing digital para impulsionar seu negócio"
        breadcrumbItems={breadcrumbItems}
        backgroundImage="/images/products-hero-bg.jpg"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Soluções Personalizadas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços em marketing digital, 
              cada um projetado para atender às necessidades específicas do seu negócio
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {produtos.map((produto) => (
              <Card 
                key={produto.id} 
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  produto.destaque ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {produto.destaque && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-white text-2xl font-bold text-center">
                      {produto.titulo.split(' ').slice(0, 2).join(' ')}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{produto.titulo}</CardTitle>
                  <CardDescription className="text-base">
                    {produto.descricao}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="mb-6">
                    <p className="text-2xl font-bold text-blue-600 mb-2">
                      {produto.preco}
                    </p>
                    <div className="flex items-center text-yellow-500 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                      <span className="text-gray-600 ml-2 text-sm">(4.9)</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Inclui:</h4>
                    <ul className="space-y-2">
                      {produto.caracteristicas.map((caracteristica, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {caracteristica}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button asChild className="flex-1">
                      <Link href={`/produtos/${produto.id}`}>
                        Ver Detalhes
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Solicitar Orçamento
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Por que Escolher Nossos Produtos?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa experiência e metodologia comprovada garantem resultados reais para seu negócio
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Resultados Comprovados</h3>
              <p className="text-gray-600">
                Mais de 500 clientes satisfeitos com resultados mensuráveis e crescimento real
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Equipe Especializada</h3>
              <p className="text-gray-600">
                Profissionais certificados e experientes em cada área do marketing digital
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Qualidade Premium</h3>
              <p className="text-gray-600">
                Padrões de qualidade elevados e acompanhamento personalizado em todos os projetos
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Pronto para Impulsionar seu Negócio?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossos produtos podem transformar seus resultados
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contato">
                Solicitar Orçamento
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
} 