const {test, expect} = require('@playwright/test')

test('Using Playwright specific locators', async ({browser})=>{
    const context =    await browser.newContext();
    const productName = 'iphone 13 pro'; //ZARA COAT 3,ADIDAS ORIGINAL,iphone 13 pro
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.getByPlaceholder('email@example.com').fill('tester_akarsh@gmail.com');
    await page.getByPlaceholder('enter your passsword').fill('Abcd1234#');
    await page.getByRole('button',{name: 'Login'}).click();
    await page.locator('.row .col-lg-4').last().waitFor();
    await page.locator('.row .col-lg-4').filter({hasText: productName}).getByRole('button',{name: 'Add To Cart'}).click();
    await page.locator('nav li').getByRole('button', {name: 'Cart'}).click();
    await page.locator('.cart').waitFor();
    await page.getByRole('button',{name:'Checkout'}).click();
    await page.locator('.details__user').waitFor();
    await page.getByPlaceholder('Select Country').pressSequentially('ro');
    await page.locator('section').last().waitFor();
    await page.getByRole('button', {name: ' Romania'}).click();
    await page.getByText('PLACE ORDER').click();
    await expect(page.getByText(' Thankyou for the order. ')).toBeVisible();

    







    //await page.pause();
});