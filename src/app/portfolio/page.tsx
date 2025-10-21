import { Metadata } from 'next';
import { PortfolioGrid } from '@/components/PortfolioGrid';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Portfólio - DTF Rápido by Kontes Express',
  description: 'Explore nosso portfólio de trabalhos realizados com impressão DTF. Veja exemplos de camisetas, moletons, bonés e bolsas personalizadas.',
  keywords: [
    'portfólio DTF',
    'trabalhos DTF',
    'exemplos impressão DTF',
    'galeria DTF',
  ],
};

export default function PortfolioPage() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main className="pt-20">
        <PortfolioGrid />
      </main>
      <Footer />
    </>
  );
}

