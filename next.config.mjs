/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Solução específica para EISDIR no Windows com Node.js v20
  webpack: (config, { dev, isServer }) => {
    // Desabilitar symlinks que causam EISDIR no Windows
    config.resolve.symlinks = false;
    config.cache = false;
    
    // Configuração específica para resolver problemas de readlink
    config.resolve = {
      ...config.resolve,
      symlinks: false,
      cacheWithContext: false,
    };
    
    // Desabilitar otimizações que podem causar problemas
    if (config.optimization) {
      config.optimization.splitChunks = false;
    }
    
    return config;
  },
};

export default nextConfig;