'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Cookie, Calendar, Settings, Shield } from 'lucide-react';
import Link from 'next/link';

export default function CookiesPage() {
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
              <Cookie className="h-6 w-6 text-gold-500" />
              <span className="text-gold-400 font-semibold">Política de Cookies</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Política de Cookies
            </h1>

            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Última atualização: {new Date().toLocaleDateString('pt-BR')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Transparência Total</span>
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
                <h2 className="text-2xl font-bold text-white mb-4">1. O que são Cookies?</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando
                  você visita nosso site. Eles nos ajudam a melhorar sua experiência de navegação,
                  personalizar conteúdo e analisar o tráfego do site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Tipos de Cookies Utilizados</h2>

                <div className="space-y-6">
                  <div className="bg-gold-500/10 border border-gold-500/20 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gold-400 mb-3">🍪 Cookies Essenciais</h3>
                    <p className="text-gray-300 text-sm mb-2">
                      <strong>Finalidade:</strong> Necessários para o funcionamento básico do site
                    </p>
                    <p className="text-gray-300 text-sm mb-2">
                      <strong>Duração:</strong> Sessão
                    </p>
                    <p className="text-gray-300 text-sm">
                      <strong>Exemplos:</strong> Autenticação, carrinho de compras, preferências de idioma
                    </p>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">📊 Cookies de Análise</h3>
                    <p className="text-gray-300 text-sm mb-2">
                      <strong>Finalidade:</strong> Coletar informações sobre como você usa o site
                    </p>
                    <p className="text-gray-300 text-sm mb-2">
                      <strong>Duração:</strong> 2 anos
                    </p>
                    <p className="text-gray-300 text-sm">
                      <strong>Exemplos:</strong> Google Analytics, métricas de performance
                    </p>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-green-400 mb-3">🎯 Cookies de Marketing</h3>
                    <p className="text-gray-300 text-sm mb-2">
                      <strong>Finalidade:</strong> Personalizar anúncios e conteúdo
                    </p>
                    <p className="text-gray-300 text-sm mb-2">
                      <strong>Duração:</strong> 1 ano
                    </p>
                    <p className="text-gray-300 text-sm">
                      <strong>Exemplos:</strong> Facebook Pixel, Google Ads, remarketing
                    </p>
                  </div>

                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-purple-400 mb-3">⚙️ Cookies de Funcionalidade</h3>
                    <p className="text-gray-300 text-sm mb-2">
                      <strong>Finalidade:</strong> Lembrar suas preferências e configurações
                    </p>
                    <p className="text-gray-300 text-sm mb-2">
                      <strong>Duração:</strong> 6 meses
                    </p>
                    <p className="text-gray-300 text-sm">
                      <strong>Exemplos:</strong> Tema do site, configurações de acessibilidade
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Cookies de Terceiros</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Utilizamos serviços de terceiros que podem definir cookies em nosso site:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Google Analytics:</strong> Análise de tráfego e comportamento</li>
                  <li><strong>Google Ads:</strong> Publicidade direcionada</li>
                  <li><strong>Facebook Pixel:</strong> Remarketing e conversões</li>
                  <li><strong>YouTube:</strong> Vídeos incorporados</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Como Gerenciar Cookies</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Você pode controlar e gerenciar cookies de várias formas:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-dark-700/50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-3">🌐 Configurações do Navegador</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Acesse as configurações de privacidade do seu navegador para:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                      <li>Bloquear todos os cookies</li>
                      <li>Permitir apenas cookies essenciais</li>
                      <li>Excluir cookies existentes</li>
                      <li>Receber notificações antes de aceitar</li>
                    </ul>
                  </div>

                  <div className="bg-dark-700/50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-3">⚙️ Configurações do Site</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Use nosso banner de cookies para:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                      <li>Escolher tipos de cookies aceitos</li>
                      <li>Alterar preferências a qualquer momento</li>
                      <li>Revogar consentimento</li>
                      <li>Visualizar cookies ativos</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Impacto da Desativação</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Desativar cookies pode afetar sua experiência em nosso site:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Funcionalidades básicas podem não funcionar corretamente</li>
                  <li>Preferências não serão lembradas</li>
                  <li>Conteúdo personalizado não será exibido</li>
                  <li>Análises de performance serão limitadas</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Atualizações desta Política</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Esta política de cookies pode ser atualizada periodicamente para refletir
                  mudanças em nossas práticas ou por motivos operacionais, legais ou
                  regulamentares. Recomendamos que você revise esta página regularmente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Contato</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Para dúvidas sobre nossa política de cookies:
                </p>
                <div className="bg-gold-500/10 border border-gold-500/20 rounded-xl p-6">
                  <p className="text-gold-300 font-semibold mb-2">Kontes Express</p>
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

