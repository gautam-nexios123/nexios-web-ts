/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [process.env.NEXT_PUBLIC_HOST], // Add your allowed domains here
    },
  };
  
  module.exports = nextConfig;