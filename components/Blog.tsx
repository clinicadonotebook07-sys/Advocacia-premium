import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar } from 'lucide-react';
import FadeInSection from './ui/FadeInSection';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 md:py-32 bg-grayLight">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="flex justify-between items-end mb-12">
           <div className="max-w-2xl">
              <FadeInSection>
                <span className="text-accent text-sm font-bold tracking-widest uppercase mb-2 block">Atualizações</span>
                <h2 className="font-serif text-4xl font-bold text-primary">Notícias e Artigos</h2>
              </FadeInSection>
           </div>
           <FadeInSection delay="delay-100">
             <a href="#" className="hidden md:block text-primary font-semibold border-b-2 border-accent hover:text-accent transition-colors pb-1">Ver todos os artigos</a>
           </FadeInSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <FadeInSection key={post.id} delay={`delay-${index * 100}`}>
              <article className="bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 group cursor-pointer h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-primary uppercase tracking-wide">
                    Artigo
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-grayMedium text-sm leading-relaxed mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <span className="text-accent text-sm font-bold uppercase tracking-wide group-hover:underline">Ler artigo</span>
                </div>
              </article>
            </FadeInSection>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <a href="#" className="text-primary font-semibold border-b-2 border-accent hover:text-accent transition-colors pb-1">Ver todos os artigos</a>
        </div>
      </div>
    </section>
  );
};

export default Blog;