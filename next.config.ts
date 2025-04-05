import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '' : '',
  assetPrefix: isProd ? '' : '',
  trailingSlash: true,
};

export default nextConfig;
