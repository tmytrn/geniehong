const STUDIO_REWRITE = {
  source: "/admin/:path*",
  destination: "/admin/desk",
};

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => [STUDIO_REWRITE],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};
