// @ts-check
const {createVanillaExtractPlugin} = require("@vanilla-extract/next-plugin")
const withInterceptStdout = require("next-intercept-stdout")

const withVanillaExtract = createVanillaExtractPlugin()

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  /* config options here */
  pageExtensions: ["tsx", "ts"],
}

const config = withVanillaExtract(nextConfig)

const blacklistedLogMessages = [
  "[webpack.cache.PackFileCacheStrategy] Serializing big strings",
  "Expectation Violation: Duplicate atom key",
]

module.exports = module.exports =
  process.env.NODE_ENV === "development"
    ? withInterceptStdout(config, (text = "") => {
        return blacklistedLogMessages.some((msg) => text.includes(msg))
          ? ""
          : text
      })
    : config
