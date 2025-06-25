/** @type {import('next').NextConfig} */
import NextFederationPlugin from "@module-federation/nextjs-mf";

const remoteNextAppUrl =
  process.env.REMOTE_NEXT_APP_URL || "http://localhost:3002";

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config, options) {
    const { isServer } = options;
    const remotes = {};
    const federatedConfig = {
      name: "mfe",
      filename: "static/chunks/remoteEntry.js",
      remotes: remotes,
      shared: {
        "styled-components": { singleton: true, eager: true },
      },
      exposes: {
        "./app": "./pages/index.tsx",
        "./ChartView": "./pages/ChartView/index.tsx",
      },
      extraOptions: {}, // Add appropriate options here
    };
    config.plugins.push(new NextFederationPlugin(federatedConfig));
    return config;
  },
};

export default nextConfig;
