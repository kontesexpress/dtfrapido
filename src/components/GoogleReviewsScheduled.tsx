'use client';

import { motion } from 'framer-motion';
import { useInViewSSR } from '@/lib/useInViewSSR';
import { Star, Quote, ExternalLink, Loader2, RefreshCw, Clock, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useReviewsScheduler } from '@/lib/reviews-scheduler';

export function GoogleReviewsScheduled() {
  const [ref, inView] = useInViewSSR({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentReview, setCurrentReview] = useState(0);
  const { reviews, status, loading, forceUpdate } = useReviewsScheduler();

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto-rotate reviews every 5 seconds
  useEffect(() => {
    if (reviews.length > 1) {
      const interval = setInterval(() => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
      }, 5000);

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
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
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
            <span className="text-gray-300 text-lg">{reviews.length} avaliações</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Veja o que nossos clientes dizem sobre nossos serviços e produtos personalizados.
          </motion.p>


          <motion.a
            href="https://www.google.com/search?sca_esv=3aa3359d46e30aa6&sxsrf=AE3TifPBGiVdMdDQhi3aH0_PX0S6XzzvcQ:1760998388113&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E3Y5MEubGfTL-S3Il5G_p346_IiEqVElPZCgczJj18dR0znuvIwzNbHq_2jemX7QZvBYRvib__Ct-qRcbid5BRp5KdV6jXNADbLl6k7LKU9qKUXJ6GhyREkumSLML1eSj5PIQPVkv_F84EMXVTEJBVPipGUFLtsZkvRYrZTPIsfW-Y7JnQ%3D%3D&q=Kontes+Express+%E2%80%A2+Camisetas,+uniformes+e+Produtos+Personalizados+Coment%C3%A1rios&sa=X&ved=2ahUKEwivp_6a5rOQAxVOCLkGHXo4K2YQ0bkNegQILRAE&biw=1366&bih=617&dpr=1"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-medium hover:from-blue-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
          >
            <ExternalLink className="h-5 w-5" />
            <span>Ver no Google</span>
          </motion.a>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-gold-500" />
            <span className="ml-2 text-white">Carregando avaliações...</span>
          </div>
        )}

        {/* Reviews Carousel */}
        {!loading && reviews.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="relative"
          >
            <div className="bg-dark-800/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-8 overflow-hidden">
              <div className="flex items-start space-x-6">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {reviews[currentReview]?.author_name?.charAt(0) || 'A'}
                  </div>
                </div>

                {/* Review Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {reviews[currentReview]?.author_name || 'Anônimo'}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {[...Array(reviews[currentReview]?.rating || 5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-gray-400 text-sm">
                          {reviews[currentReview]?.date || 'Data não disponível'}
                        </span>
                      </div>
                    </div>
                    <Quote className="h-8 w-8 text-gold-500/30" />
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {reviews[currentReview]?.text || 'Avaliação não disponível'}
                  </p>

                  {/* Review Photos */}
                  {reviews[currentReview]?.photos && reviews[currentReview].photos.length > 0 && (
                    <div className="flex space-x-4 mb-6">
                      {reviews[currentReview].photos.map((photo: string, index: number) => (
                        <div key={index} className="w-20 h-20 bg-gray-700 rounded-lg overflow-hidden">
                          <img
                            src={photo}
                            alt={`Foto ${index + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
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
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {reviews.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentReview(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentReview 
                              ? 'bg-gold-500' 
                              : 'bg-gray-600 hover:bg-gray-500'
                          }`}
                        />
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <a
                        href="https://www.google.com/maps/dir/-23.6486656,-46.6845696/R.+Bresser,+601+-+Br%C3%A1s,+S%C3%A3o+Paulo+-+SP,+03017-000/@-23.5912114,-46.6891224,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94ce592fd3a9d4df:0xdd62b5ee2d7023f9!2m2!1d-46.609934!2d-23.5358339?hl=en-GB&authuser=0&entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Como chegar</span>
                      </a>
                      <button
                        onClick={prevReview}
                        className="p-2 bg-dark-700 text-white rounded-full hover:bg-dark-600 transition-colors duration-300"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={nextReview}
                        className="p-2 bg-dark-700 text-white rounded-full hover:bg-dark-600 transition-colors duration-300"
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
          </motion.div>
        )}

        {/* No Reviews State */}
        {!loading && reviews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">Nenhuma avaliação encontrada.</p>
            <button
              onClick={forceUpdate}
              className="mt-4 px-4 py-2 bg-gold-500 text-dark-900 rounded-lg hover:bg-gold-400 transition-colors duration-300"
            >
              Tentar novamente
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
