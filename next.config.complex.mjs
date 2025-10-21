/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'dtfrapido.com',
      'localhost',
      'images.unsplash.com',
      'via.placeholder.com',
    ],
    formats: ['image/webp', 'image/avif'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  trailingSlash: false,
  webpack: (config, { dev, isServer }) => {
    // Configuração para resolver problemas de build no Windows
    config.cache = false;
    config.resolve.symlinks = false;
    
    // Configuração específica para resolver problemas de readlink no Windows
    config.resolve = {
      ...config.resolve,
      symlinks: false,
      cacheWithContext: false,
    };
    
    // Desabilitar otimizações que podem causar problemas
    if (config.optimization) {
      config.optimization.splitChunks = false;
      config.optimization.minimize = false;
    }
    
    return config;
  },
};

export default nextConfig;

