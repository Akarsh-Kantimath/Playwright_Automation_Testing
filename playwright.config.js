// @ts-check
const { defineConfig, devices } = require('@playwright/test');

const config = ({
  testDir : './tests',
  retries : 1 , // Maximum time one test can run for
  workers : 1, //Mentioning number of worker for test execution of files parallel
  timeout : 15 * 1000,
  expect : {
      timeout : 5 * 1000,
  },
  reporter : [['html'],['line'],['allure-playwright']],
  use : {
      browserName: 'chromium',
      headless: false,
      screenshot: 'on', //'off', 'on', 'only-on-failure'  //'on' - captures screenshot after each test.
      trace: 'retain-on-failure' //'on', 'off' , 'retain-on-failure'    
  },
});

module.exports = config

