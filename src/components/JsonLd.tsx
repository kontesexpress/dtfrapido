'use client';

import { baseSchema, websiteSchema, faqSchema } from '@/lib/schema';

export function JsonLd() {
  const faqs = [
    {
      question: 'O que é impressão DTF?',
      answer: 'DTF (Direct to Film) é a tecnologia mais avançada em impressão têxtil, oferecendo qualidade superior, durabilidade excepcional e versatilidade incomparável para personalização de roupas e acessórios.',
    },
    {
      question: 'Qual a diferença entre DTF e outras técnicas de impressão?',
      answer: 'A tecnologia DTF oferece cores mais vibrantes, maior durabilidade, aplicação em diversos materiais e acabamento profissional superior comparado a outras técnicas de impressão.',
    },
    {
      question: 'Quais materiais vocês trabalham?',
      answer: 'Trabalhamos com algodão, poliéster, blends, moletons, camisetas, bonés, bolsas e diversos outros materiais têxteis compatíveis com a tecnologia DTF.',
    },
    {
      question: 'Qual o prazo de entrega?',
      answer: 'Nossos prazos variam conforme o plano: Básico (3 dias), Premium (24h) e Enterprise (24h). Sempre respeitamos os prazos acordados.',
    },
    {
      question: 'Vocês fazem orçamento gratuito?',
      answer: 'Sim! Oferecemos orçamento gratuito e sem compromisso para todos os nossos clientes. Entre em contato conosco para solicitar o seu.',
    },
  ];

  const schemas = [
    baseSchema,
    websiteSchema,
    faqSchema(faqs),
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

