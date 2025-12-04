import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
             <div className="flex items-center">
                <a href="#" className="text-2xl font-serif font-bold tracking-tight text-white">
                  Advocacia<span className="text-accent">.</span>
                </a>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Excelência jurídica com transparência e resultados. Atuamos de forma estratégica para defender seus direitos e patrimônio.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 border-b border-accent/30 pb-2 inline-block">Menu Rápido</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-accent transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 border-b border-accent/30 pb-2 inline-block">Áreas de Atuação</h4>
             <ul className="space-y-3 text-gray-300 text-sm">
               <li>Direito Civil</li>
               <li>Direito Empresarial</li>
               <li>Direito Trabalhista</li>
               <li>Direito de Família</li>
               <li>Direito Penal</li>
             </ul>
          </div>

          {/* Contact Small */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 border-b border-accent/30 pb-2 inline-block">Contato</h4>
             <ul className="space-y-3 text-gray-300 text-sm">
               <li>Av. Paulista, 1000</li>
               <li>Bela Vista - SP</li>
               <li>(11) 3000-0000</li>
               <li>contato@advocaciapremium.com</li>
             </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Advocacia Premium. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;