'use client';

import { motion } from 'framer-motion';
import { useInViewSSR } from '@/lib/useInViewSSR';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Upload, MessageCircle, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import toast from 'react-hot-toast';

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  company: z.string().optional(),
  projectType: z.string().min(1, 'Selecione o tipo de projeto'),
  quantity: z.string().min(1, 'Informe a quantidade em metros'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
  file: z.any().refine((file) => file && file.length > 0, {
    message: 'Arquivo PDF é obrigatório'
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [ref, inView] = useInViewSSR({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Criar FormData para envio
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('company', data.company || '');
      formData.append('projectType', data.projectType);
      formData.append('quantity', data.quantity);
      formData.append('message', data.message);
      
      // Adicionar arquivo se existir
      if (data.file && data.file.length > 0) {
        formData.append('file', data.file[0]);
      }

      // Enviar para API
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      // Verificar se a resposta é JSON válido
      let result;
      try {
        const responseText = await response.text();
        if (!responseText) {
          throw new Error('Resposta vazia do servidor');
        }
        result = JSON.parse(responseText);
      } catch (parseError) {
        console.error('Erro ao fazer parse da resposta:', parseError);
        throw new Error('Erro de comunicação com o servidor. Tente novamente.');
      }

      if (!response.ok) {
        throw new Error(result.error || 'Erro ao enviar formulário');
      }

      toast.success('Orçamento enviado com sucesso! Você receberá uma confirmação por email.');
      reset();
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast.error(error instanceof Error ? error.message : 'Erro ao enviar orçamento. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      info: '+55 (11) 91900-9112',
      description: 'Segunda à sexta: 8h às 17h | Sábado: 8h às 12h',
      isWhatsApp: true,
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'kontesexpress@gmail.com',
      description: 'Resposta em até 24h',
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'R. Bresser, 601 - Brás, São Paulo - SP',
      description: 'Atendimento em toda região',
    },
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="text-white">Entre em </span>
            <span className="gradient-text-gold">Contato</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Pronto para transformar suas ideias em estampas incríveis? 
            Entre em contato conosco e solicite seu orçamento gratuito.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 px-4">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Fale Conosco
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">
                Nossa equipe está pronta para ajudar você a criar estampas 
                incríveis. Entre em contato pelos canais abaixo:
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className={`flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 backdrop-blur-sm rounded-xl transition-all duration-300 ${
                    info.isWhatsApp 
                      ? 'bg-green-500/10 border-2 border-green-500/40 hover:border-green-500/60 hover:bg-green-500/20' 
                      : 'bg-dark-800/50 border border-gold-500/20 hover:border-gold-500/40'
                  }`}
                >
                  <div className={`p-2 sm:p-3 rounded-full ${
                    info.isWhatsApp 
                      ? 'bg-green-500/20' 
                      : 'bg-gold-500/10'
                  }`}>
                    <info.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${
                      info.isWhatsApp 
                        ? 'text-green-500' 
                        : 'text-gold-500'
                    }`} />
                  </div>
                  <div>
                    <h4 className={`text-base sm:text-lg font-bold mb-1 ${
                      info.isWhatsApp 
                        ? 'text-green-400' 
                        : 'text-white'
                    }`}>
                      {info.title}
                      {info.isWhatsApp && (
                        <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                          RECOMENDADO
                        </span>
                      )}
                    </h4>
                    <p className={`text-sm sm:text-base font-medium mb-1 ${
                      info.isWhatsApp 
                        ? 'text-green-300' 
                        : 'text-gold-400'
                    }`}>
                      {info.info}
                    </p>
                    <p className={`text-xs sm:text-sm ${
                      info.isWhatsApp 
                        ? 'text-green-300/80' 
                        : 'text-gray-400'
                    }`}>
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-dark-800/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-4 sm:p-6 lg:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
              Solicitar Impressão DTF
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
              Preço: R$ 60,00 por metro de DTF. Envie seu arquivo PDF e receba em até 24h.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Nome e Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Nome *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-dark-700 border border-gold-500/20 rounded-xl text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors duration-300 text-sm sm:text-base touch-manipulation"
                    placeholder="Seu nome completo"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-dark-700 border border-gold-500/20 rounded-xl text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors duration-300 text-sm sm:text-base touch-manipulation"
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Telefone e Empresa */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Telefone *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-dark-700 border border-gold-500/20 rounded-xl text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors duration-300 text-sm sm:text-base touch-manipulation"
                    placeholder="(11) 99999-9999"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Empresa
                  </label>
                  <input
                    {...register('company')}
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-dark-700 border border-gold-500/20 rounded-xl text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors duration-300 text-sm sm:text-base touch-manipulation"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>

              {/* Tipo de Projeto e Quantidade */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Tipo de Projeto *
                  </label>
                  <select
                    {...register('projectType')}
                    className="w-full px-4 py-3 bg-dark-700 border border-gold-500/20 rounded-xl text-white focus:border-gold-500 focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Selecione...</option>
                    <option value="camisetas">Camisetas</option>
                    <option value="moletons">Moletons</option>
                    <option value="bonés">Bonés</option>
                    <option value="bolsas">Bolsas</option>
                    <option value="outros">Outros</option>
                  </select>
                  {errors.projectType && (
                    <p className="text-red-400 text-sm mt-1">{errors.projectType.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Quantidade em Metros *
                  </label>
                  <input
                    {...register('quantity')}
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-dark-700 border border-gold-500/20 rounded-xl text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors duration-300 text-sm sm:text-base touch-manipulation"
                    placeholder="Ex: 2 metros"
                  />
                  {errors.quantity && (
                    <p className="text-red-400 text-sm mt-1">{errors.quantity.message}</p>
                  )}
                </div>
              </div>

              {/* Upload de Arquivo */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Enviar Arquivo PDF *
                </label>
                <div className="border-2 border-dashed border-gold-500/20 rounded-xl p-6 text-center hover:border-gold-500/40 transition-colors duration-300">
                  <Upload className="h-8 w-8 text-gold-500 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">
                    Clique para enviar ou arraste seu arquivo PDF aqui
                  </p>
                  <p className="text-gold-400 text-xs mt-1 font-medium">
                    Obrigatório: Arquivo em PDF para impressão DTF
                  </p>
                  <input
                    {...register('file')}
                    type="file"
                    accept=".pdf"
                    className="hidden"
                    id="file-upload"
                  />
                  <label 
                    htmlFor="file-upload" 
                    className="inline-block mt-3 px-4 py-2 bg-gold-500/10 text-gold-400 rounded-lg cursor-pointer hover:bg-gold-500/20 transition-colors duration-300"
                  >
                    Selecionar Arquivo
                  </label>
                </div>
                {errors.file && (
                  <p className="text-red-400 text-sm mt-1">{errors.file.message as string}</p>
                )}
              </div>

              {/* Mensagem */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem *
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-dark-700 border border-gold-500/20 rounded-xl text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors duration-300 resize-none text-sm sm:text-base touch-manipulation"
                  placeholder="Conte-nos mais sobre seu projeto..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-xl hover:shadow-gold-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 touch-manipulation"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-dark-900 border-t-transparent rounded-full animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Solicitar Impressão DTF</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

