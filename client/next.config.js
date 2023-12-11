/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  env: {
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: '6LcenSwpAAAAAGjwkgzj1dfhh3LaT1tx1XiyVHUm'
  }
}

module.exports = nextConfig
