import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import FadeInSection from './ui/FadeInSection';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', phone: '', area: '', message: '' });
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <FadeInSection>
            <span className="text-accent text-sm font-bold tracking-widest uppercase mb-2 block">Fale Conosco</span>
            <h2 className="font-serif text-4xl font-bold text-primary mb-8">Entre em Contato</h2>
            <p className="text-grayMedium text-lg mb-10">
              Estamos prontos para ouvir seu caso e oferecer a melhor orientação jurídica. Preencha o formulário ou utilize nossos canais diretos.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-primary/5 p-3 rounded-full text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-primary text-lg">Endereço</h4>
                  <p className="text-grayMedium">Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP, 01310-100</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="bg-primary/5 p-3 rounded-full text-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-primary text-lg">Telefone & WhatsApp</h4>
                  <p className="text-grayMedium">+55 (11) 3000-0000</p>
                  <p className="text-grayMedium">+55 (11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="bg-primary/5 p-3 rounded-full text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-primary text-lg">Email</h4>
                  <p className="text-grayMedium">contato@advocaciapremium.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                 <div className="bg-primary/5 p-3 rounded-full text-accent">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-primary text-lg">Horário de Atendimento</h4>
                  <p className="text-grayMedium">Segunda a Sexta: 09h às 18h</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-inner relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.145838042459!2d-46.65495572379361!3d-23.563205161661666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-80 hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
          </FadeInSection>

          {/* Form Side */}
          <FadeInSection delay="delay-100">
            <div className="bg-grayLight p-8 md:p-12 rounded-lg shadow-soft border-t-4 border-accent">
              <h3 className="font-serif text-2xl font-bold text-primary mb-6">Envie sua mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-white"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-white"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Telefone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-white"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Área de Interesse</label>
                  <select 
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-white"
                  >
                    <option value="" disabled>Selecione uma área</option>
                    <option value="civil">Direito Civil</option>
                    <option value="penal">Direito Penal</option>
                    <option value="trabalhista">Direito Trabalhista</option>
                    <option value="familia">Direito de Família</option>
                    <option value="empresarial">Empresarial</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Mensagem</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-white resize-none"
                    placeholder="Descreva brevemente seu caso..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-accent text-white font-bold text-lg rounded shadow-lg hover:bg-yellow-600 transition-all transform hover:-translate-y-1"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </FadeInSection>

        </div>
      </div>
    </section>
  );
};

export default Contact;