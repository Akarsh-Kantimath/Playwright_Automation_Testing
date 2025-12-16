const {test, expect} = require('@playwright/test');
const { link } = require('fs');

test('Playwright special locators', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await page.getByLabel('Check me out if you Love IceCreams!').click();
    await page.getByLabel('Gender').selectOption('Female');
    await page.getByLabel('Employed').check();
    await page.getByPlaceholder('Password').fill('Abcd1234#');
    await page.getByRole('button',{name: 'Submit'}).click();
    const bool = await page.getByText(' The Form has been submitted successfully!. ').isVisible();
    expect(bool).toBeTruthy();
    await page.getByRole('link', {name: 'Shop'}).click();
    await page.locator('app-card').filter({hasText: 'Blackberry'}).getByRole('Button',{ name: 'Add ' }).click();
    


    //await page.pause();




});