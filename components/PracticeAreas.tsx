import React from 'react';
import { PRACTICE_AREAS } from '../constants';
import { ArrowRight } from 'lucide-react';
import FadeInSection from './ui/FadeInSection';

const PracticeAreas: React.FC = () => {
  return (
    <section id="atuacao" className="py-24 md:py-32 bg-grayLight">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeInSection>
            <span className="text-accent text-sm font-bold tracking-widest uppercase mb-2 block">Especialidades</span>
            <h2 className="font-serif text-4xl font-bold text-primary mb-6">Nossas Áreas de Atuação</h2>
            <p className="text-grayMedium text-lg">
              Oferecemos suporte jurídico completo, atuando de forma multidisciplinar para cobrir todas as necessidades dos nossos clientes.
            </p>
          </FadeInSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRACTICE_AREAS.map((area, index) => (
            <FadeInSection key={area.id} delay={`delay-${(index % 3) * 100}`}>
              <div className="group bg-white p-10 rounded-lg shadow-soft hover:shadow-card transition-all duration-300 border-t-2 border-transparent hover:border-accent relative h-full flex flex-col">
                <div className="mb-6 p-4 bg-primary/5 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <area.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" strokeWidth={1.5} />
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">{area.title}</h3>
                <p className="text-grayMedium mb-8 flex-grow leading-relaxed">
                  {area.description}
                </p>
                
                <a 
                  href="#contato" 
                  className="inline-flex items-center text-accent font-semibold text-sm tracking-wide group-hover:underline decoration-1 underline-offset-4"
                >
                  Saiba Mais <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;