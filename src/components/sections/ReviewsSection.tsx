'use client';

import { useFadeInAnimation, useStaggerAnimation, useScaleIn } from '@/lib/animations';
import { Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const reviews = [
  {
    id: '1',
    name: 'Maria Silva',
    company: 'TechStart Ltda',
    rating: 5,
    text: 'Excelente trabalho! A equipe transformou completamente nossa presença digital. O site ficou moderno, responsivo e já estamos vendo resultados positivos no SEO.',
    avatar: '/images/avatars/avatar1.jpg',
  },
  {
    id: '2',
    name: 'João Santos',
    company: 'Consultoria ABC',
    rating: 5,
    text: 'Profissionais muito competentes e atenciosos. O projeto foi entregue no prazo e superou nossas expectativas. Recomendo fortemente!',
    avatar: '/images/avatars/avatar2.jpg',
  },
  {
    id: '3',
    name: 'Ana Costa',
    company: 'E-commerce XYZ',
    rating: 5,
    text: 'Incrível o trabalho realizado! Nossa loja virtual ficou perfeita e as vendas aumentaram significativamente. Equipe muito profissional.',
    avatar: '/images/avatars/avatar3.jpg',
  },
  {
    id: '4',
    name: 'Carlos Oliveira',
    company: 'Marketing Digital Pro',
    rating: 5,
    text: 'Parceria de sucesso! Os resultados do marketing digital superaram todas as metas estabelecidas. Equipe comprometida com resultados.',
    avatar: '/images/avatars/avatar4.jpg',
  },
  {
    id: '5',
    name: 'Fernanda Lima',
    company: 'Startup Inovação',
    rating: 5,
    text: 'Transformação completa! Do design à estratégia digital, tudo foi executado com excelência. Estamos muito satisfeitos com os resultados.',
    avatar: '/images/avatars/avatar5.jpg',
  },
  {
    id: '6',
    name: 'Roberto Almeida',
    company: 'Empresa Tradicional',
    rating: 5,
    text: 'Modernizamos nossa empresa com sucesso! O site novo e as estratégias de marketing digital trouxeram novos clientes e oportunidades.',
    avatar: '/images/avatars/avatar6.jpg',
  },
];

export function ReviewsSection() {
  const headerRef = useFadeInAnimation(0);
  const reviewsRef = useStaggerAnimation(0.2, 0.15);
  const statsRef = useScaleIn(0.5);

  return (
    <section className="section-padding bg-custom-background">
      <div className="container-custom">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="heading-2 mb-4">
            O que nossos <span className="text-gradient">clientes dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Confira os depoimentos de clientes que transformaram seus negócios 
            com nossas soluções digitais e alcançaram resultados excepcionais.
          </p>
        </div>

        {/* Reviews Grid */}
        <div ref={reviewsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="flex justify-end mb-4">
                <Quote size={24} className="text-quinary-600 opacity-50" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, index) => (
                  <Star
                    key={index}
                    size={20}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                              <div className="w-12 h-12 bg-quinary-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-quinary-600 font-semibold text-lg">
                  {review.name.charAt(0)}
                </span>
              </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div ref={statsRef} className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-quinary-600 mb-2">500+</div>
              <div className="text-gray-600">Projetos Entregues</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-quinary-600 mb-2">98%</div>
              <div className="text-gray-600">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-quinary-600 mb-2">4.9</div>
              <div className="text-gray-600">Avaliação Média</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-quinary-600 mb-2">24/7</div>
              <div className="text-gray-600">Suporte Disponível</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Junte-se aos nossos clientes satisfeitos e transforme seu negócio!
          </p>
          <Button variant="default" size="xl">
            Ver Mais Avaliações
          </Button>
        </div>
      </div>
    </section>
  );
} 