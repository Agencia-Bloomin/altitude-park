'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { contactInfo, getWhatsAppLink } from '@/data';

interface MenuItem {
  id: string;
  label: string;
  href: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    id: 'home',
    label: 'Início',
    href: '/',
  },
  {
    id: 'about',
    label: 'Sobre',
    href: '/sobre',
  },
  {
    id: 'services',
    label: 'Serviços',
    href: '/servicos',
    children: [
      { id: 'seo', label: 'SEO', href: '/servicos/seo' },
      { id: 'design', label: 'Design', href: '/servicos/design' },
      { id: 'development', label: 'Desenvolvimento', href: '/servicos/desenvolvimento' },
      { id: 'marketing', label: 'Marketing Digital', href: '/servicos/marketing' },
    ],
  },
  {
    id: 'products',
    label: 'Produtos',
    href: '/produtos',
    children: [
      { id: 'product1', label: 'Produto 1', href: '/produtos/produto-1' },
      { id: 'product2', label: 'Produto 2', href: '/produtos/produto-2' },
      { id: 'product3', label: 'Produto 3', href: '/produtos/produto-3' },
    ],
  },
  {
    id: 'blog',
    label: 'Blog',
    href: '/blog',
  },
  {
    id: 'contact',
    label: 'Contato',
    href: '/contato',
  },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  // Cleanup timeout quando componente for desmontado
  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  // Controlar overflow do body quando menu mobile estiver aberto
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

  const handleDropdownEnter = (itemId: string) => {
    // Limpar timeout se existir
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(itemId);
  };

  const handleDropdownLeave = () => {
    // Adicionar delay antes de fechar o dropdown
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms de delay
    setDropdownTimeout(timeout);
  };

  const toggleMobileDropdown = (itemId: string) => {
    const newDropdowns = new Set(mobileDropdowns);
    if (newDropdowns.has(itemId)) {
      newDropdowns.delete(itemId);
    } else {
      newDropdowns.add(itemId);
    }
    setMobileDropdowns(newDropdowns);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileDropdowns(new Set());
  };

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary-600 text-white py-2">
        <div className="container-custom">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center space-x-1 hover:text-primary-200 transition-colors"
              >
                <Phone size={14} />
                <span>{contactInfo.phone}</span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-1 hover:text-primary-200 transition-colors"
              >
                <Mail size={14} />
                <span>{contactInfo.email}</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>{contactInfo.workingHours.weekdays}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
            : 'bg-white'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl lg:text-2xl font-bold text-gray-900">
                Sua Empresa
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(item.id)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
                  >
                    <span>{item.label}</span>
                    {item.children && <ChevronDown size={16} />}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.children && activeDropdown === item.id && (
                    <div 
                      className="absolute top-full left-0 w-64 z-50"
                      onMouseEnter={() => handleDropdownEnter(item.id)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      {/* Área de ponte invisível para evitar gap */}
                      <div className="h-2 bg-transparent"></div>
                      <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2 animate-slide-down">
                        {item.children.map((child) => (
                          <Link
                            key={child.id}
                            href={child.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Solicitar Orçamento
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={isMobileMenuOpen ? closeMobileMenu : openMobileMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Fora do header para evitar conflitos */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay de fundo */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm" 
            style={{ 
              zIndex: 999999,
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
          />
          {/* Menu lateral */}
          <div 
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl"
            style={{ 
              zIndex: 1000000,
              position: 'fixed',
              top: 0,
              right: 0,
              height: '100vh',
              width: '320px'
            }}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <span className="text-lg font-semibold text-gray-900">Menu</span>
              <button
                onClick={closeMobileMenu}
                className="p-2 text-gray-700 hover:text-primary-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="p-6">
              <div className="space-y-4">
                {menuItems.map((item) => (
                  <div key={item.id}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => toggleMobileDropdown(item.id)}
                          className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
                        >
                          <span>{item.label}</span>
                          <ChevronDown 
                            size={16} 
                            className={`transition-transform duration-200 ${
                              mobileDropdowns.has(item.id) ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        
                        {/* Mobile Submenu */}
                        {mobileDropdowns.has(item.id) && (
                          <div className="ml-4 mt-2 space-y-2 animate-slide-down">
                            {item.children.map((child) => (
                              <Link
                                key={child.id}
                                href={child.href}
                                onClick={closeMobileMenu}
                                className="block py-1 text-gray-600 hover:text-primary-600 transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="block py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="btn-primary w-full justify-center"
                >
                  Solicitar Orçamento
                </a>
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <Phone size={16} />
                  <span>{contactInfo.phone}</span>
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <Mail size={16} />
                  <span>{contactInfo.email}</span>
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
} 