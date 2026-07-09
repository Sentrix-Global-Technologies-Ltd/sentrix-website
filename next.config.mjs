/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Namecheap Stellar (shared hosting) serves plain files over Apache — no
  // Node.js runtime for Next SSR. The site has no API routes, no cookies()/
  // headers() usage, and no next/image dependency, so a full static export
  // is a clean fit: `npm run build` emits a self-contained `out/` folder that
  // the CI/CD deploy step rsyncs straight to the host.
  output: "export",
  // Emit `<route>/index.html` instead of `<route>.html` so a request for
  // `/about/` (or `/about`, which Apache's mod_dir resolves to the same
  // directory) is served by Apache's default DirectoryIndex with zero custom
  // .htaccess rewrite rules — the least fragile option on shared hosting.
  trailingSlash: true,
  // Required by `output: "export"` if next/image is ever introduced later
  // (there's no image optimization server to call on static hosting).
  images: { unoptimized: true },
};

export default nextConfig;
