import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:8080",
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});

// baseUrl: 'http://localhost:3000',
