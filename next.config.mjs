const nextConfig = {
async redirects() {
    return [
      {
        source: '/',
        destination: 'https://beimpulse.com',
        permanent: true, // 301 redirect
      },
        {
        source: '/treinamentos',
        destination: 'https://beimpulse.com/treinamentos',
        permanent: true, // 301 redirect
      },
    {
        source: '/treinamentos/remunera-app',
        destination: 'https://beimpulse.com/treinamentos/remuneraApp',
        permanent: true, // 301 redirect
      },
    {
        source: '/treinamentos/empacotador-profissional',
        destination: 'https://beimpulse.com/treinamentos/curso-de-ugc-creator',
        permanent: true, // 301 redirect
      },
    {
        source: '/treinamentos/home-office',
        destination: 'https://beimpulse.com/treinamentos/profissional-de-home-office',
        permanent: true, // 301 redirect
      },
    {
        source: '/treinamentos/assistente-virtual',
        destination: 'https://beimpulse.com/treinamentos/assistente-virtual',
        permanent: true, // 301 redirect
      },
    {
        source: '/treinamentos/redes-sociais',
        destination: 'https://beimpulse.com/treinamentos/profissional-de-redes-sociais',
        permanent: true, // 301 redirect
      },
    {
        source: '/treinamentos/agente-chat',
        destination: 'https://beimpulse.com/treinamentos/agente-de-chat',
        permanent: true, // 301 redirect
      },
    {
        source: '/treinamentos/assistente-chat-suporte',
        destination: 'https://beimpulse.com/treinamentos/assistente-de-chat-suporte',
        permanent: true, // 301 redirect
      },
    {
        source: '/treinamentos/ugc-creator',
        destination: 'https://beimpulse.com/treinamentos/curso-de-ugc-creator',
        permanent: true, // 301 redirect
      },
    {
        source: '/treinamentos/telemarketing',
        destination: 'https://beimpulse.com/treinamentos/profissional-de-telemarketing',
        permanent: true, // 301 redirect
      },
    {
        source: '/treinamentos/traducao',
        destination: 'https://beimpulse.com/treinamentos/profissional-de-traducao',
        permanent: true, // 301 redirect
      },
    {
        source: '/treinamentos/digitacao',
        destination: 'https://beimpulse.com/treinamentos/profissional-de-digitacao',
        permanent: true, // 301 redirect
      },
    ];
  },
    
    images: {
      domains: ['imagedelivery.net'],
    },
  };
  
  export default nextConfig;
