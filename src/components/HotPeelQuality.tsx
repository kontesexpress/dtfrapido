'use client';

import { motion } from 'framer-motion';
import { useInViewSSR } from '@/lib/useInViewSSR';
import { VideoPlayer } from './VideoPlayer';
import { Zap, Award, CheckCircle } from 'lucide-react';

export function HotPeelQuality() {
  const [ref, inView] = useInViewSSR({
    triggerOnce: true,
    threshold: 0.1,
  });

  const qualityFeatures = [
    {
      icon: Zap,
      title: 'Hot Peel Real',
      description: 'Retirada ainda quente da máquina',
      highlight: true,
    },
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: 'Cores vibrantes e durabilidade superior',
    },
    {
      icon: CheckCircle,
      title: 'Consistência de Lote',
      description: 'Mesma qualidade em todas as peças',
    },
  ];

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
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="text-white">Qualidade </span>
            <span className="gradient-text-gold">Hot Peel</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Nossa tecnologia permite retirada ainda quente da máquina, 
            garantindo acabamento perfeito e cores vibrantes.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Vídeo Hot Peel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <VideoPlayer
                src="/videos/HotPeel.mp4"
                className="aspect-video"
                autoPlay={true}
                loop={true}
                muted={true}
                controls={false}
              />
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-400">
                Vídeo: Retirada Hot Peel em tempo real
              </p>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-8"
          >
            {qualityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                className={`flex items-start space-x-4 p-6 rounded-xl transition-all duration-300 ${
                  feature.highlight
                    ? 'bg-gradient-to-r from-gold-500/10 to-gold-600/10 border-2 border-gold-500/30 hover:border-gold-500/50'
                    : 'bg-dark-800/50 border border-gold-500/20 hover:border-gold-500/40'
                }`}
              >
                <div className={`p-3 rounded-full ${
                  feature.highlight
                    ? 'bg-gold-500/20'
                    : 'bg-gold-500/10'
                }`}>
                  <feature.icon className={`w-6 h-6 ${
                    feature.highlight
                      ? 'text-gold-400'
                      : 'text-gold-500'
                  }`} />
                </div>
                
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${
                    feature.highlight
                      ? 'text-gold-300'
                      : 'text-white'
                  }`}>
                    {feature.title}
                    {feature.highlight && (
                      <span className="ml-2 text-sm bg-gold-500/20 text-gold-400 px-2 py-1 rounded-full">
                        DIFERENCIAL
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="pt-6"
            >
              <div className="bg-gradient-to-r from-gold-500/10 to-gold-600/10 border border-gold-500/30 rounded-xl p-6 text-center">
                <h4 className="text-lg font-bold text-gold-300 mb-2">
                  Pronto para experimentar?
                </h4>
                <p className="text-gray-300 mb-4">
                  Envie seu PDF pronto e veja a qualidade Hot Peel na prática
                </p>
                <a
                  href="https://wa.me/5511919009112?text=Olá! Gostaria de solicitar impressão DTF com Hot Peel. Tenho o PDF pronto para envio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold transition-colors duration-300"
                >
                  <span>Enviar PDF no WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

