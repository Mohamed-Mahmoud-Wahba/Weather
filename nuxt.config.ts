import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    WEATHER_APP_SECRET: process.env.WEATHER_APP_SECRET,
    LAN: process.env.LAN_LON,
    LON: process.env.LON_LON
  },
  privateRuntimeConfig: {
    HELLO: "world in the server not the client",
  },
  css: ["~/assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
