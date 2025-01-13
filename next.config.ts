import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/frontend/index.html",
      },
    ];
  },
};

export default nextConfig;
