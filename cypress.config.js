const { defineConfig } = require("cypress");

(module.exports = defineConfig({
  projectId: "t925py",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})),
  {
    pluginsFile: false,
    viewportHeight: 800,
    viewportWidth: 1200,
  };
