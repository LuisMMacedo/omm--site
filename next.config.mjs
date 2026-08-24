import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Este projeto vive num subdiretório com outros lockfiles ao redor;
  // fixa a raiz de tracing no próprio omm-web.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
