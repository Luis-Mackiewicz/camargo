import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "web",
  images: {
    unoptimized: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
