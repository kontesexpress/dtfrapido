'use client';

import { motion } from 'framer-motion';
import { useInViewSSR } from '@/lib/useInViewSSR';
import { MapPin, Clock, Users, Award } from 'lucide-react';
import Image from 'next/image';

export function AboutSection() {
  const [ref, inView] = useInViewSSR({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: MapPin,
      title: 'Localização Estratégica',
      description: 'Localizados no Brás, coração comercial de São Paulo',
    },
    {
      icon: Clock,
      title: 'Atendimento Rápido',
      description: 'Entrega em até 24 horas úteis para pedidos urgentes',
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais experientes em impressão DTF',
    },
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description: 'Tecnologia de ponta e materiais premium',
    },
  ];

  return (
    <section id="sobre-empresa" className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="text-white">Sobre a </span>
            <span className="gradient-text-gold">Kontes Express</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Mais de uma década de experiência em impressão têxtil, 
            oferecendo soluções personalizadas com tecnologia DTF de última geração.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center px-4">
          {/* Imagem da Fachada */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Fachada_kontes.webp"
                alt="Fachada da Kontes Express"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                <div className="bg-dark-900/80 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                  <h3 className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2">Kontes Express</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    R. Bresser, 601 - Brás, São Paulo - SP
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Nossa História
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                A Kontes Express nasceu da paixão por transformar ideias em realidade. 
                Com mais de 10 anos de experiência no mercado têxtil, nos especializamos 
                em impressão DTF de alta qualidade, atendendo desde pequenos empreendedores 
                até grandes empresas.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Nossa missão é democratizar o acesso à personalização têxtil, oferecendo 
                tecnologia de ponta com preços justos e atendimento personalizado.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="bg-dark-800/50 backdrop-blur-sm border border-gold-500/20 rounded-xl p-3 sm:p-4 hover:border-gold-500/40 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gold-500/10 rounded-lg">
                      <feature.icon className="h-5 w-5 text-gold-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-xs sm:text-sm">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 text-xs">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="pt-6"
            >
              <div className="bg-gradient-to-r from-gold-500/10 to-gold-600/10 border border-gold-500/20 rounded-xl p-4 sm:p-6">
                <h4 className="text-white font-bold text-base sm:text-lg mb-2">
                  Visite Nossa Loja
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm mb-4">
                  Venha conhecer nossa estrutura e conversar com nossa equipe especializada.
                </p>
                <a
                  href="https://www.google.com/maps/dir/-23.6486656,-46.6845696/R.+Bresser,+601+-+Br%C3%A1s,+S%C3%A3o+Paulo+-+SP,+03017-000/@-23.5912114,-46.6891224,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94ce592fd3a9d4df:0xdd62b5ee2d7023f9!2m2!1d-46.609934!2d-23.5358339?hl=en-GB&authuser=0&entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-gold-500 text-dark-900 px-4 py-2 rounded-lg font-semibold hover:bg-gold-400 transition-colors duration-300 w-full sm:w-auto touch-manipulation"
                >
                  <MapPin className="h-4 w-4" />
                  <span>Como Chegar</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}