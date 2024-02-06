const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      specPattern: 'cypress/e2e/tests/**/*.js'
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
  env:{
    URL:'https://naveenautomationlabs.com/opencart/index.php?route=account/register',
  }
});
