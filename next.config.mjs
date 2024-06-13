// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */

const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/gallery-wall',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;