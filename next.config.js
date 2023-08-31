/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.sanity.io"],
    },
    experimental: {
        instrumentationHook: true,
    },
};

module.exports = nextConfig;
