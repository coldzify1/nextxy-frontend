import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
  }
};

export default nextConfig;
