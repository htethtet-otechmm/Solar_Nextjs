import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  basePath: "/prometex",

  async redirects() {
    return [
      {
        source: "/",
        destination: "/prometex",
        basePath: false,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
