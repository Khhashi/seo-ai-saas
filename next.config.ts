import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Dette gjør at Vercel ignorerer ESLint-feil under build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Dette gjør at Vercel ignorerer TypeScript-feil under build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;