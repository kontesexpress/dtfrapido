'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Scale, Calendar, Shield, Users, FileText } from 'lucide-react';
import Link from 'next/link';

export default function LGPDPage() {
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
              <Scale className="h-6 w-6 text-gold-500" />
              <span className="text-gold-400 font-semibold">Conformidade LGPD</span>
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Lei Geral de Proteção de Dados
            </h1>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Última atualização: {new Date().toLocaleDateString('pt-BR')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Lei 13.709/2018</span>
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
                <h2 className="text-2xl font-bold text-white mb-4">1. Sobre a LGPD</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  A Lei Geral de Proteção de Dados (Lei 13.709/2018) é a legislação brasileira 
                  que regula o tratamento de dados pessoais. A Kontes Express está totalmente 
                  em conformidade com a LGPD, garantindo a proteção e privacidade dos dados 
                  de nossos clientes e usuários.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Princípios da LGPD</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Seguimos rigorosamente os princípios estabelecidos pela LGPD:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gold-500/10 border border-gold-500/20 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gold-400 mb-3">🎯 Finalidade</h3>
                    <p className="text-gray-300 text-sm">
                      Tratamos dados apenas para finalidades específicas, explícitas e legítimas.
                    </p>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-blue-400 mb-3">⚖️ Adequação</h3>
                    <p className="text-gray-300 text-sm">
                      O tratamento é compatível com as finalidades informadas ao titular.
                    </p>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-green-400 mb-3">📊 Necessidade</h3>
                    <p className="text-gray-300 text-sm">
                      Limitamos o tratamento ao mínimo necessário para as finalidades.
                    </p>
                  </div>

                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-purple-400 mb-3">🔍 Transparência</h3>
                    <p className="text-gray-300 text-sm">
                      Garantimos informações claras sobre o tratamento de dados.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Direitos dos Titulares</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Você, como titular de dados pessoais, possui os seguintes direitos:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-dark-700/50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-3">🔍 Direito de Acesso</h3>
                    <p className="text-gray-300 text-sm">
                      Solicitar informações sobre o tratamento de seus dados pessoais, 
                      incluindo finalidade, duração, responsáveis e compartilhamento.
                    </p>
                  </div>

                  <div className="bg-dark-700/50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-3">✏️ Direito de Retificação</h3>
                    <p className="text-gray-300 text-sm">
                      Corrigir dados incompletos, inexatos ou desatualizados, 
                      garantindo a veracidade das informações.
                    </p>
                  </div>

                  <div className="bg-dark-700/50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-3">🗑️ Direito de Exclusão</h3>
                    <p className="text-gray-300 text-sm">
                      Solicitar a eliminação de dados desnecessários, excessivos 
                      ou tratados em desconformidade com a LGPD.
                    </p>
                  </div>

                  <div className="bg-dark-700/50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-3">📤 Direito de Portabilidade</h3>
                    <p className="text-gray-300 text-sm">
                      Solicitar a portabilidade de seus dados para outro fornecedor 
                      de serviços, quando tecnicamente viável.
                    </p>
                  </div>

                  <div className="bg-dark-700/50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-3">🚫 Direito de Oposição</h3>
                    <p className="text-gray-300 text-sm">
                      Opor-se ao tratamento de dados pessoais em casos de 
                      descumprimento da LGPD ou para finalidades diferentes.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Base Legal para Tratamento</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  O tratamento de dados pessoais pela Kontes Express é baseado em:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gold-500/10 border border-gold-500/20 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gold-400 mb-3">✅ Consentimento</h3>
                    <p className="text-gray-300 text-sm">
                      Para comunicações de marketing, newsletters e ofertas promocionais.
                    </p>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-blue-400 mb-3">📋 Execução de Contrato</h3>
                    <p className="text-gray-300 text-sm">
                      Para prestação de serviços de impressão DTF e cumprimento de obrigações contratuais.
                    </p>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-green-400 mb-3">⚖️ Obrigação Legal</h3>
                    <p className="text-gray-300 text-sm">
                      Para cumprimento de obrigações legais, fiscais e regulamentares.
                    </p>
                  </div>

                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-purple-400 mb-3">🎯 Legítimo Interesse</h3>
                    <p className="text-gray-300 text-sm">
                      Para melhoria de serviços, segurança e prevenção de fraudes.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Encarregado de Dados (DPO)</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Nomeamos um Encarregado de Proteção de Dados (DPO) para garantir 
                  o cumprimento da LGPD e atender às solicitações dos titulares:
                </p>
                
                <div className="bg-gold-500/10 border border-gold-500/20 rounded-xl p-6">
                  <h3 className="text-gold-300 font-bold mb-4">👤 Encarregado de Dados (DPO)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-300 text-sm mb-2">
                        <strong>📧 Email:</strong> privacidade@kontesexpress.com
                      </p>
                      <p className="text-gray-300 text-sm mb-2">
                        <strong>📱 WhatsApp:</strong> +55 (11) 91900-9112
                      </p>
                      <p className="text-gray-300 text-sm">
                        <strong>📍 Endereço:</strong> R. Bresser, 601 - Brás, São Paulo - SP
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm mb-2">
                        <strong>⏰ Horário:</strong> Segunda a Sexta, 9h às 18h
                      </p>
                      <p className="text-gray-300 text-sm mb-2">
                        <strong>📋 Prazo de Resposta:</strong> Até 15 dias úteis
                      </p>
                      <p className="text-gray-300 text-sm">
                        <strong>🔒 Confidencialidade:</strong> Totalmente garantida
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Medidas de Segurança</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Implementamos medidas técnicas e organizacionais para proteger seus dados:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-dark-700/50 rounded-xl p-4">
                      <h3 className="text-lg font-bold text-white mb-2">🔐 Criptografia</h3>
                      <p className="text-gray-300 text-sm">
                        Dados sensíveis são criptografados em trânsito e em repouso.
                      </p>
                    </div>
                    
                    <div className="bg-dark-700/50 rounded-xl p-4">
                      <h3 className="text-lg font-bold text-white mb-2">🛡️ Controle de Acesso</h3>
                      <p className="text-gray-300 text-sm">
                        Acesso restrito apenas a pessoal autorizado e treinado.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-dark-700/50 rounded-xl p-4">
                      <h3 className="text-lg font-bold text-white mb-2">📊 Monitoramento</h3>
                      <p className="text-gray-300 text-sm">
                        Monitoramento 24/7 de tentativas de acesso não autorizado.
                      </p>
                    </div>
                    
                    <div className="bg-dark-700/50 rounded-xl p-4">
                      <h3 className="text-lg font-bold text-white mb-2">💾 Backup Seguro</h3>
                      <p className="text-gray-300 text-sm">
                        Backup regular e seguro de todos os dados pessoais.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Como Exercer Seus Direitos</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Para exercer seus direitos como titular de dados pessoais:
                </p>
                
                <div className="bg-gold-500/10 border border-gold-500/20 rounded-xl p-6">
                  <h3 className="text-gold-300 font-bold mb-4">📋 Processo de Solicitação</h3>
                  <ol className="list-decimal list-inside text-gray-300 space-y-2">
                    <li>Entre em contato com nosso DPO</li>
                    <li>Identifique-se adequadamente</li>
                    <li>Especifique qual direito deseja exercer</li>
                    <li>Aguarde nossa resposta em até 15 dias úteis</li>
                    <li>Em caso de recusa, receba justificativa detalhada</li>
                  </ol>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Sanções e Penalidades</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  A Kontes Express está ciente das sanções previstas na LGPD e se compromete 
                  a cumprir rigorosamente todas as obrigações legais, evitando:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Multas de até 2% do faturamento (limitado a R$ 50 milhões)</li>
                  <li>Publicização da infração</li>
                  <li>Bloqueio dos dados pessoais</li>
                  <li>Eliminação dos dados pessoais</li>
                </ul>
              </section>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

