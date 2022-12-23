const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8080",
    video: false,
    trashAssetsBeforeRuns: true,
    env: {
      failSilently: false,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
