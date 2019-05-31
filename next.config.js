module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/login' },
      '/login': { page: '/login' },
      '/index': { page: '/index' },
      '/products': { page: '/products' },
      '/products/categories': { page: '/products/categories' },
      '/products/brands': { page: '/products/brands' },
      '/products/stocks': { page: '/products/stocks' },
      '/products/validity': { page: '/products/validity' },
      '/products/input': { page: '/products/input' },
      '/products/output': { page: '/products/output' }
    };
  }
};
