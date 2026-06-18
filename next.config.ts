import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
  },

  output: "export",
  distDir: "web",
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
