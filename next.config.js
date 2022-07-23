// @ts-check
const {createVanillaExtractPlugin} = require("@vanilla-extract/next-plugin")

const withVanillaExtract = createVanillaExtractPlugin()

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  /* config options here */
  pageExtensions: ["tsx", "ts"],
}

module.exports = withVanillaExtract(nextConfig)
