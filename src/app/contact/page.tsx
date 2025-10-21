import { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Contato - DTF Rápido by Kontes Express',
  description: 'Entre em contato conosco para solicitar seu orçamento gratuito de impressão DTF. Atendimento especializado e suporte técnico.',
  keywords: [
    'contato DTF',
    'orçamento DTF',
    'solicitar cotação',
    'atendimento DTF',
  ],
};

export default function ContactPage() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main className="pt-20">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

