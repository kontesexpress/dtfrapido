'use client';

import { motion } from 'framer-motion';
import { useInViewSSR } from '@/lib/useInViewSSR';
import { Check, Star, Zap, Crown } from 'lucide-react';

export function PriceTable() {
  const [ref, inView] = useInViewSSR({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans = [
    {
      name: 'Básico',
      price: 'R$ 15',
      unit: 'por peça',
      icon: Star,
      color: 'from-gray-500 to-gray-600',
      features: [
        'Até 10 peças',
        'Cores básicas',
        'Entrega em 3 dias',
        'Suporte por email',
      ],
      popular: false,
    },
    {
      name: 'Premium',
      price: 'R$ 12',
      unit: 'por peça',
      icon: Zap,
      color: 'from-gold-500 to-gold-600',
      features: [
        'Até 50 peças',
        'Cores vibrantes',
        'Entrega em 24h',
        'Suporte prioritário',
        'Revisão gratuita',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'R$ 8',
      unit: 'por peça',
      icon: Crown,
      color: 'from-purple-500 to-purple-600',
      features: [
        'Acima de 100 peças',
        'Cores premium',
        'Entrega expressa',
        'Suporte dedicado',
        'Revisões ilimitadas',
        'Desconto progressivo',
      ],
      popular: false,
    },
  ];

  return (
    <section id="precos" className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
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
            <span className="text-white">Preços </span>
            <span className="gradient-text-gold">Transparentes</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Escolha o plano ideal para suas necessidades. 
            Todos os preços incluem impressão DTF premium e acabamento profissional.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              className={`relative ${
                plan.popular ? 'md:scale-110 z-10' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 px-6 py-2 rounded-full font-bold text-sm">
                    Mais Popular
                  </div>
                </div>
              )}
              
              <div className={`bg-dark-800/50 backdrop-blur-sm border rounded-2xl p-8 h-full ${
                plan.popular 
                  ? 'border-gold-500/40 shadow-2xl shadow-gold-500/10' 
                  : 'border-gold-500/20 hover:border-gold-500/40'
              } transition-all duration-300 hover:transform hover:scale-105`}>
                <div className="text-center mb-8">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${plan.color} rounded-2xl mb-4`}>
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold gradient-text-gold">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 ml-2">
                      {plan.unit}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 1.2 + index * 0.2 + featureIndex * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <Check className="h-5 w-5 text-gold-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 hover:from-gold-400 hover:to-gold-500 shadow-xl hover:shadow-gold-500/25'
                      : 'border-2 border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-dark-900'
                  }`}
                >
                  {plan.popular ? 'Escolher Premium' : 'Escolher Plano'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-dark-800/30 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              💡 Precisa de um orçamento personalizado?
            </h3>
            <p className="text-gray-300 mb-6">
              Para projetos especiais ou grandes volumes, entre em contato conosco 
              para um orçamento personalizado com condições especiais.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 px-8 py-4 rounded-full font-bold text-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-xl hover:shadow-gold-500/25"
            >
              Solicitar Orçamento Personalizado
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

