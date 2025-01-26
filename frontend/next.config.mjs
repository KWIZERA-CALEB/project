/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    // Add src directory to resolve modules
    config.resolve.modules.push(path.resolve('./src'));

    // Ensure backward compatibility for other modules (if required)
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'), // Optional: Short alias '@'
    };

    return config;
  },
};

export default nextConfig;
