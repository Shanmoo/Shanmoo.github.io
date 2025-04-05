import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: isProd ? '/shanmoo.github.io/' : '',
};

export default nextConfig;
