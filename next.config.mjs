/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
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