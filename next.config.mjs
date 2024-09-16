/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SERVICE_KEY: process.env.NEXT_PUBLIC_SERVICE_KEY,
  },
};

export default nextConfig;