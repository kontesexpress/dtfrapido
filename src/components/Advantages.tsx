'use client';

import { motion } from 'framer-motion';
import { useInViewSSR } from '@/lib/useInViewSSR';
import { 
  Award, 
  Zap, 
  Shield, 
  Palette, 
  Clock, 
  DollarSign,
  Target,
  Heart
} from 'lucide-react';

export function Advantages() {
  const [ref, inView] = useInViewSSR({
    triggerOnce: true,
    threshold: 0.1,
  });

  const advantages = [
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: 'Resultados profissionais com acabamento impecável e durabilidade superior.',
      color: 'from-gold-500 to-gold-600',
    },
    {
      icon: Zap,
      title: 'Velocidade de Produção',
      description: 'Processo otimizado que entrega seus pedidos em tempo recorde.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Shield,
      title: 'Durabilidade Excepcional',
      description: 'Resistente a lavagens, desgaste e condições adversas.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Palette,
      title: 'Cores Vibrantes',
      description: 'Tecnologia que preserva a intensidade e brilho das cores originais.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Clock,
      title: 'Entrega Rápida',
      description: 'Produção eficiente com prazos que respeitam sua urgência.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: DollarSign,
      title: 'Custo-Benefício',
      description: 'Preços competitivos sem comprometer a qualidade do resultado.',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Target,
      title: 'Precisão Técnica',
      description: 'Detalhes perfeitos e alinhamento preciso em cada estampa.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Heart,
      title: 'Satisfação Garantida',
      description: 'Compromisso total com a qualidade e satisfação do cliente.',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  return (
    <section id="vantagens" className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
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
            <span className="text-white">Vantagens da </span>
            <span className="gradient-text-gold">Tecnologia DTF</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Descubra por que a tecnologia DTF é a escolha preferida para 
            personalização de alta qualidade e durabilidade excepcional.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="group relative"
            >
              <div className="bg-dark-800/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-6 h-full hover:border-gold-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-gold-500/10">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 bg-gradient-to-br ${advantage.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <advantage.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-gold-400 transition-colors duration-300">
                      {advantage.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gold-500/10 to-gold-600/10 border border-gold-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para experimentar a qualidade DTF?
            </h3>
            <p className="text-gray-300 mb-4">
              Preço fixo: R$ 60,00 por metro de DTF. Envie seu arquivo PDF e receba em até 24h.
            </p>
            <p className="text-gold-400 font-semibold mb-6">
              Tecnologia de ponta para estampas personalizadas de alta qualidade.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-xl hover:shadow-green-500/25"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    const message = encodeURIComponent(
                      'Olá! Vim pelo site DTF Rápido e gostaria de solicitar um orçamento para impressão DTF.'
                    );
                    window.open(`https://wa.me/5511919009112?text=${message}`, '_blank');
                  }
                }}
              >
                WhatsApp - Mais Rápido
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 px-8 py-4 rounded-full font-bold text-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-xl hover:shadow-gold-500/25"
              >
                Solicitar Impressão DTF
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

