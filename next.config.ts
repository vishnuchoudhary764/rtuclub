import type { NextConfig } from "next";

const nextConfig: NextConfig = {

   eslint: {
    ignoreDuringBuilds: true, // skips linting when building
  },
};

export default nextConfig;
