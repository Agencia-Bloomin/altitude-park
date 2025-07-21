'use client';

import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/config';

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container-custom">
          {/* Seção principal */}
          <div className="py-16">
            <div className="flex flex-col md:flex-row lg:flex-row gap-8 justify-center md:justify-between items-center md:items-start">
              {/* Logo e descrição */}
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                <Link href="/" className="inline-block mb-6">
                  <Image
                    src="/images/logo/logo.png"
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
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Links rápidos */}
              <div className="flex flex-col items-center justify-center flex-1">
                <div className="w-fit">
                  <span className="text-white font-bold text-lg mb-6 text-center md:text-left block">Links Rápidos</span>
                  <ul className="space-y-3 text-center md:text-left">
                  <li>
                    <Link href="/" className="text-gray-400 hover:text-pink-400 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                      Sobre Nós
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                      Preços
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                      Unidades
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                      Faça sua Festa
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                      Ingressos
                    </Link>
                  </li>
                </ul>
                  </div>
              </div>

              {/* Contato */}
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-white font-bold text-lg mb-6 block">Contato</span>
                <div className="space-y-4">
                  <div>
                    <span className="text-pink-400 font-semibold mb-2 block">Central de Atendimento</span>
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
                    <span className="text-pink-400 font-semibold mb-2 block">WhatsApp</span>
                    <a
                      href={siteConfig.contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-400 transition-colors block"
                    >
                      {siteConfig.contact.whatsapp}
                    </a>
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
              <div className="flex items-center space-x-6">
                <div className="flex space-x-6 text-sm">
                  <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Política de Privacidade
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Mapa do Site
                  </Link>
                </div>
                
                {/* Logo Bloomin */}
                <div className="ml-6 pl-6 border-l border-gray-700">
                  <a
                    href="https://bloomin.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block opacity-60 hover:opacity-100 transition-opacity duration-300"
                  >
                    <Image
                      src="/images/logo/logo-bloomin.webp"
                      alt="Desenvolvido por Bloomin"
                      width={150}
                      height={50}
                      className="h-10 w-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </footer>
  );
} 