import React from 'react'
import PageHero from '@/components/sections/PageHero'
import { BreadcrumbItem } from '@/components/ui/breadcrumb'

const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'Sobre Nós' }
]

export default function SobrePage() {
  return (
    <main>
      <PageHero
        title="Sobre Nós"
        description="Conheça nossa história, missão e valores que nos tornam referência em marketing digital"
        breadcrumbItems={breadcrumbItems}
        backgroundImage="/images/about-hero-bg.jpg"
      />
      
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Nossa História
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Fundada em 2018, nossa agência nasceu da paixão por transformar ideias em resultados. 
                  Começamos como uma pequena equipe de especialistas em marketing digital e hoje somos 
                  referência no mercado, atendendo empresas de todos os portes.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  Nossa jornada é marcada por inovação constante, sempre buscando as melhores práticas 
                  e tecnologias para entregar resultados excepcionais aos nossos clientes.
                </p>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-2xl">
                  {/* Placeholder para imagem */}
                  <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
                    NOSSA HISTÓRIA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Princípios que guiam nosso trabalho e relacionamento com clientes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-gray-700 rounded-xl shadow-lg border border-gray-600">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Transparência</h3>
              <p className="text-gray-300">
                Acreditamos na comunicação clara e honesta em todos os nossos projetos
              </p>
            </div>
            
            <div className="text-center p-8 bg-gray-700 rounded-xl shadow-lg border border-gray-600">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Inovação</h3>
              <p className="text-gray-300">
                Sempre buscamos as melhores soluções e tecnologias para nossos clientes
              </p>
            </div>
            
            <div className="text-center p-8 bg-gray-700 rounded-xl shadow-lg border border-gray-600">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Resultados</h3>
              <p className="text-gray-300">
                Nosso foco é sempre entregar resultados mensuráveis e impactantes
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Nossa Equipe
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Especialistas apaixonados por marketing digital e resultados
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'João Silva', role: 'CEO & Fundador', image: '/team/joao.jpg' },
              { name: 'Maria Santos', role: 'Diretora de Marketing', image: '/team/maria.jpg' },
              { name: 'Pedro Costa', role: 'Diretor Criativo', image: '/team/pedro.jpg' },
              { name: 'Ana Oliveira', role: 'Gerente de Projetos', image: '/team/ana.jpg' }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 