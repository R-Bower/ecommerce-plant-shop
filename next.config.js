// @ts-check
const {createVanillaExtractPlugin} = require("@vanilla-extract/next-plugin")

const withVanillaExtract = createVanillaExtractPlugin()

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  /* config options here */
}

module.exports = withVanillaExtract(nextConfig)
