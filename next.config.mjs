// const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SERVICE_KEY: process.env.NEXT_PUBLIC_SERVICE_KEY,
  },
};

export default withVanillaExtract(nextConfig);
