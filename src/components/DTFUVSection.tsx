'use client';

import { motion } from 'framer-motion';
import { useInViewSSR } from '@/lib/useInViewSSR';
import { VideoPlayer } from './VideoPlayer';
import { Sun, Zap, Shield, Star, Sparkles, Award, Circle, Square, Triangle, Palette } from 'lucide-react';

export function DTFUVSection() {
  const [ref, inView] = useInViewSSR({
    triggerOnce: true,
    threshold: 0.1,
  });

  const uvFeatures = [
    {
      icon: Sun,
      title: 'Cura UV Instantânea',
      description: 'Secagem imediata com luz UV, eliminando tempo de espera.',
    },
    {
      icon: Sparkles,
      title: 'Brilho Premium',
      description: 'Acabamento com brilho metálico e efeitos especiais únicos.',
    },
    {
      icon: Shield,
      title: 'Durabilidade Extrema',
      description: 'Resistência superior a lavagens, sol e desgaste.',
    },
    {
      icon: Zap,
      title: 'Velocidade Máxima',
      description: 'Processo ultra-rápido para produção em larga escala.',
    },
  ];

  const uvAdvantages = [
    {
      icon: Star,
      title: 'Efeitos Especiais',
      description: 'Brilho metálico, holográfico e efeitos 3D únicos.',
    },
    {
      icon: Award,
      title: 'Qualidade Superior',
      description: 'Definição e nitidez incomparáveis em qualquer material.',
    },
  ];

  const rigidSurfaces = [
    {
      icon: Circle,
      title: 'Vidros',
      description: 'Copo, taças, espelhos e superfícies de vidro.',
    },
    {
      icon: Square,
      title: 'Cerâmicas',
      description: 'Xícaras, pratos, azulejos e objetos cerâmicos.',
    },
    {
      icon: Triangle,
      title: 'Madeira',
      description: 'Móveis, decorações e objetos de madeira.',
    },
    {
      icon: Palette,
      title: 'E Muito Mais',
      description: 'Metal, plástico, acrílico e outras superfícies rígidas.',
    },
  ];

  return (
    <section id="dtfuv" className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
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
            <span className="text-white">DTF UV </span>
            <span className="gradient-text-gold">Premium</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            A evolução da impressão DTF com tecnologia UV. 
            <span className="text-gold-400 font-semibold"> Cura instantânea</span>, 
            <span className="text-gold-400 font-semibold"> efeitos especiais</span> e 
            <span className="text-gold-400 font-semibold"> durabilidade extrema</span> para projetos premium.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="inline-flex items-center px-6 py-3 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-400 font-semibold"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Tecnologia de Ponta Disponível
          </motion.div>
        </motion.div>

        {/* Características DTF UV */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {/* Destaque visual DTF UV */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="md:col-span-2 lg:col-span-1 lg:row-span-2 bg-dark-800/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl overflow-hidden"
          >
            <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px]">
              <VideoPlayer
                src="/videos/DtfUV.mp4"
                className="w-full h-full object-cover"
                autoPlay={true}
                loop={true}
                muted={true}
                controls={true}
                lazy={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                <div className="bg-gold-500/20 backdrop-blur-sm rounded-lg p-4 border border-gold-500/30">
                  <h3 className="text-lg font-bold text-gold-300 mb-2">DTF UV Premium</h3>
                  <p className="text-sm text-gray-300">
                    Tecnologia de ponta com cura UV instantânea e efeitos especiais únicos
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {uvFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
              className="group bg-dark-800/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-6 hover:border-gold-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center space-y-4 h-full">
                <div className="p-4 bg-gold-500/10 rounded-full group-hover:bg-gold-500/20 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-gold-500 group-hover:text-gold-400 transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Vantagens Especiais */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {uvAdvantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
              className="bg-gradient-to-r from-gold-500/5 to-gold-500/10 border border-gold-500/30 rounded-2xl p-8"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gold-500/20 rounded-full">
                  <advantage.icon className="h-6 w-6 text-gold-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Superfícies Rígidas */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-20"
        >
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            <span className="text-white">Personalize </span>
            <span className="gradient-text-gold">Qualquer Superfície Rígida</span>
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 2.2 }}
            className="text-xl text-gray-300 text-center mb-12 max-w-4xl mx-auto"
          >
            Com DTF UV, expandimos as possibilidades além dos tecidos. 
            <span className="text-gold-400 font-semibold"> Vidros, cerâmicas, madeira, metal</span> e muito mais!
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rigidSurfaces.map((surface, index) => (
              <motion.div
                key={surface.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2.4 + index * 0.1 }}
                className="group bg-dark-800/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-6 hover:border-gold-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-gold-500/10 rounded-full group-hover:bg-gold-500/20 transition-colors duration-300">
                    <surface.icon className="h-8 w-8 text-gold-500 group-hover:text-gold-400 transition-colors duration-300" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-white group-hover:text-gold-400 transition-colors duration-300">
                    {surface.title}
                  </h4>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm">
                    {surface.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gold-500/10 via-gold-500/5 to-gold-500/10 border border-gold-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para experimentar o futuro da impressão?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Solicite um orçamento para DTF UV e descubra a diferença que a tecnologia de ponta pode fazer no seu projeto.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-gold-500/25"
            >
              Solicitar Orçamento DTF UV
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
