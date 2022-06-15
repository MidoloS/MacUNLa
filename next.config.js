/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cache-backend-mcd.mcdonaldscupones.com"],
  },
  typescript: {
    ignoreDevErrors: true,
  },
};

module.exports = nextConfig;
