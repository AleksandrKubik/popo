/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            }
        ],
    },
    experimental: {
        turbo: {},
    },
};

module.exports = nextConfig;