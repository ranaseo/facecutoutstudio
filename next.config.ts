import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Keep the same URL shape as the old WordPress site (/pricing/ not /pricing)
  trailingSlash: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // Page removed in October 2026; keep the old link working
      { source: "/face-cutout-design-service", destination: "/", permanent: true },
      // Old WordPress paths that should never 404 on the new host
      { source: "/wp-content/uploads/og-face-cutout-studio.jpg", destination: "/og-face-cutout-studio.jpg", permanent: true },
      { source: "/feed", destination: "/", permanent: true },
      // Old WordPress sitemap addresses
      { source: "/wp-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/page-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: false },
      { source: "/wp-admin/:path*", destination: "/", permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
