/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: 'http://localhost:8080/api/:path*'
      }
    ]
  },
  images: {
    remotePatterns: [{
      hostname: 'xdcgqdmfytknfwfiixza.supabase.co',
    }]
  }
}

module.exports = nextConfig
