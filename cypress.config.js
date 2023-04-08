const { defineConfig } = require("cypress");

module.exports = defineConfig({   
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here    
    },

        defaultCommandTimeout: 200000,
        pageLoadTimeout: 50000,
        responseTimeout: 45000,
        requestTimeout: 6500,
        trashAssetsBeforeRuns: false,

        
    "reporter": "cypress-multi-reporters",
    "reporterOptions": {
      "reporterEnabled": "mochawesome",
      "mochawesomeReporterOptions": {
        "reportDir": "cypress/reports/mochawesome-report",
        "quite": true,
        "overwrite": false,
        "html": false,
        "json": true
     },
    },
    
    "env":{
        "url":"10.184.1.72"
    },
  
},
  
});
