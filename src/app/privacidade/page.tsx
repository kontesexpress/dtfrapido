'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Calendar, Eye, Lock } from 'lucide-react';
import Link from 'next/link';

export default function PrivacidadePage() {
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
              <Shield className="h-6 w-6 text-gold-500" />
              <span className="text-gold-400 font-semibold">Proteção de Dados</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Política de Privacidade
            </h1>

            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Última atualização: {new Date().toLocaleDateString('pt-BR')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="h-4 w-4" />
                <span>LGPD Compliant</span>
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
                <h2 className="text-2xl font-bold text-white mb-4">1. Introdução</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  A Kontes Express está comprometida com a proteção da privacidade e dos dados
                  pessoais de nossos clientes. Esta Política de Privacidade descreve como
                  coletamos, usamos, armazenamos e protegemos suas informações pessoais,
                  em conformidade com a Lei Geral de Proteção de Dados (LGPD).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Dados Coletados</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Coletamos os seguintes tipos de dados pessoais:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Dados de identificação:</strong> Nome, CPF/CNPJ, RG</li>
                  <li><strong>Dados de contato:</strong> Email, telefone, endereço</li>
                  <li><strong>Dados comerciais:</strong> Histórico de pedidos, preferências</li>
                  <li><strong>Dados de navegação:</strong> Cookies, IP, localização</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Finalidades do Tratamento</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Utilizamos seus dados pessoais para:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Prestação de serviços de impressão DTF</li>
                  <li>Processamento de pedidos e pagamentos</li>
                  <li>Comunicação sobre produtos e serviços</li>
                  <li>Melhoria da experiência do cliente</li>
                  <li>Cumprimento de obrigações legais</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Base Legal</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  O tratamento de seus dados pessoais é baseado em:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Consentimento:</strong> Para comunicações de marketing</li>
                  <li><strong>Execução de contrato:</strong> Para prestação de serviços</li>
                  <li><strong>Obrigação legal:</strong> Para cumprimento de leis</li>
                  <li><strong>Legítimo interesse:</strong> Para melhoria de serviços</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Compartilhamento de Dados</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Seus dados pessoais podem ser compartilhados apenas com:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Prestadores de serviços essenciais (logística, pagamento)</li>
                  <li>Autoridades competentes quando exigido por lei</li>
                  <li>Parceiros comerciais com seu consentimento</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Segurança dos Dados</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Implementamos medidas de segurança técnicas e organizacionais para proteger
                  seus dados pessoais contra acesso não autorizado, alteração, divulgação ou
                  destruição, incluindo:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Criptografia de dados sensíveis</li>
                  <li>Controle de acesso restrito</li>
                  <li>Monitoramento de segurança 24/7</li>
                  <li>Backup regular dos dados</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Seus Direitos</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Você tem os seguintes direitos sobre seus dados pessoais:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Acesso:</strong> Solicitar informações sobre seus dados</li>
                  <li><strong>Retificação:</strong> Corrigir dados incorretos</li>
                  <li><strong>Exclusão:</strong> Solicitar remoção de dados</li>
                  <li><strong>Portabilidade:</strong> Transferir dados para outro fornecedor</li>
                  <li><strong>Oposição:</strong> Opor-se ao tratamento de dados</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Retenção de Dados</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir
                  as finalidades descritas nesta política ou conforme exigido por lei.
                  Após esse período, os dados são excluídos de forma segura.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Cookies</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Utilizamos cookies para melhorar sua experiência em nosso site.
                  Você pode gerenciar suas preferências de cookies através das
                  configurações do seu navegador.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Contato</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta política:
                </p>
                <div className="bg-gold-500/10 border border-gold-500/20 rounded-xl p-6">
                  <p className="text-gold-300 font-semibold mb-2">Encarregado de Dados (DPO)</p>
                  <p className="text-gray-300 text-sm">
                    📧 Email: privacidade@kontesexpress.com<br />
                    📱 WhatsApp: +55 (11) 96188-5415<br />
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

