module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/login' },
      '/login': { page: '/login' },
      '/index': { page: '/index' },
      '/products': { page: '/products' }
    };
  }
};
