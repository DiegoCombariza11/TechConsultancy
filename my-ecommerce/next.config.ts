// next.config.js
module.exports = {
    reactStrictMode: true,
  
    redirects: async () => {
      return [
        {
          source: '/home',
          destination: '/',  // Redirige a la ruta principal
          permanent: true,    // "true" si es una redirección permanente
        },
      ];
    },
  };
  