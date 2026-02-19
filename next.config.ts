import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
