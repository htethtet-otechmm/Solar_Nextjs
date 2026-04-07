import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
