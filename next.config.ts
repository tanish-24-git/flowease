import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Optional: skips ESLint during build
  },
};

export default nextConfig;