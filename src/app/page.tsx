'use client';

import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatIsDTF } from '@/components/WhatIsDTF';
import { Advantages } from '@/components/Advantages';
import { PortfolioGrid } from '@/components/PortfolioGrid';
import { ContactForm } from '@/components/ContactForm';
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
        <Advantages />
        <PortfolioGrid />
        <GoogleReviewsSimple />
        <AboutSection />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <AIChat />
    </>
  );
}