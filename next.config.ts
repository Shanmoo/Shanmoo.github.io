import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
};

export default nextConfig;
