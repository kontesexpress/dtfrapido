import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { MessageSquare, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contato - DTF Rápido by Kontes Express',
  description: 'Entre em contato conosco via WhatsApp para solicitar seu orçamento gratuito de impressão DTF. Atendimento especializado e suporte técnico.',
  keywords: [
    'contato DTF',
    'orçamento DTF',
    'WhatsApp DTF',
    'atendimento DTF',
  ],
};

export default function ContactPage() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main className="pt-20 min-h-screen bg-gradient-to-b from-dark-900 to-dark-800 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Ícone WhatsApp */}
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto">
              <MessageSquare className="w-12 h-12 text-white" />
            </div>

            {/* Título */}
            <h1 className="text-4xl sm:text-5xl font-bold">
              <span className="text-white">Entre em </span>
              <span className="gradient-text-gold">Contato</span>
            </h1>

            {/* Descrição */}
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Para solicitar seu orçamento gratuito de impressão DTF, 
              entre em contato conosco via WhatsApp. Atendimento especializado 
              e suporte técnico disponível.
            </p>

            {/* Botão WhatsApp */}
            <div className="pt-8">
              <Link
                href="https://wa.me/5511919009112?text=Olá! Gostaria de solicitar um orçamento para impressão DTF."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageSquare className="w-6 h-6" />
                <span>Conversar no WhatsApp</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>

            {/* Informações adicionais */}
            <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text-gold mb-2">24h</div>
                <div className="text-gray-400">Resposta garantida</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text-gold mb-2">R$ 60</div>
                <div className="text-gray-400">Por metro DTF</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text-gold mb-2">Hot Peel</div>
                <div className="text-gray-400">Qualidade premium</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

