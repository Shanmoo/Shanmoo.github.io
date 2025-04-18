import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: isProd ? '' : '',
  images: {
	  unoptimized:true,
  },
};

export default nextConfig;
