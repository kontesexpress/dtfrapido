'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInViewSSR } from '@/lib/useInViewSSR';
import { Star, Quote, ExternalLink, MapPin } from 'lucide-react';

interface GoogleReview {
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface GooglePlaceDetails {
  name: string;
  rating: number;
  user_ratings_total: number;
  reviews: GoogleReview[];
  formatted_address: string;
  place_id: string;
}

export function GoogleReviewsAPI() {
  const [ref, inView] = useInViewSSR({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [placeDetails, setPlaceDetails] = useState<GooglePlaceDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentReview, setCurrentReview] = useState(0);

  // Configurações do seu negócio
  const PLACE_ID = 'SEU_PLACE_ID_AQUI'; // Substitua pelo Place ID do seu negócio
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;

  const fetchGoogleReviews = useCallback(async () => {
    try {
      setLoading(true);
      
      // Usando Google Places API
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,user_ratings_total,reviews,formatted_address&key=${API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error('Erro ao buscar avaliações');
      }
      
      const data = await response.json();
      
      if (data.status === 'OK' && data.result) {
        setPlaceDetails(data.result);
        setReviews(data.result.reviews || []);
      } else {
        throw new Error(data.error_message || 'Erro na API do Google');
      }
    } catch (err) {
      console.error('Erro ao buscar avaliações:', err);
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  }, [API_KEY, PLACE_ID]);

  useEffect(() => {
    if (!API_KEY) {
      setError('Chave da API do Google não configurada');
      setLoading(false);
      return;
    }

    fetchGoogleReviews();
  }, [API_KEY, fetchGoogleReviews]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-500 mx-auto mb-4"></div>
            <p className="text-gray-300">Carregando avaliações...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-400 mb-4">Erro ao carregar avaliações: {error}</p>
            <button 
              onClick={fetchGoogleReviews}
              className="bg-gold-500 text-dark-900 px-6 py-3 rounded-full font-medium hover:bg-gold-400 transition-colors duration-300"
            >
              Tentar Novamente
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (!placeDetails || reviews.length === 0) {
    return (
      <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">Nenhuma avaliação encontrada</p>
          </div>
        </div>
      </section>
    );
  }

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
              <span className="text-2xl font-bold text-white">{placeDetails.rating}</span>
            </div>
            <span className="text-gray-300 text-lg">•</span>
            <span className="text-gray-300 text-lg">{placeDetails.user_ratings_total} avaliações</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center space-x-2 text-gray-300 mb-8"
          >
            <MapPin className="h-5 w-5" />
            <span>{placeDetails.formatted_address}</span>
          </motion.div>

          <motion.a
            href="https://share.google/bl6nAMXdJkeczmTAi"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-medium hover:from-blue-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
          >
            <ExternalLink className="h-5 w-5" />
            <span>Ver no Google Maps</span>
          </motion.a>
        </motion.div>

        {/* Reviews Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative"
        >
          <div className="bg-dark-800/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-8 overflow-hidden">
            <div className="flex items-start space-x-6">
              {/* Avatar */}
              <div className="flex-shrink-0">
                {reviews[currentReview].profile_photo_url ? (
                  <img
                    src={reviews[currentReview].profile_photo_url}
                    alt={reviews[currentReview].author_name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {reviews[currentReview].author_name.charAt(0)}
                  </div>
                )}
              </div>

              {/* Review Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {reviews[currentReview].author_name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(reviews[currentReview].rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm">
                        {reviews[currentReview].relative_time_description}
                      </span>
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-gold-500/30" />
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {reviews[currentReview].text}
                </p>

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
      </div>
    </section>
  );
}
