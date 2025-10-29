'use client';

import { motion } from 'framer-motion';
import { useInViewSSR } from '@/lib/useInViewSSR';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export function GoogleReviewsSimple() {
  const [ref, inView] = useInViewSSR({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentReview, setCurrentReview] = useState(0);

  // Dados das avaliações reais do Google
  const reviews = [
    {
      id: 1,
      name: 'Jana Santana',
      rating: 5,
      date: '2 anos atrás',
      text: 'Impressionada com carinho e cuidado que recebemos da equipe que estão prontamente dispostos a atender nossas dúvidas, sem falar na rapidez e qualidade na entrega dos produtos. Superou minhas expectativas!!! Recomendo sem dúvida!!! Super obrigada e logo volto para mais pedidos!!!',
      photos: [
        'https://lh3.googleusercontent.com/geougc-cs/AB3l90BhoJ2LW34psg-X6BaukO823Fz1Jom_wU36zpsmelLLduHzYjOphq_mjflxrlk12D3vMqI-GGBMbsvGzchoGBSmd68azL8X-6ZTyezTif38hofWxU9aLWpPN_VHH-ohchXd4Z8h8A=s125-p-k-rw',
        'https://lh3.googleusercontent.com/geougc-cs/AB3l90Bpx0ydhY40583l_LtZJwiaN61OR1svzLL0hqluPoIhifyGPJIYn9pyrKNVB2d1fi9DzuR5vijq4He5fYjOTIBYeYhUNzuGbSndxHchVn2qSfA_ZXmDbLTcTTNEie1e9R85HFLK=s125-p-k-rw',
        'https://lh3.googleusercontent.com/geougc-cs/AB3l90BCiotzgqXWKU1V5RLfPYM2lIMIgTpya1sIm7yMJTFIAF6lFtWCCw4PyYsKLUOX274zSXPeUczOaGglfbV2fwt1SAlJF_ptbp-ZTgcIl1VN0fvQzXLGz-A7onFTntbyKILeyHD5=s125-p-k-rw',
        'https://lh3.googleusercontent.com/geougc-cs/AB3l90CO8SzQyROAxExfuvPkmTukS0t0-k8y4Ef3a2F-zn6K3EJZsPSi-QY8vEicvrbaMUi-xpxJc0LXrwkC90y9ViqDp_-HFQuemoAhHi96TPpI2xk7jDwUXD6cey-vgtQvIGVz5iI=s125-p-k-rw'
      ],
      helpful_votes: 4
    },
    {
      id: 2,
      name: 'Luiz Orlandini',
      rating: 5,
      date: '1 ano atrás',
      text: 'Experiência de compra ÚNICA. Sabe quando você acorda um dia precisando "apenas fazer umas camisetas" e mais...',
      photos: [
        'https://lh3.googleusercontent.com/geougc-cs/AB3l90BdtebTf24gLTwoC7c4gaH2WD0htJfjDKEZV72nbdiPpWSENzKr5T-4Encn4YTUxuwqPKYo1GUfNenUKQtm3rPswT8hLp4g0wg-cNOY2dJEsxhfDbVjewzLLvvOr4_M1XbchBmVwA=s125-p-k-rw',
        'https://lh3.googleusercontent.com/geougc-cs/AB3l90DINZCEVa1At718lkV-JxupJHrw0xcbvqKOs7bque8EODotQeWXnT4qiwnVlqvDlVkqDDsKBndlNF34RpycY8KbjLSDzP7c4Pn_wKOrrp7QardHuKHDL959vPqPrjtjg2Kvajlw=s125-p-k-rw'
      ],
      helpful_votes: 1
    },
    {
      id: 3,
      name: 'SL Assessoria - DP',
      rating: 5,
      date: '1 ano atrás',
      text: 'Minha empresa é uma contabilidade localizada na região do Brás e tivemos um enorme prazer em fazer as camisetas da nossa empresa com você, todos amaram desde o atendimento até a chegada das camisetas, adoramos a qualidade do produto e a dedicação da empresa Kontes Ltda em nos atender e entregar cada detalhe que pedimos, super indicamos!!!',
      photos: [
        'https://lh3.googleusercontent.com/geougc-cs/AB3l90CsDq1fRRUHssw-qIw30DgEEB-c1gb2wrsdNSQJnGm1xJ45N2q62ArWcIG90aVZDM3uWl_AsMQ76LQgKNGnFMgw85sjEl7WMZJxuzlYFS6wCb54pscf_dTqdDYFlE9a2IAnX2Xzqg=s125-p-k-rw'
      ],
      helpful_votes: 1
    },
    {
      id: 4,
      name: 'Cervejaria Dma',
      rating: 5,
      date: '1 ano atrás',
      text: 'Trabalho super bem feito e material de qualidade, super recomendamos. Não trocamos por nada, indico de olhos fechados',
      photos: [
        'https://lh3.googleusercontent.com/geougc-cs/AB3l90AE38EorjFhCZkmfBGZqQyhaYxSwWXDiuT_CPcZYqU2Zkt75EQC52d3omXistc0c6UGRGxrQcmBRCMdRFBCgUO8lDntEcDdP75kn9BX_i4tfHGn2KSncqHr31fso7FNRHQotxOO=s125-p-k-rw',
        'https://lh3.googleusercontent.com/geougc-cs/AB3l90AKXuV7rHZZW6F11HV_RvJMHa6smmBbI_Qo_Nga8E45S6rAKjU9g1_W9Xfrd1z1u3A3o2Fhlx-Hpov0ieFONSsPw3GgXqKxv4_Jt-1KYvsSxoKIsDw7R6ewJT5P5h81Jk0lopw=s125-p-k-rw',
        'https://lh3.googleusercontent.com/geougc-cs/AB3l90D2eWtJ1nl3MsisntX6gmrDrsWro9wioWFihVb4k9LNg92kA2T6RK13gllJN-y-oPpARKdyqAnMNGbwc_aQ8zgXTFq3JWTH8mAe8q5Th5qW5JZva9i7IbtpGYKUE5xFCiGVR8z1=s125-p-k-rw'
      ],
      helpful_votes: 0
    },
    {
      id: 5,
      name: 'Adriana Nogueira',
      rating: 5,
      date: '1 ano atrás',
      text: 'A palavra excelência resume minha experiência com essa empresa. Excelência no atendimento no produto e na entrega 🙏',
      photos: [
        'https://lh3.googleusercontent.com/geougc-cs/AB3l90BdtebTf24gLTwoC7c4gaH2WD0htJfjDKEZV72nbdiPpWSENzKr5T-4Encn4YTUxuwqPKYo1GUfNenUKQtm3rPswT8hLp4g0wg-cNOY2dJEsxhfDbVjewzLLvvOr4_M1XbchBmVwA=s125-p-k-rw',
        'https://lh3.googleusercontent.com/geougc-cs/AB3l90DINZCEVa1At718lkV-JxupJHrw0xcbvqKOs7bque8EODotQeWXnT4qiwnVlqvDlVkqDDsKBndlNF34RpycY8KbjLSDzP7c4Pn_wKOrrp7QardHuKHDL959vPqPrjtjg2Kvajlw=s125-p-k-rw'
      ],
      helpful_votes: 0
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto-rotate reviews every 8 seconds
  useEffect(() => {
    if (reviews.length > 1) {
      const interval = setInterval(() => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
      }, 8000);

      return () => clearInterval(interval);
    }
  }, [reviews.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
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
            <span className="text-white">Avaliações </span>
            <span className="gradient-text-gold">Google</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center space-x-4 mb-8"
          >
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-white">5,0</span>
            </div>
            <span className="text-gray-300 text-lg">•</span>
            <span className="text-gray-300 text-lg">68 avaliações</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Veja o que nossos clientes dizem sobre nossos serviços e produtos personalizados.
          </motion.p>

          <motion.a
            href="https://www.google.com/search?sca_esv=3aa3359d46e30aa6&sxsrf=AE3TifPBGiVdMdDQhi3aH0_PX0S6XzzvcQ:1760998388113&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E3Y5MEubGfTL-S3Il5G_p346_IiEqVElPZCgczJj18dR0znuvIwzNbHq_2jemX7QZvBYRvib__Ct-qRcbid5BRp5KdV6jXNADbLl6k7LKU9qKUXJ6GhyREkumSLML1eSj5PIQPVkv_F84EMXVTEJBVPipGUFLtsZkvRYrZTPIsfW-Y7JnQ%3D%3D&q=Kontes+Express+%E2%80%A2+Camisetas,+uniformes+e+Produtos+Personalizados+Coment%C3%A1rios&sa=X&ved=2ahUKEwivp_6a5rOQAxVOCLkGHXo4K2YQ0bkNegQILRAE&biw=1366&bih=617&dpr=1"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-medium hover:from-blue-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
          >
            <ExternalLink className="h-5 w-5" />
            <span>Ver no Google</span>
          </motion.a>
        </motion.div>

        {/* Reviews Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative"
        >
            <div className="bg-dark-800/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-4 sm:p-6 lg:p-8 overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              {/* WhatsApp Icon */}
              <div className="flex-shrink-0 mx-auto sm:mx-0 relative">
                <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <Image 
                    src="/images/whatsapp-logo.webp" 
                    alt="WhatsApp" 
                    width={72}
                    height={72}
                    className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                  />
                </div>
                {/* Avatar overlapping */}
                <div className="absolute -bottom-1 -right-1 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl border-2 border-dark-800 shadow-lg">
                  {reviews[currentReview]?.name?.charAt(0) || 'A'}
                </div>
              </div>

              {/* Review Content */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 space-y-2 sm:space-y-0">
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                      {reviews[currentReview]?.name || 'Anônimo'}
                    </h3>
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                      <div className="flex">
                        {[...Array(reviews[currentReview]?.rating || 5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-gray-400 text-xs sm:text-sm">
                        {reviews[currentReview]?.date || 'Data não disponível'}
                      </span>
                    </div>
                  </div>
                  <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-gold-500/30 mx-auto sm:mx-0" />
                </div>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                  {reviews[currentReview]?.text || 'Avaliação não disponível'}
                </p>

                {/* Review Photos - Imagens reais das avaliações */}
                {reviews[currentReview]?.photos && reviews[currentReview].photos.length > 0 && (
                  <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 justify-center sm:justify-start">
                    {reviews[currentReview].photos.map((photo: string, index: number) => (
                      <div key={index} className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-700 rounded-lg overflow-hidden relative group">
                        <img
                          src={photo}
                          alt={`Foto ${index + 1} da avaliação`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="w-full h-full flex items-center justify-center bg-gray-600">
                                  <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                  </svg>
                                </div>
                              `;
                            }
                          }}
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Helpful Votes */}
                {reviews[currentReview]?.helpful_votes && reviews[currentReview].helpful_votes > 0 && (
                  <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
                    <span>👍 {reviews[currentReview].helpful_votes} pessoas acharam útil</span>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                  <div className="flex space-x-2">
                    {reviews.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentReview(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-manipulation ${
                          index === currentReview 
                            ? 'bg-gold-500' 
                            : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <a
                      href="https://www.google.com/maps/dir/-23.6486656,-46.6845696/R.+Bresser,+601+-+Br%C3%A1s,+S%C3%A3o+Paulo+-+SP,+03017-000/@-23.5912114,-46.6891224,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94ce592fd3a9d4df:0xdd62b5ee2d7023f9!2m2!1d-46.609934!2d-23.5358339?hl=en-GB&authuser=0&entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base touch-manipulation"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Como chegar</span>
                    </a>
                    <div className="flex space-x-2">
                      <button
                        onClick={prevReview}
                        className="p-2 sm:p-3 bg-dark-700 text-white rounded-full hover:bg-dark-600 transition-colors duration-300 touch-manipulation"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={nextReview}
                        className="p-2 sm:p-3 bg-dark-700 text-white rounded-full hover:bg-dark-600 transition-colors duration-300 touch-manipulation"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}