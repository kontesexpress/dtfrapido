'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Calendar, Shield } from 'lucide-react';
import Link from 'next/link';

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800">
      {/* Header */}
      <div className="bg-dark-900/95 backdrop-blur-md border-b border-gold-500/20 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Link 
              href="/"
              className="flex items-center space-x-2 text-gold-400 hover:text-gold-300 transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Voltar ao site</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-dark-800/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-8 sm:p-12"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-3 bg-gold-500/10 border border-gold-500/20 rounded-full px-6 py-3 mb-6"
            >
              <FileText className="h-6 w-6 text-gold-500" />
              <span className="text-gold-400 font-semibold">Documento Legal</span>
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Termos de Uso
            </h1>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Última atualização: {new Date().toLocaleDateString('pt-BR')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Kontes Express</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Aceitação dos Termos</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Ao acessar e utilizar os serviços da Kontes Express, você concorda em cumprir 
                  e estar vinculado aos seguintes termos e condições de uso. Se você não concordar 
                  com qualquer parte destes termos, não deve utilizar nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Descrição dos Serviços</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  A Kontes Express oferece serviços de impressão DTF (Direct to Film) para 
                  personalização de produtos têxteis, incluindo:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Impressão DTF em camisetas, uniformes e produtos personalizados</li>
                  <li>Consultoria em design e personalização</li>
                  <li>Serviços de entrega e logística</li>
                  <li>Suporte técnico especializado</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Responsabilidades do Cliente</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  O cliente se compromete a:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Fornecer arquivos de qualidade adequada para impressão</li>
                  <li>Respeitar direitos autorais e propriedade intelectual</li>
                  <li>Efetuar pagamento conforme acordado</li>
                  <li>Informar dados corretos e atualizados</li>
                  <li>Não utilizar nossos serviços para fins ilegais ou inadequados</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Propriedade Intelectual</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Todos os direitos de propriedade intelectual relacionados aos nossos serviços, 
                  incluindo mas não limitado a designs, processos, tecnologias e materiais, 
                  pertencem exclusivamente à Kontes Express.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Limitações de Responsabilidade</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  A Kontes Express não se responsabiliza por:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Danos causados por uso inadequado dos produtos</li>
                  <li>Alterações de cor devido a características do tecido</li>
                  <li>Danos decorrentes de força maior</li>
                  <li>Perdas de lucros ou oportunidades de negócio</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Modificações dos Termos</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                  As alterações entrarão em vigor imediatamente após sua publicação no site. 
                  É responsabilidade do usuário verificar periodicamente os termos atualizados.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Contato</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Para questões relacionadas a estes termos, entre em contato conosco:
                </p>
                <div className="bg-gold-500/10 border border-gold-500/20 rounded-xl p-6">
                  <p className="text-gold-300 font-semibold mb-2">Kontes Express</p>
                  <p className="text-gray-300 text-sm">
                    📧 Email: kontesexpress@gmail.com<br/>
                    📱 WhatsApp: +55 (11) 91900-9112<br/>
                    📍 Endereço: R. Bresser, 601 - Brás, São Paulo - SP
                  </p>
                </div>
              </section>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

