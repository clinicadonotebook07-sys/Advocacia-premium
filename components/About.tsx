import React from 'react';
import { ShieldCheck, Users, TrendingUp, Lock } from 'lucide-react';
import FadeInSection from './ui/FadeInSection';

const features = [
  {
    icon: ShieldCheck,
    title: "+10 Anos de Experiência",
    description: "Uma década de atuação sólida, garantindo expertise em casos de alta complexidade."
  },
  {
    icon: Users,
    title: "Atendimento Humanizado",
    description: "Entendemos que por trás de cada processo existem pessoas e histórias que merecem respeito."
  },
  {
    icon: TrendingUp,
    title: "Estratégia Personalizada",
    description: "Não acreditamos em fórmulas prontas. Cada caso recebe um planejamento jurídico único."
  },
  {
    icon: Lock,
    title: "Sigilo e Ética",
    description: "Compromisso absoluto com a confidencialidade e os valores éticos da advocacia."
  }
];

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
             <FadeInSection>
               <div className="relative">
                 {/* Decorative border */}
                 <div className="absolute top-4 left-4 w-full h-full border-2 border-accent/30 rounded-lg -z-0 translate-x-4 translate-y-4"></div>
                 <img 
                   src="https://picsum.photos/id/1075/600/700" 
                   alt="Interior do escritório" 
                   className="rounded-lg shadow-card relative z-10 w-full object-cover"
                 />
               </div>
             </FadeInSection>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <FadeInSection delay="delay-100">
              <span className="text-accent text-sm font-bold tracking-widest uppercase mb-2 block">Sobre Nós</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8">
                Comprometidos com a Justiça e com Você
              </h2>
              
              <div className="space-y-6 text-grayMedium text-lg leading-relaxed font-light">
                <p>
                  Fundado com a missão de redefinir a advocacia moderna, nosso escritório combina tradição jurídica com uma abordagem inovadora e ágil. Acreditamos que a excelência técnica deve caminhar lado a lado com a clareza na comunicação.
                </p>
                <p>
                  Nossa equipe é formada por especialistas dedicados que buscam incansavelmente as melhores soluções para cada cliente, seja na esfera consultiva ou contenciosa.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex flex-col gap-3">
                    <feature.icon className="text-accent w-8 h-8" strokeWidth={1.5} />
                    <h3 className="font-serif font-bold text-primary text-xl">{feature.title}</h3>
                    <p className="text-sm text-grayMedium leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;