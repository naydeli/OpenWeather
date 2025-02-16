
import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "pa3upo",

  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      config.env.googleClientId = process.env.VITE_GOOGLE_CLIENTID;
      config.env.googleClientSecret = process.env.VITE_GOOGLE_CLIENT_SECRET;
      config.env.googleRefreshToken = process.env.VITE_GOOGLE_REFRESH_TOKEN;
      return config;
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});