'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/config';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Faixa superior */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="container-custom">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-300 hover:text-pink-400 transition-colors">
                Acesse sua conta
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/carrinho" className="text-gray-300 hover:text-pink-400 transition-colors flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                <span>Carrinho</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Header principal */}
      <div className="bg-gray-900/90 backdrop-blur-md border-b border-gray-700">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/logo/logo.png"
                alt="Altitude Park"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>

            {/* Menu desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-pink-400 transition-colors font-medium">
                Home
              </Link>
              
              {/* Dropdown Sobre Nós */}
              <div className="relative group">
                <button className="text-white hover:text-pink-400 transition-colors font-medium flex items-center space-x-1">
                  <span>Sobre Nós</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link href="/trabalhe-conosco" className="block px-4 py-2 text-gray-300 hover:text-pink-400 hover:bg-gray-700 transition-colors">
                      Trabalhe Conosco
                    </Link>
                    <Link href="/faq" className="block px-4 py-2 text-gray-300 hover:text-pink-400 hover:bg-gray-700 transition-colors">
                      Perguntas Frequentes
                    </Link>
                    <Link href="/galeria" className="block px-4 py-2 text-gray-300 hover:text-pink-400 hover:bg-gray-700 transition-colors">
                      Galeria
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/precos" className="text-white hover:text-pink-400 transition-colors font-medium">
                Preços
              </Link>
              <Link href="/unidades" className="text-white hover:text-pink-400 transition-colors font-medium">
                Unidades
              </Link>
              <Link href="/faca-sua-festa" className="text-white hover:text-pink-400 transition-colors font-medium">
                Faça sua Festa
              </Link>
              <Link href="/contato" className="text-white hover:text-pink-400 transition-colors font-medium">
                Contato
              </Link>
              
              {/* Botão Ingressos em destaque */}
              <Button asChild className="btn-highlight">
                <Link href="/ingressos">
                  Ingressos
                </Link>
              </Button>
            </nav>

            {/* Menu mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white hover:text-pink-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-800 border-b border-gray-700">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-white hover:text-pink-400 transition-colors font-medium">
                Home
              </Link>
              
              <div>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-white hover:text-pink-400 transition-colors font-medium flex items-center justify-between w-full"
                >
                  <span>Sobre Nós</span>
                  <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link href="/trabalhe-conosco" className="block text-gray-300 hover:text-pink-400 transition-colors">
                      Trabalhe Conosco
                    </Link>
                    <Link href="/faq" className="block text-gray-300 hover:text-pink-400 transition-colors">
                      Perguntas Frequentes
                    </Link>
                    <Link href="/galeria" className="block text-gray-300 hover:text-pink-400 transition-colors">
                      Galeria
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/precos" className="text-white hover:text-pink-400 transition-colors font-medium">
                Preços
              </Link>
              <Link href="/unidades" className="text-white hover:text-pink-400 transition-colors font-medium">
                Unidades
              </Link>
              <Link href="/faca-sua-festa" className="text-white hover:text-pink-400 transition-colors font-medium">
                Faça sua Festa
              </Link>
              <Link href="/contato" className="text-white hover:text-pink-400 transition-colors font-medium">
                Contato
              </Link>
              
              <Button asChild className="btn-highlight w-full">
                <Link href="/ingressos">
                  Ingressos
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
} 