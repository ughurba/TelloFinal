import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1492,
  viewportHeight: 860,
  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
    baseUrl: "http://localhost:3000",
  },
});
