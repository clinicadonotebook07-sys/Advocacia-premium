import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';
import FadeInSection from './ui/FadeInSection';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
        <div className="text-center mb-16">
           <FadeInSection>
            <h2 className="font-serif text-4xl font-bold mb-4">O Que Dizem Nossos Clientes</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
           </FadeInSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
             <FadeInSection key={t.id} delay={`delay-${index * 100}`}>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-accent/50 transition-colors duration-300">
                <div className="flex gap-1 mb-6 text-accent">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <Quote className="text-accent/30 w-10 h-10 mb-4" />
                <p className="text-gray-300 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-serif font-bold text-white text-lg">{t.author}</p>
                  <p className="text-accent text-sm">{t.role}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;