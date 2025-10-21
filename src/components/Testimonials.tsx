'use client';

import { motion } from 'framer-motion';
import { useInViewSSR } from '@/lib/useInViewSSR';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Testimonials() {
  const [ref, inView] = useInViewSSR({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      role: 'Empresária',
      company: 'Moda & Estilo',
      rating: 5,
      text: 'Excelente qualidade! As estampas ficaram perfeitas e a durabilidade é impressionante. Recomendo para todos que buscam qualidade premium.',
      avatar: '/images/avatars/maria.jpg',
    },
    {
      id: 2,
      name: 'João Santos',
      role: 'Designer',
      company: 'Studio Criativo',
      rating: 5,
      text: 'A tecnologia DTF superou todas as minhas expectativas. Cores vibrantes e acabamento impecável. Parceria de longa data!',
      avatar: '/images/avatars/joao.jpg',
    },
    {
      id: 3,
      name: 'Ana Costa',
      role: 'Gerente de Marketing',
      company: 'Tech Solutions',
      rating: 5,
      text: 'Entrega rápida e qualidade excepcional. Nossos clientes ficaram encantados com o resultado. Definitivamente nossa escolha!',
      avatar: '/images/avatars/ana.jpg',
    },
    {
      id: 4,
      name: 'Carlos Oliveira',
      role: 'Fundador',
      company: 'Startup Inovadora',
      rating: 5,
      text: 'Serviço profissional do início ao fim. A equipe entendeu perfeitamente nossa visão e entregou além do esperado.',
      avatar: '/images/avatars/carlos.jpg',
    },
    {
      id: 5,
      name: 'Fernanda Lima',
      role: 'Produtora de Eventos',
      company: 'Eventos Premium',
      rating: 5,
      text: 'Para nossos eventos corporativos, precisamos de qualidade e pontualidade. A Kontes Express sempre entrega os dois!',
      avatar: '/images/avatars/fernanda.jpg',
    },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            <span className="text-white">O que nossos </span>
            <span className="gradient-text-gold">clientes dizem</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            A satisfação dos nossos clientes é nossa maior recompensa. 
            Veja alguns depoimentos de quem já experimentou a qualidade DTF.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-dark-800/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-8 lg:p-12 text-center">
                      {/* Quote icon */}
                      <div className="mb-6">
                        <Quote className="h-12 w-12 text-gold-500 mx-auto" />
                      </div>

                      {/* Testimonial text */}
                      <blockquote className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                        "{testimonial.text}"
                      </blockquote>

                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-6 w-6 text-gold-500 fill-current"
                          />
                        ))}
                      </div>

                      {/* Author info */}
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mb-4">
                          <span className="text-dark-900 font-bold text-xl">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-gold-400 font-medium">
                          {testimonial.role}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-gold-500 scale-125'
                    : 'bg-gold-500/30 hover:bg-gold-500/50'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {[
            { number: '500+', label: 'Clientes Satisfeitos' },
            { number: '4.9/5', label: 'Avaliação Média' },
            { number: '98%', label: 'Taxa de Recomendação' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
              className="text-center bg-dark-800/30 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-6"
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text-gold mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

