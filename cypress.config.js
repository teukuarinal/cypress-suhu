const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  // Konfigurasi desktop viewport
  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
    baseUrl: "https://saucedemo.com/",
    setupNodeEvents(on, config) {
    },
  },

  // Browser settings untuk desktop
  browser: "chrome",
  chromeWebSecurity: false,
});
