'use client';

import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Twitter,
  ArrowUp
} from 'lucide-react';
import { contactInfo, socialMedia, getFullAddress, getWorkingHours } from '@/data';

const socialIcons: Record<string, any> = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  twitter: Twitter,
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold">Sua Empresa</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialistas em marketing digital, SEO, design e desenvolvimento web. 
              Transformamos sua presença online com estratégias inovadoras.
            </p>
            <div className="flex space-x-4">
              {socialMedia.map((social) => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                if (!Icon) return null;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-300 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="text-gray-300 hover:text-white transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nossos Serviços</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/servicos/seo" className="text-gray-300 hover:text-white transition-colors">
                  SEO
                </Link>
              </li>
              <li>
                <Link href="/servicos/design" className="text-gray-300 hover:text-white transition-colors">
                  Design
                </Link>
              </li>
              <li>
                <Link href="/servicos/desenvolvimento" className="text-gray-300 hover:text-white transition-colors">
                  Desenvolvimento Web
                </Link>
              </li>
              <li>
                <Link href="/servicos/marketing" className="text-gray-300 hover:text-white transition-colors">
                  Marketing Digital
                </Link>
              </li>
              <li>
                <Link href="/servicos/social-media" className="text-gray-300 hover:text-white transition-colors">
                  Mídia Social
                </Link>
              </li>
              <li>
                <Link href="/servicos/consultoria" className="text-gray-300 hover:text-white transition-colors">
                  Consultoria
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Telefone</p>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-white hover:text-primary-400 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-white hover:text-primary-400 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Endereço</p>
                  <p className="text-white text-sm leading-relaxed">
                    {getFullAddress()}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Horário de Funcionamento</p>
                  <p className="text-white text-sm leading-relaxed">
                    {getWorkingHours()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/politica-privacidade" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos-uso" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </Link>
              <Link href="/mapa-site" className="text-gray-400 hover:text-white transition-colors">
                Mapa do Site
              </Link>
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors duration-200"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
} 