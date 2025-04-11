import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    eslint: {
        ignoreDuringBuilds: false,
    },
    experimental: {
        serverActions: {
            bodySizeLimit: '10mb',
        },
    },
};
export default nextConfig;
