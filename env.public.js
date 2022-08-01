const dev = {
  APP_ENV: "local",
  NEXT_PUBLIC_HOST: "http://localhost:3050",
}

const prod = {
  APP_ENV: "hosted",
  NEXT_PUBLIC_HOST: "https://ecommerce-plant-shop.vercel.app",
}

module.exports = {
  dev,
  prod,
}
