/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    // Allow imports from the `src` directory
    config.resolve.modules.push(path.resolve('./src'));
    return config;
  },
};

export default nextConfig;