const {test, expect} = require('@playwright/test')

test("Let's Shop site", async ({page})=> {
    const firstNameReqError = page.locator('.invalid-feedback').first();
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    console.log(await page.title());
    //Below is the flow to registering the user
    // await page.locator('.text-reset').click();
    // await page.locator('.btn.btn-block.login-btn').click();
    // console.log(await page.locator('.invalid-feedback').first().textContent());
    // await expect(firstNameReqError).toContainText('Name is required');
    // await page.locator('#firstName').fill('TesterAkarsh');
    // await page.locator('#lastName').fill('Rere')
    // await page.locator('#userEmail').fill('tester_akarsh@gmail.com');
    // await page.locator('#userMobile').fill('9784514657');
    // await page.locator('#userPassword').fill('Abcd1234#');
    // await page.locator('#confirmPassword').fill('Abcd1234#');
    // await page.locator('[type="checkbox"]').click();
    // await page.locator('#login').click();
    // await page.locator('.btn.btn-primary').click();
    //Here the registration of new user ends.
    await page.locator('#userEmail').fill('tester_akarsh@gmail.com');
    await page.locator('#userPassword').fill('Abcd1234#');
    await page.locator('[value="Login"]').click();
    //await page.waitForLoadState('networkidle');
    //console.log(await page.title());
    
    //console.log(await page.locator('div b').nth(1).textContent());
    
    await page.locator('div b').last().waitFor();

    const listOfAllProduct = await page.locator('div b').allTextContents();
    console.log(listOfAllProduct);





});