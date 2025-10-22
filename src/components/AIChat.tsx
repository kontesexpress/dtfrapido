'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, HelpCircle } from 'lucide-react';

// Base de conhecimento para respostas inteligentes
const knowledgeBase = {
  // Palavras-chave e suas respostas
  greetings: {
    keywords: ['olá', 'oi', 'bom dia', 'boa tarde', 'boa noite', 'hello', 'hi'],
    responses: [
      'Olá! Bem-vindo à Kontes Express! 👋 Como posso ajudar você hoje?',
      'Oi! Fico feliz em te ajudar! Em que posso ser útil?',
      'Bom dia! Estou aqui para esclarecer suas dúvidas sobre impressão DTF!'
    ]
  },
  price: {
    keywords: ['preço', 'valor', 'custo', 'quanto custa', 'orçamento', 'tabela de preços'],
    responses: [
      '💰 Nosso preço é de R$ 60,00 por metro de DTF. Caso tenha projetos muito volumosos recomendo entrar em contato com nossos, Nossa equipe de especialistas está disponível no WhatsApp para te ajudar: https://wa.me/5511919009112?text=Olá!+Vim+pelo+site+DTF+Rápido+e+gostaria+de+solicitar+um+orçamento+para+impressão+DTF.',
    ]
  },
  deadline: {
    keywords: ['prazo', 'tempo', 'quando fica pronto', 'entrega', 'demora', 'urgente'],
    responses: [
      '⏰ Nossos prazos são extremamente ágeis, nós temos a capacidade de fazer até 24h, mas geralmente entregamos adiantados rsrsrs, é possível solicitar o pedido na parte da manhã e retirar no período da tarde.',
    ]
  },
  technology: {
    keywords: ['dtf', 'tecnologia', 'como funciona', 'diferenca', 'dtg', 'sublimação'],
    responses: [
      '🔬 A impressão DTF (Direct to Film) é nossa especialidade! É uma tecnologia que:\n• Transfere imagens para filmes especiais\n• Aplica com prensa térmica em qualquer tecido\n• Oferece cores vibrantes e durabilidade superior\n• Funciona em tecidos escuros e claros\n\n Nosso DTF tem o diferencial que pode retirar QUENTE, ou seja, entrega muito mais ágeis de seu produto! \n\n Quer saber mais sobre algum aspecto específico?',
    ]
  },
  materials: {
    keywords: ['tecido', 'material', 'algodão', 'poliéster', 'tipo de roupa', 'camiseta', 'moletom'],
    responses: [
      '👕 Trabalhamos com diversos materiais:\n• Algodão (100% ou misturas)\n• Poliéster\n• Spandex\n• Moletons e sweatshirts\n Corta ventos \n Camisetas \n Bonés \n Bolsas \n E muito mais! \n O DTF funciona melhor em tecidos com pelo menos 80% de algodão ou poliéster. Que tipo de produto você tem em mente?',
    ]
  },
  quality: {
    keywords: ['qualidade', 'durabilidade', 'lavagem', 'resistência', 'garantia'],
    responses: [
      '⭐ Nossa qualidade é garantida:\n• 50+ lavagens mantendo a qualidade\n• Cores vibrantes e nítidas\n• Resistência ao sol e lavagem\n• Processo de qualidade rigoroso\n\nTodas as peças passam por controle de qualidade antes da entrega!',
      '🛡️ Oferecemos garantia de qualidade em todos os produtos. Se houver qualquer problema, refazemos sem custo adicional. Nossa satisfação é sua tranquilidade!'
    ]
  },
  order: {
    keywords: ['pedido', 'como fazer', 'processo', 'passo a passo', 'como encomendar'],
    responses: [
      '📋 Para fazer seu pedido é simples:\n1️⃣ Envie seu arquivo (PDF)\n2️⃣ Receba orçamento em até 2h\n3️⃣ Aprove o orçamento\n4️⃣ Produzimos e entregamos(Envio ou retirada)\n\n',
      '🎯 Nosso processo é rápido e transparente:\n• Orçamento gratuito e sem compromisso\n• Aprovação antes da produção\n• Acompanhamento do pedido\n• Entrega segura\n\n'
    ]
  },
  contact: {
    keywords: ['contato', 'telefone', 'whatsapp', 'endereço', 'localização'],
    responses: [
      '📞 Nossos contatos:\n• WhatsApp: (11) 91900-9112\n• Email: contato@kontesexpress.com\n• Endereço: R. Bresser, 601 - Brás, SP\n\n',
    ]
  },
  whatsapp: {
    keywords: ['falar com alguém', 'atendimento', 'pessoa', 'humano', 'não entendi', 'não consegui', 'ajuda'],
    responses: [
      '💬 Perfeito! Para falar diretamente com nossa equipe especializada, acesse nosso WhatsApp:\n\n📱 **WhatsApp Kontes Express**\n🔗 https://wa.me/5511919009112?text=Olá!+Vim+pelo+site+DTF+Rápido+e+gostaria+de+solicitar+um+orçamento+para+impressão+DTF.\n\n Nossa equipe está pronta para te atender com informações detalhadas sobre seu projeto!',
      '🎯 Nossa equipe de especialistas está disponível no WhatsApp para te ajudar:\n\n📱 **Contato Direto**\n🔗 https://wa.me/5511919009112?text=Olá!+Vim+pelo+site+DTF+Rápido+e+gostaria+de+solicitar+um+orçamento+para+impressão+DTF.\n\n Lá você pode enviar fotos, arquivos e receber um atendimento personalizado!'
    ]
  },
  default: {
    responses: [
      '🤔 Entendi sua pergunta! Para te dar a melhor resposta, me conte mais detalhes sobre:\n• Tipo de produto que você quer\n• Quantidade aproximada\n• Prazo desejado\n\nAssim posso te ajudar de forma mais precisa!',
      '💡 Posso te ajudar com informações sobre:\n• Preços e orçamentos\n• Prazos de produção\n• Tipos de materiais\n• Tecnologia DTF\n• Processo de pedido\n\nO que você gostaria de saber?',
      '🎯 Não consegui entender completamente sua pergunta. Para um atendimento mais personalizado, nossa equipe está disponível no WhatsApp:\n\n📱 **WhatsApp Kontes Express**\n🔗 https://wa.me/5511919009112?text=Olá!+Vim+pelo+site+DTF+Rápido+e+gostaria+de+solicitar+um+orçamento+para+impressão+DTF.\n\nLá você pode enviar fotos e receber orientação detalhada!'
    ]
  }
};

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Olá! Sou o assistente KontesAI. Como posso ajudar você hoje?',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Função para encontrar a melhor resposta baseada nas palavras-chave
  const findBestResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase();
    
    // Verificar cada categoria de conhecimento
    for (const [category, data] of Object.entries(knowledgeBase)) {
      if (category === 'default') continue;
      
      // Verificar se a categoria tem keywords
      if ('keywords' in data) {
        const hasKeyword = data.keywords.some((keyword: string) => 
          message.includes(keyword.toLowerCase())
        );
        
        if (hasKeyword) {
          // Retornar resposta aleatória da categoria
          const randomResponse = data.responses[Math.floor(Math.random() * data.responses.length)];
          return randomResponse;
        }
      }
    }
    
    // Se não encontrou categoria específica, usar resposta padrão
    const defaultResponses = knowledgeBase.default.responses;
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Gerar resposta inteligente baseada no conteúdo
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        text: findBestResponse(inputValue),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-gold-500/25 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        <MessageCircle className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[calc(100vh-2rem)] sm:h-[500px] max-h-[600px] bg-dark-800 border border-gold-500/20 rounded-2xl shadow-2xl backdrop-blur-md flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gold-500/20">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gold-500/10 rounded-full">
                  <Bot className="h-5 w-5 text-gold-500" />
                </div>
                <div>
                  <h3 className="font-bold text-white">KontesAI</h3>
                  <p className="text-xs text-gold-400">Assistente Inteligente</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-dark-700 rounded-full transition-colors duration-300"
              >
                <X className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            {/* Quick Suggestions */}
            {messages.length > 0 && (
              <div className="p-4 border-b border-gold-500/20">
                <p className="text-sm text-gray-400 mb-3">💡 Perguntas frequentes:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Qual o preço?',
                    'Quanto tempo demora?',
                    'Que materiais vocês usam?',
                    'Como funciona o DTF?',
                    'Falar com alguém',
                    'Como fazer pedido?'
                  ].map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setInputValue(suggestion);
                        // Enviar a mensagem automaticamente
                        setTimeout(() => {
                          const userMessage = {
                            id: messages.length + 1,
                            type: 'user',
                            text: suggestion,
                            timestamp: new Date(),
                          };
                          setMessages(prev => [...prev, userMessage]);
                          setIsTyping(true);
                          
                          // Gerar resposta inteligente
                          setTimeout(() => {
                            const botResponse = {
                              id: messages.length + 2,
                              type: 'bot',
                              text: findBestResponse(suggestion),
                              timestamp: new Date(),
                            };
                            setMessages(prev => [...prev, botResponse]);
                            setIsTyping(false);
                          }, 1500);
                        }, 100);
                      }}
                      className="text-xs bg-gold-500/10 text-gold-400 px-3 py-1 rounded-full hover:bg-gold-500/20 transition-colors duration-200 cursor-pointer"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${
                    message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`p-2 rounded-full ${
                      message.type === 'user' 
                        ? 'bg-gold-500 text-dark-900' 
                        : 'bg-gold-500/10 text-gold-500'
                    }`}>
                      {message.type === 'user' ? (
                        <User className="h-4 w-4" />
                      ) : (
                        <Bot className="h-4 w-4" />
                      )}
                    </div>
                    <div className={`p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-gold-500 text-dark-900'
                        : 'bg-dark-700 text-white'
                    }`}>
                      <div className="text-sm whitespace-pre-line">
                        {message.text.split('\n').map((line, index) => {
                          // Verificar se a linha contém um link do WhatsApp
                          if (line.includes('https://wa.me/')) {
                            const urlMatch = line.match(/https:\/\/wa\.me\/[^\s]+/);
                            if (urlMatch) {
                              const url = urlMatch[0];
                              const beforeUrl = line.substring(0, line.indexOf(url));
                              const afterUrl = line.substring(line.indexOf(url) + url.length);
                              
                              return (
                                <div key={index}>
                                  {beforeUrl}
                                  <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-400 hover:text-green-300 underline break-all"
                                  >
                                    {url}
                                  </a>
                                  {afterUrl}
                                </div>
                              );
                            }
                          }
                          return <div key={index}>{line}</div>;
                        })}
                      </div>
                      <p className={`text-xs mt-1 ${
                        message.type === 'user' ? 'text-dark-700/70' : 'text-gray-400'
                      }`}>
                        {message.timestamp.toLocaleTimeString('pt-BR', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                    <div className="p-2 rounded-full bg-gold-500/10 text-gold-500">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="p-3 rounded-2xl bg-dark-700 text-white">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gold-500/20">
              <div className="flex items-center space-x-2 mb-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 px-4 py-2 bg-dark-700 border border-gold-500/20 rounded-xl text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors duration-300"
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-gold-500 text-dark-900 rounded-xl hover:bg-gold-400 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" />
                </motion.button>
              </div>
              
              {/* WhatsApp Button */}
              <div className="flex justify-center">
                <a
                  href="https://wa.me/5511919009112?text=Olá!+Vim+pelo+site+DTF+Rápido+e+gostaria+de+solicitar+um+orçamento+para+impressão+DTF."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300 text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

