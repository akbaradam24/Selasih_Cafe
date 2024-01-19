/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.tokopedia.net',
              port: '',
              pathname: '/img/KRMmCm/2022/10/7/8c53a432-2e09-482c-b3c3-877a63dd588b.jpg',
            },
          ]
    }
}

module.exports = nextConfig
