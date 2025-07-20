'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { User, ShoppingCart, ChevronDown, Menu, X } from 'lucide-react';
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

  // Prevenir scroll do body quando menu mobile estiver aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        {/* Faixa superior */}
        <div className="bg-gray-800 border-b border-gray-700">
          <div className="container-custom">
            <div className="flex items-center justify-between h-10 text-sm">
              <div className="flex items-center space-x-4">
                <Link href="/login" className="text-gray-300 hover:text-pink-400 transition-colors flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>Acesse sua conta</span>
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/carrinho" className="text-gray-300 hover:text-pink-400 transition-colors flex items-center space-x-1">
                  <ShoppingCart className="w-4 h-4" />
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
                  className="h-16 w-auto"
                  priority
                />
              </Link>

              {/* Menu desktop */}
              <nav className="hidden lg:flex items-center space-x-8">
                <Link href="/" className="text-white hover:text-pink-400 transition-colors font-medium relative group">
                  <span>Home</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                
                {/* Dropdown Sobre Nós */}
                <div className="relative group">
                  <button className="text-white hover:text-pink-400 transition-colors font-medium flex items-center space-x-1 relative">
                    <span className="relative">
                      Sobre Nós
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                    <ChevronDown className="w-4 h-4" />
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

                <Link href="/precos" className="text-white hover:text-pink-400 transition-colors font-medium relative group">
                  <span>Preços</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/unidades" className="text-white hover:text-pink-400 transition-colors font-medium relative group">
                  <span>Unidades</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/faca-sua-festa" className="text-white hover:text-pink-400 transition-colors font-medium relative group">
                  <span>Faça sua Festa</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/contato" className="text-white hover:text-pink-400 transition-colors font-medium relative group">
                  <span>Contato</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                
                {/* Botão Ingressos em destaque */}
                <Button asChild className="btn-highlight transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-primary-500/25 active:scale-95">
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
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay para menu mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[55] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Menu mobile lateral */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-gray-900 shadow-2xl z-[60] transform transition-transform duration-300 ease-in-out lg:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header do menu mobile */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <h2 className="text-white text-lg font-semibold">Menu</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Conteúdo do menu mobile */}
          <div className="flex-1 overflow-y-auto">
            <nav className="p-6 space-y-6">
              <Link 
                href="/" 
                className="block text-white hover:text-pink-400 transition-colors font-medium text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <div>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-white hover:text-pink-400 transition-colors font-medium flex items-center justify-between w-full text-lg"
                >
                  <span>Sobre Nós</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isDropdownOpen && (
                  <div className="mt-4 ml-4 space-y-3">
                    <Link 
                      href="/trabalhe-conosco" 
                      className="block text-gray-300 hover:text-pink-400 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Trabalhe Conosco
                    </Link>
                    <Link 
                      href="/faq" 
                      className="block text-gray-300 hover:text-pink-400 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Perguntas Frequentes
                    </Link>
                    <Link 
                      href="/galeria" 
                      className="block text-gray-300 hover:text-pink-400 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Galeria
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                href="/precos" 
                className="block text-white hover:text-pink-400 transition-colors font-medium text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Preços
              </Link>
              <Link 
                href="/unidades" 
                className="block text-white hover:text-pink-400 transition-colors font-medium text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Unidades
              </Link>
              <Link 
                href="/faca-sua-festa" 
                className="block text-white hover:text-pink-400 transition-colors font-medium text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Faça sua Festa
              </Link>
              <Link 
                href="/contato" 
                className="block text-white hover:text-pink-400 transition-colors font-medium text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </Link>
            </nav>
          </div>

          {/* Footer do menu mobile */}
          <div className="p-6 border-t border-gray-700">
            <Button asChild className="btn-highlight w-full transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-primary-500/25 active:scale-95">
              <Link href="/ingressos" onClick={() => setIsMobileMenuOpen(false)}>
                Ingressos
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
} 