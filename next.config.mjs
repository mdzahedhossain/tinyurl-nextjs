/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'flowbite.com',
            port: '',
            pathname: '/docs/images/people/',
          },
        ],
        domains: ['flowbite.com'],
    },
};

export default nextConfig;
