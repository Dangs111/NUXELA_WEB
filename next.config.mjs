/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/NUXELA_WEB',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Включаємо знову, оскільки ми змінили посилання для коректної роботи зі статичним експортом
  output: 'export',
}

export default nextConfig
