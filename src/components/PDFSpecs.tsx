'use client';

import { motion } from 'framer-motion';
import { useInViewSSR } from '@/lib/useInViewSSR';
import { FileText, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

export function PDFSpecs() {
  const [ref, inView] = useInViewSSR({
    triggerOnce: true,
    threshold: 0.1,
  });

  const requirements = [
    {
      icon: CheckCircle,
      title: 'Formato PDF',
      description: 'PDF/X ou PDF vetorial',
      required: true,
    },
    {
      icon: CheckCircle,
      title: 'Resolução',
      description: '300 DPI mínimo',
      required: true,
    },
    {
      icon: CheckCircle,
      title: 'Fundo Transparente',
      description: 'Sem fundo branco',
      required: true,
    },
    {
      icon: CheckCircle,
      title: 'Cores CMYK',
      description: 'Perfil de cor calibrado',
      required: true,
    },
    {
      icon: AlertCircle,
      title: 'White Underbase',
      description: 'Nós aplicamos automaticamente',
      required: false,
    },
    {
      icon: AlertCircle,
      title: 'Espelhado',
      description: 'Não necessário - aplicamos',
      required: false,
    },
  ];

  const dimensions = [
    { size: 'DTF OBRIGATÓRIO', width: '57cm', height: '100cm', required: true },
  ];

  return (
    <section id="especificacoes" className="py-24 bg-gradient-to-b from-dark-800 via-dark-900 to-dark-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffd700' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-3 bg-gold-500/10 border border-gold-500/20 rounded-full px-6 py-3 text-gold-400 text-sm font-medium mb-8"
          >
            <FileText className="w-5 h-5" />
            <span>Especificações Técnicas</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6"
          >
            <span className="text-white">PDF </span>
            <span className="gradient-text-gold">Pronto para Impressão</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-4 leading-relaxed px-2">
              Para garantir a melhor qualidade, seu arquivo deve seguir nossas especificações técnicas.
            </p>
            
            {/* Dimensão Obrigatória em Destaque */}
            <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 border-2 border-red-500/50 rounded-2xl p-4 mb-6 mx-2">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <AlertCircle className="w-6 h-6 text-red-400" />
                <h3 className="text-lg sm:text-xl font-bold text-red-300">Dimensão Obrigatória</h3>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">57cm × 100cm</div>
              <p className="text-sm text-red-200">Arquivos em outras dimensões não serão aceitos</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Grid de Requisitos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {requirements.map((req, index) => (
            <motion.div
              key={req.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className={`group relative bg-gradient-to-br ${
                req.required
                  ? 'from-green-500/10 to-green-600/10 border-green-500/30'
                  : 'from-blue-500/10 to-blue-600/10 border-blue-500/30'
              } backdrop-blur-sm border rounded-2xl p-6 hover:scale-105 transition-all duration-300`}
            >
              {/* Ícone */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                req.required
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-blue-500/20 text-blue-400'
              }`}>
                <req.icon className="w-6 h-6" />
              </div>

              {/* Conteúdo */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className={`text-lg font-bold ${
                    req.required ? 'text-green-300' : 'text-blue-300'
                  }`}>
                    {req.title}
                  </h4>
                  {req.required && (
                    <span className="text-xs bg-green-500/30 text-green-200 px-2 py-1 rounded-full font-medium">
                      OBRIGATÓRIO
                    </span>
                  )}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {req.description}
                </p>
              </div>

              {/* Efeito de brilho */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="relative"
        >
          <div className="relative bg-gradient-to-r from-gold-500/10 via-gold-600/10 to-gold-500/10 border border-gold-500/30 rounded-3xl p-6 sm:p-8 lg:p-12 overflow-hidden mx-2">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffd700' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <FileText className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
                PDF no Formato Correto?
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                Envie seu arquivo <span className="text-gold-300 font-bold">57cm × 100cm</span> e receba em até 24h 
                com a qualidade Hot Peel que você precisa.
              </p>

              <motion.a
                href="https://wa.me/5511919009112?text=Olá! Tenho o PDF pronto para impressão DTF no formato 57cm x 100cm. Seguindo todas as especificações técnicas."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-2xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Enviar PDF no WhatsApp</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
