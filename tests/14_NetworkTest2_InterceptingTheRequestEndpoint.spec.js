const {test, expect} = require('@playwright/test')

test.skip('E2E test', async({browser})=>{
    const email = 'tester_akarsh@gmail.com';
    const context = await browser.newContext();
    const page = await context.newPage();
    const products = page.locator('.card');
    const productName = 'ADIDAS ORIGINAL'; //ZARA COAT 3,ADIDAS ORIGINAL,iphone 13 pro
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').fill(email);
    await page.locator('#userPassword').fill('Abcd1234#');
    await page.locator('#login').click();
    await products.last().waitFor();
    await page.locator('[routerlink="/dashboard/myorders"]').click();
    await page.route('https://rahulshettyacademy.com/client/#/dashboard/order-details/*', 
        route => route.continue({url : 'https://rahulshettyacademy.com/client/#/dashboard/order-details/692463455008f6a9093760e3'}));

    await page.locator('button:has-text("View")').first().click();
    //await page.pause();
    await expect(page.locator('.blink_me')).toHaveText('You are not authorize to view this order');


})