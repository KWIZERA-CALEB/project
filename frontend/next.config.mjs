// /** @type {import('next').NextConfig} */
// import path from 'path';

// const nextConfig = {
//   reactStrictMode: true,
//   webpack(config) {
//     config.resolve.modules.push(path.resolve('./src'));
//     return config;
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts'], // To handle TypeScript files
};

export default nextConfig;
