/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    "@mui/icons-meterial": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
};

module.exports = nextConfig;
