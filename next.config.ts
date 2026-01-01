import type { NextConfig } from "next";

// For GitHub Pages: If your site is at username.github.io/repo-name, set this to '/repo-name'
// For root domain (username.github.io), leave it empty: ''
// You can also set it via environment variable: BASE_PATH=/your-repo-name
const basePath = process.env.BASE_PATH || '/ifcuae';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
