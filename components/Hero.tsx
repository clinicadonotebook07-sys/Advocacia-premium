import React from 'react';
import FadeInSection from './ui/FadeInSection';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center bg-primary overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: 'url(https://picsum.photos/id/1033/1920/1080)' }} // Using an urban/architecture feel
      ></div>
      
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary via-primary/80 to-primary/40"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 max-w-[1280px]">
        <div className="max-w-3xl">
          <FadeInSection>
            <div className="inline-block px-3 py-1 mb-6 border border-accent/30 rounded-full bg-primary/40 backdrop-blur-sm">
                <span className="text-accent text-xs font-semibold tracking-widest uppercase">Direito de Excelência</span>
            </div>
            
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-7xl text-white leading-tight mb-6">
              Excelência Jurídica com <span className="text-accent">Transparência</span> e Resultados.
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl">
              Atuação estratégica e especializada para defender seus direitos. Oferecemos soluções jurídicas personalizadas com ética e comprometimento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contato" 
                className="px-8 py-4 bg-accent text-white font-semibold rounded hover:bg-yellow-600 transition-all shadow-lg shadow-accent/30 text-center"
              >
                Agendar Consulta
              </a>
              <a 
                href="#atuacao" 
                className="px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded hover:bg-white/10 transition-all text-center backdrop-blur-sm"
              >
                Conheça Nossas Áreas
              </a>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;