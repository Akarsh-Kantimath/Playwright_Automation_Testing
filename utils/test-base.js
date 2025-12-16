const base = require('@playwright/test');

// Extend base test by providing testDataForOrder option.
const customtest = base.test.extend({
  testDataForOrder: {
    username: 'tester_akarsh@gmail.com',
    password: 'Abcd1234#',
    productName: 'iphone 13 pro',
  },
});

// Export the extended test so other files can use it.
module.exports = { test: customtest, expect: base.expect };