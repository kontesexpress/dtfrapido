'use client';

import { motion } from 'framer-motion';
import { useInViewSSR } from '@/lib/useInViewSSR';
import { VideoPlayer } from './VideoPlayer';
import { Zap, Palette, Shield, Clock, ArrowRight } from 'lucide-react';

export function WhatIsDTF() {
  const [ref, inView] = useInViewSSR({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Zap,
      title: 'Transferência Direta',
      description: 'Aplicação direta na peça sem necessidade de papel transfer.',
    },
    {
      icon: Palette,
      title: 'Cores Vibrantes',
      description: 'Tecnologia que preserva a intensidade e brilho das cores.',
    },
    {
      icon: Shield,
      title: 'Durabilidade Superior',
      description: 'Resistente a lavagens e desgaste, mantendo a qualidade.',
    },
    {
      icon: Clock,
      title: 'Processo Rápido',
      description: 'Remoção imediata do filme sem tempo de resfriamento, acelerando a produção.',
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
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
            <span className="text-white">O que é </span>
            <span className="gradient-text-gold">DTF Premium?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            DTF (Direct to Film) é a tecnologia mais avançada em impressão têxtil, 
            oferecendo qualidade superior, durabilidade excepcional e versatilidade 
            incomparável para personalização de roupas e acessórios.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              className="group bg-dark-800/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-6 hover:border-gold-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-gold-500/10 rounded-full group-hover:bg-gold-500/20 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-gold-500 group-hover:text-gold-400 transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Processo DTF */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-white">Como funciona o </span>
            <span className="gradient-text-gold">processo DTF?</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Vídeo do Processo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <VideoPlayer
                  src="/videos/Impressao.mp4"
                  className="aspect-video"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  controls={true}
                  lazy={true}
                />
                
                {/* Overlay com informações */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-gold-500/20 backdrop-blur-sm rounded-lg p-4 border border-gold-500/30">
                    <h4 className="text-lg font-bold text-gold-300 mb-2">Processo de Impressão DTF</h4>
                    <p className="text-sm text-gray-300">
                      Máquina imprimindo sua arte em filme especial com alta qualidade
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Passos do Processo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="order-1 lg:order-2 space-y-6"
            >
              {[
                {
                  step: '01',
                  title: 'Impressão',
                  description: 'Sua arte é impressa em filme especial com tinta DTF de alta qualidade.',
                  icon: Palette,
                },
                {
                  step: '02',
                  title: 'Aplicação',
                  description: 'O filme é aplicado diretamente na peça com temperatura e pressão controladas.',
                  icon: Zap,
                },
                {
                  step: '03',
                  title: 'Hot Peel',
                  description: 'O filme é removido imediatamente ainda quente, revelando sua estampa perfeita.',
                  icon: Clock,
                },
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                  className="flex items-start space-x-4 p-6 bg-dark-800/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl hover:border-gold-500/40 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-gold-500" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl font-bold gradient-text-gold">
                        {step.step}
                      </span>
                      <h4 className="text-xl font-bold text-white">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {index < 2 && (
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                      <ArrowRight className="w-5 h-5 text-gold-500 rotate-90" />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

