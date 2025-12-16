// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const { permission } = require('node:process');

const config = ({
  testDir: './tests',
  retries : 1 , // Maximum time one test can run for
  workers : 1, //Mentioning number of worker for test execution of files parallel
  timeout: 30 * 1000,
  expect: {
    timeout: 5 * 1000,
  }, 
  reporter: 'html',
  projects: [
    {
      name: 'safari_execution',
      use: {
        browserName: 'webkit',
        headless: true,
        screenshot: 'on', //'off', 'on', 'only-on-failure'  //'on' - captures screenshot after each test.
        trace: 'retain-on-failure', //'on', 'off' , 'retain-on-failure'
        //...devices['iPhone 15']     
      }
    },
    {
      name: 'chrome_execution',
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'only-on-failure', //'off', 'on', 'only-on-failure'  //'on' - captures screenshot after each test.
        trace: 'retain-on-failure', //'on', 'off' , 'retain-on-failure'
        //viewport : {width : 720, height : 720},
        //...devices['Galaxy Note 3']
        ignoreHttpsErrors:true, //Your connection is not private wrror page.
        permissions : ['geolocation'], //allow to know your location popup
        video : {mode : 'retain-on-failure'}, //'off', 'on', 'retain-on-failure', 'on-first-retry'
        contextOptions: {
          recordVideo: {
            dir: 'test-results',
          }
        }
      }
    }
  ]
});

module.exports = config

