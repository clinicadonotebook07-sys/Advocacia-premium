import React from 'react';
import { TEAM } from '../constants';
import FadeInSection from './ui/FadeInSection';

const Team: React.FC = () => {
  return (
    <section id="equipe" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-[1280px]">
         <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeInSection>
            <span className="text-accent text-sm font-bold tracking-widest uppercase mb-2 block">Profissionais</span>
            <h2 className="font-serif text-4xl font-bold text-primary mb-6">Nossa Equipe</h2>
            <p className="text-grayMedium text-lg">
              Advogados altamente qualificados e reconhecidos em suas áreas de atuação.
            </p>
          </FadeInSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TEAM.map((member, index) => (
             <FadeInSection key={member.id} delay={`delay-${index * 100}`}>
              <div className="group relative">
                <div className="aspect-[3/4] overflow-hidden rounded-lg mb-6 bg-gray-100">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-serif text-2xl font-bold text-primary">{member.name}</h3>
                  <p className="text-accent font-medium text-sm mb-1 uppercase tracking-wide">{member.role}</p>
                  <p className="text-xs text-gray-400 mb-4">{member.oab}</p>
                  <p className="text-grayMedium leading-relaxed text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;