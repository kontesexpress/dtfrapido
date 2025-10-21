import { Metadata } from 'next';
import { AboutSection } from '@/components/AboutSection';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Sobre Nós - DTF Rápido by Kontes Express',
  description: 'Conheça a história da Kontes Express, líder em impressão DTF premium no Brasil. Mais de 5 anos de experiência e qualidade superior.',
  keywords: [
    'sobre kontes express',
    'história empresa DTF',
    'equipe impressão DTF',
    'tecnologia DTF Brasil',
  ],
};

export default function AboutPage() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main className="pt-20">
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}

