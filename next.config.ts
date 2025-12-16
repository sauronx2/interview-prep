import type { NextConfig } from 'next';

const isStaticExport = process.env.BUILD_MODE === 'static';

const nextConfig: NextConfig = {
  output: isStaticExport ? 'export' : 'standalone',
  distDir: isStaticExport ? 'docs' : '.next',
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
