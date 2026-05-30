/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  eslint: {
    // הקוד נבדק בנפרד; לא חוסמים build על אזהרות lint
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
