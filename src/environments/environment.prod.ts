export const environment = {
  production: true,
  api : {
    proxy: 'http://locahost:3000',
    baseUrl: 'https://api.efood.real.de',
    endpoint: '/api/v2/real',
    paths: {
      getProducts: '/products/search'
    }
  }
};
