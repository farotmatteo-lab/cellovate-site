/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // The site must only be reachable on its own domain. The Vercel aliases
  // (cellovate-site.vercel.app and the main-branch alias) permanently redirect
  // there, keeping the same path, so Google indexes a single copy of each page.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "cellovate-site(-git-main-cellovate)?\\.vercel\\.app",
          },
        ],
        destination: "https://www.cellovateadvancedpeptides.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
