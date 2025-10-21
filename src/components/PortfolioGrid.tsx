'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
export function PortfolioGrid() {

  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: number]: number}>({});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'camisetas', name: 'Camisetas' },
    { id: 'uniformes', name: 'Uniformes' },
    { id: 'bonés', name: 'Bonés' },
    { id: 'bolsas', name: 'Bolsas' },
    { id: 'polos', name: 'Polos' },
    { id: 'diversos', name: 'Diversos' },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Camisetas Personalizadas',
      category: 'camisetas',
      images: [
        '/images/portfolio/Camiseta.webp',
        '/images/portfolio/Camiseta1.1.webp'
      ],
      description: 'Design moderno com cores vibrantes e estampas artísticas',
      likes: 80,
      views: 223,
    },
    {
      id: 2,
      title: 'Uniformes Corporativos',
      category: 'uniformes',
      images: [
        '/images/portfolio/Uniforme.webp',
        '/images/portfolio/Uniforme1.1.webp',
        '/images/portfolio/Uniforme2.webp'
      ],
      description: 'Identidade visual empresarial com acabamento premium',
      likes: 108,
      views: 277,
    },
    {
      id: 3,
      title: 'Boné Personalizado',
      category: 'bonés',
      images: [
        '/images/portfolio/Bone.webp'
      ],
      description: 'Design exclusivo com acabamento premium',
      likes: 31,
      views: 67,
    },
    {
      id: 4,
      title: 'Ecobag Sustentável',
      category: 'bolsas',
      images: [
        '/images/portfolio/Ecobag.webp'
      ],
      description: 'Bolsa ecológica com estampa personalizada',
      likes: 35,
      views: 89,
    },
    {
      id: 5,
      title: 'Polos Corporativos',
      category: 'polos',
      images: [
        '/images/portfolio/Polos.jpg'
      ],
      description: 'Polos empresariais com identidade visual',
      likes: 40,
      views: 98,
    },
    {
      id: 6,
      title: 'Corta-Vento Esportivo',
      category: 'diversos',
      images: [
        '/images/portfolio/CortaVento.jpg'
      ],
      description: 'Corta-vento com estampa esportiva',
      likes: 33,
      views: 82,
    },
  ];

  const filteredItems = selectedCategory === 'todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const nextImage = (itemId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const item = portfolioItems.find(item => item.id === itemId);
    if (item && item.images.length > 1) {
      setCurrentImageIndex(prev => ({
        ...prev,
        [itemId]: ((prev[itemId] || 0) + 1) % item.images.length
      }));
    }
  };

  const prevImage = (itemId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const item = portfolioItems.find(item => item.id === itemId);
    if (item && item.images.length > 1) {
      setCurrentImageIndex(prev => ({
        ...prev,
        [itemId]: prev[itemId] === 0 ? item.images.length - 1 : (prev[itemId] || 0) - 1
      }));
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            <span className="text-white">Nosso </span>
            <span className="gradient-text-gold">Portfólio</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Explore nossa galeria de trabalhos realizados e inspire-se com 
            a qualidade e versatilidade da impressão DTF.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-r from-gold-500/10 to-gold-600/10 border border-gold-500/20 rounded-xl p-6 max-w-4xl mx-auto mb-8"
          >
            <p className="text-gold-300 text-lg font-medium mb-2">
              💡 <strong>Mais Opções Disponíveis!</strong>
            </p>
            <p className="text-gray-300">
              Além dos produtos mostrados, trabalhamos com <strong>bobojacos</strong>, <strong>moletons</strong>, 
              diversos tipos de <strong>bonés</strong>, <strong>bolsas</strong>, <strong>toalhas</strong>, 
              <strong>almofadas</strong> e muito mais! Entre em contato para conhecer todas as nossas opções.
            </p>
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base touch-manipulation ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 shadow-lg shadow-gold-500/25'
                  : 'border border-gold-500/20 text-gold-400 hover:border-gold-500/40 hover:text-gold-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="group bg-dark-800/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl overflow-hidden hover:border-gold-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-gold-500/10 touch-manipulation"
            >
              {/* Image Carousel */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <Image
                  src={item.images[currentImageIndex[item.id] || 0]}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onLoad={() => {
                    console.log('Imagem carregada com sucesso:', item.images[currentImageIndex[item.id] || 0]);
                  }}
                  onError={() => {
                    console.error('Erro ao carregar imagem:', item.images[currentImageIndex[item.id] || 0]);
                  }}
                />
                
                {/* Navigation arrows for multiple images */}
                {item.images.length > 1 && isMounted && (
                  <>
                    <button
                      onClick={(e) => prevImage(item.id, e)}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-dark-900/80 text-white p-2 sm:p-3 rounded-full opacity-0 group-hover:opacity-100 sm:opacity-100 transition-opacity duration-300 hover:bg-dark-900 touch-manipulation"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => nextImage(item.id, e)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-dark-900/80 text-white p-2 sm:p-3 rounded-full opacity-0 group-hover:opacity-100 sm:opacity-100 transition-opacity duration-300 hover:bg-dark-900 touch-manipulation"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
                
                {/* Image indicators */}
                {item.images.length > 1 && isMounted && (
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    {item.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(prev => ({ ...prev, [item.id]: index }));
                        }}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-manipulation ${
                          (currentImageIndex[item.id] || 0) === index 
                            ? 'bg-gold-500' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                      />
                    ))}
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-gold-600/20 flex items-center justify-center" style={{ display: 'none' }}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gold-500/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg className="h-8 w-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <p className="text-gold-400 font-medium">Imagem não encontrada</p>
                  </div>
                </div>
                
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{item.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>{item.views}</span>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gold-500 hover:text-gold-400 font-medium transition-colors duration-300 text-sm sm:text-base touch-manipulation px-2 py-1 rounded"
                  >
                    Ver Detalhes
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-12 sm:mt-16 px-4"
        >
          <div className="bg-gradient-to-r from-gold-500/10 to-gold-600/10 border border-gold-500/20 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Gostou do que viu?
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-6">
              Transforme suas ideias em estampas incríveis com a qualidade 
              e precisão da tecnologia DTF.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-xl hover:shadow-gold-500/25 w-full sm:w-auto touch-manipulation"
            >
              Criar Minha Estampa
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

