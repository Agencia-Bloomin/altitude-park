import React from 'react'
import { notFound } from 'next/navigation'
import PageHero from '@/components/sections/PageHero'
import { BreadcrumbItem } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Star, Users, TrendingUp, Clock, Award } from 'lucide-react'
import Link from 'next/link'

// Dados dos produtos (em um projeto real, viriam de uma API ou CMS)
const produtos = {
  'marketing-digital': {
    id: 'marketing-digital',
    titulo: 'Marketing Digital Completo',
    descricao: 'Estratégia completa de marketing digital para aumentar suas vendas e presença online.',
    descricaoLonga: 'Nossa solução de Marketing Digital Completo é uma abordagem holística que combina todas as principais estratégias de marketing digital em um plano coeso e personalizado. Desenvolvemos estratégias que não apenas aumentam sua visibilidade online, mas também geram leads qualificados e convertem visitantes em clientes fiéis.',
    preco: 'A partir de R$ 2.500/mês',
    caracteristicas: [
      'Otimização SEO completa',
      'Gestão de campanhas Google Ads',
      'Gestão de redes sociais',
      'Análise de dados e relatórios',
      'Criação de conteúdo',
      'Email marketing',
      'Remarketing',
      'Consultoria estratégica'
    ],
    beneficios: [
      'Aumento de 300% no tráfego orgânico',
      'Redução de 40% no custo por lead',
      'Melhoria de 200% na taxa de conversão',
      'ROI médio de 500% em 6 meses'
    ],
    tempoImplementacao: '4-6 semanas',
    garantia: '30 dias de garantia',
    suporte: 'Suporte 24/7',
    imagem: '/images/produtos/marketing-digital.jpg',
    destaque: true
  },
  'seo': {
    id: 'seo',
    titulo: 'Otimização SEO',
    descricao: 'Melhore o posicionamento do seu site nos motores de busca e aumente o tráfego orgânico.',
    descricaoLonga: 'Nossa estratégia de SEO é baseada em dados e melhores práticas do Google. Realizamos uma auditoria completa do seu site, identificamos oportunidades de melhoria e implementamos técnicas avançadas de otimização para posicionamento orgânico.',
    preco: 'A partir de R$ 1.800/mês',
    caracteristicas: [
      'Auditoria técnica completa',
      'Análise de keywords',
      'Otimização on-page',
      'Link building estratégico',
      'Criação de conteúdo otimizado',
      'Monitoramento de rankings',
      'Relatórios mensais',
      'Consultoria contínua'
    ],
    beneficios: [
      'Aumento médio de 150% no tráfego orgânico',
      'Posicionamento em 3 meses',
      'Melhoria na autoridade do domínio',
      'Redução da taxa de rejeição'
    ],
    tempoImplementacao: '2-3 semanas',
    garantia: '30 dias de garantia',
    suporte: 'Suporte em horário comercial',
    imagem: '/images/produtos/seo.jpg',
    destaque: false
  }
}

interface ProdutoPageProps {
  params: {
    slug: string
  }
}

export default function ProdutoPage({ params }: ProdutoPageProps) {
  const produto = produtos[params.slug as keyof typeof produtos]
  
  if (!produto) {
    notFound()
  }

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Produtos', href: '/produtos' },
    { label: produto.titulo }
  ]

  return (
    <main>
      <PageHero
        title={produto.titulo}
        description={produto.descricao}
        breadcrumbItems={breadcrumbItems}
        backgroundImage={produto.imagem}
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Conteúdo Principal */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Sobre este Produto
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {produto.descricaoLonga}
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  O que está Incluído
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {produto.caracteristicas.map((caracteristica, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{caracteristica}</span>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Benefícios Esperados
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {produto.beneficios.map((beneficio, index) => (
                    <Card key={index} className="border-green-200 bg-green-50">
                      <CardContent className="pt-6">
                        <div className="flex items-center space-x-3">
                          <TrendingUp className="w-6 h-6 text-green-600" />
                          <span className="font-semibold text-green-800">{beneficio}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar com Informações */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">{produto.titulo}</CardTitle>
                    <CardDescription className="text-lg">
                      {produto.descricao}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div>
                      <p className="text-3xl font-bold text-blue-600 mb-2">
                        {produto.preco}
                      </p>
                      <div className="flex items-center text-yellow-500 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                        <span className="text-gray-600 ml-2">(4.9/5)</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="font-semibold">Tempo de Implementação</p>
                          <p className="text-sm text-gray-600">{produto.tempoImplementacao}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Award className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="font-semibold">Garantia</p>
                          <p className="text-sm text-gray-600">{produto.garantia}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="font-semibold">Suporte</p>
                          <p className="text-sm text-gray-600">{produto.suporte}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button className="w-full" size="lg">
                        Solicitar Orçamento
                      </Button>
                      <Button variant="outline" className="w-full" size="lg">
                        Falar com Especialista
                      </Button>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm text-gray-500">
                        ✓ Sem compromisso • ✓ Orçamento gratuito • ✓ Proposta personalizada
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Seção de Depoimentos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              O que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja os resultados reais que nossos clientes alcançaram com este produto
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                nome: 'Maria Silva',
                empresa: 'E-commerce Plus',
                depoimento: 'Aumentamos nossas vendas em 300% em apenas 6 meses. O ROI foi incrível!',
                resultado: '+300% vendas'
              },
              {
                nome: 'João Santos',
                empresa: 'Tech Solutions',
                depoimento: 'O tráfego orgânico cresceu 200% e nossa autoridade no mercado melhorou significativamente.',
                resultado: '+200% tráfego'
              },
              {
                nome: 'Ana Costa',
                empresa: 'Digital Agency',
                depoimento: 'Profissionais extremamente competentes. Resultados superaram todas as expectativas.',
                resultado: 'ROI 500%'
              }
            ].map((depoimento, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{depoimento.depoimento}"
                  </p>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-3">
                    {depoimento.resultado}
                  </div>
                  <p className="font-semibold text-gray-900">{depoimento.nome}</p>
                  <p className="text-sm text-gray-500">{depoimento.empresa}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Final */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar você a alcançar seus objetivos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contato">
                Solicitar Orçamento Gratuito
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Agendar Consultoria
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
} 