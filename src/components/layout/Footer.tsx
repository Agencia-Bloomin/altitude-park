'use client';

import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/config';

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Elementos flutuantes de fundo */}
      <div className="relative overflow-hidden">
        <Image
          src="/images/elements/circle-pink.png"
          alt=""
          width={100}
          height={100}
          className="floating-element floating-element-1 absolute top-10 left-10 opacity-10"
        />
        <Image
          src="/images/elements/circle-blue.png"
          alt=""
          width={80}
          height={80}
          className="floating-element floating-element-2 absolute top-20 right-20 opacity-10"
        />
        <Image
          src="/images/elements/circle-green.png"
          alt=""
          width={120}
          height={120}
          className="floating-element floating-element-3 absolute bottom-10 left-1/4 opacity-10"
        />

        <div className="container-custom relative z-10">
          {/* Seção principal */}
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Logo e descrição */}
              <div className="lg:col-span-1">
                <Link href="/" className="inline-block mb-6">
                  <Image
                    src="/images/logo/logo-bloomin.webp"
                    alt="Altitude Park"
                    width={200}
                    height={80}
                    className="h-16 w-auto"
                  />
                </Link>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  O melhor parque de trampolim do Brasil! Diversão garantida para toda a família com as melhores atrações e segurança.
                </p>
                <div className="flex space-x-4">
                  {siteConfig.social.facebook && (
                    <a
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-400 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  )}
                  {siteConfig.social.instagram && (
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-400 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875zm-7.83 9.781c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Links rápidos */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6">Links Rápidos</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/" className="text-gray-400 hover:text-pink-400 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/sobre" className="text-gray-400 hover:text-pink-400 transition-colors">
                      Sobre Nós
                    </Link>
                  </li>
                  <li>
                    <Link href="/precos" className="text-gray-400 hover:text-pink-400 transition-colors">
                      Preços
                    </Link>
                  </li>
                  <li>
                    <Link href="/unidades" className="text-gray-400 hover:text-pink-400 transition-colors">
                      Unidades
                    </Link>
                  </li>
                  <li>
                    <Link href="/faca-sua-festa" className="text-gray-400 hover:text-pink-400 transition-colors">
                      Faça sua Festa
                    </Link>
                  </li>
                  <li>
                    <Link href="/ingressos" className="text-gray-400 hover:text-pink-400 transition-colors">
                      Ingressos
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Atrações */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6">Atrações</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/atracoes/freejump" className="text-gray-400 hover:text-pink-400 transition-colors">
                      Free Jump
                    </Link>
                  </li>
                  <li>
                    <Link href="/atracoes/ninja" className="text-gray-400 hover:text-pink-400 transition-colors">
                      Ninja Course
                    </Link>
                  </li>
                  <li>
                    <Link href="/atracoes/cowball" className="text-gray-400 hover:text-pink-400 transition-colors">
                      Cow Ball
                    </Link>
                  </li>
                  <li>
                    <Link href="/atracoes/crazy-bubble" className="text-gray-400 hover:text-pink-400 transition-colors">
                      Crazy Bubble
                    </Link>
                  </li>
                  <li>
                    <Link href="/atracoes/lula" className="text-gray-400 hover:text-pink-400 transition-colors">
                      Lula
                    </Link>
                  </li>
                  <li>
                    <Link href="/atracoes/twister" className="text-gray-400 hover:text-pink-400 transition-colors">
                      Twister
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contato */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6">Contato</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-pink-400 font-semibold mb-2">Central de Atendimento</h4>
                    <a
                      href={siteConfig.contact.phoneLink}
                      className="text-gray-400 hover:text-pink-400 transition-colors block"
                    >
                      {siteConfig.contact.phone}
                    </a>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-gray-400 hover:text-pink-400 transition-colors block"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-pink-400 font-semibold mb-2">WhatsApp</h4>
                    <a
                      href={siteConfig.contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-400 transition-colors block"
                    >
                      {siteConfig.contact.whatsapp}
                    </a>
                  </div>

                  <div>
                    <h4 className="text-pink-400 font-semibold mb-2">Horário de Funcionamento</h4>
                    <p className="text-gray-400 text-sm">
                      Segunda à Sábado: 11:00 às 22:00<br />
                      Domingo e Feriados: 11:00 às 21:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seção inferior */}
          <div className="border-t border-gray-800 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Altitude Park. Todos os direitos reservados.
              </div>
              <div className="flex space-x-6 text-sm">
                <Link href="/politica-privacidade" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Política de Privacidade
                </Link>
                <Link href="/termos-uso" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Termos de Uso
                </Link>
                <Link href="/faq" className="text-gray-400 hover:text-pink-400 transition-colors">
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 