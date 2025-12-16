// @ts-check
const { defineConfig, devices } = require('@playwright/test');

const config = ({
  testDir : './tests',
  timeout : 300 * 1000,
  expect : {
      timeout : 5 * 1000,
  },
  reporter : 'html',
  use : {
      browserName: 'webkit',
      headless: true,
      screenshot: 'on', //'off', 'on', 'only-on-failure'  //'on' - captures screenshot after each test.
      trace: 'retain-on-failure' //'on', 'off' , 'retain-on-failure'    
  },
});

module.exports = config

