'use client';

import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatIsDTF } from '@/components/WhatIsDTF';
import { DTFUVSection } from '@/components/DTFUVSection';
import { PortfolioGrid } from '@/components/PortfolioGrid';
import { HotPeelQuality } from '@/components/HotPeelQuality';
import { PDFSpecs } from '@/components/PDFSpecs';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { GoogleReviewsSimple } from '@/components/GoogleReviewsSimple';
import { AboutSection } from '@/components/AboutSection';
import { AIChat } from '@/components/AIChat';
import { JsonLd } from '@/components/JsonLd';

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <WhatIsDTF />
        <DTFUVSection />
        <PortfolioGrid />
        <HotPeelQuality />
        <PDFSpecs />
        <GoogleReviewsSimple />
        <AboutSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <AIChat />
    </>
  );
}