import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "seal-centralflorida.bbb.org",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
