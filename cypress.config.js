const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "video": true,
  "screenshotOnRunFailure": true,
  "chromeWebSecurity": false,
  "pageLoadTimeout": 60000,
  "requestTimeout": 60000,
  "responseTimeout": 60000,
  "defaultCommandTimeout": 20000,
  "retries": {
    "runMode": 0,
    "openMode": 0
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
