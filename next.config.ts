import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'mbox-site'; // Correct repo name

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;
