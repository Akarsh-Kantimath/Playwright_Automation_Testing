const {test, expect} = require('@playwright/test');

test('Browser context Playwright test', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    const signInButton = page.locator('.btn.btn-info.btn-md');
    
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    await page.locator('#username').fill('rahulshetty');
    await page.locator('[name="password"]').fill('learning');
    await page.locator('.btn.btn-info.btn-md').click();
    console.log(await page.locator('[style*="block"]').textContent());
    await expect(page.locator('[style*="block"]')).toContainText('Incorrect');
    await userName.fill('');
    await userName.fill('rahulshettyacademy');
    await signInButton.click();
    //console.log(await page.locator('.card-body a').first().textContent());
    //console.log(await page.locator('.card-body a').nth(1).textContent());
    const allProductName = await page.locator('.card-body a').allTextContents();
    console.log(allProductName);

});

test('Page Playwright test', async ({page})=>
{

    await page.goto('https://google.com/');
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');
    

});

test('UI controls', async({page})=>{
    const radioButton = page.locator('.checkmark').last();
    const checkBox = page.locator('#terms');
    const blinkingText = page.locator('[href*="documents-request"]');
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const dropdown = page.locator('select.form-control');
    await dropdown.selectOption('Consultant');
    await radioButton.click();
    await page.locator('#okayBtn').click();
    await expect(radioButton).toBeChecked();
    console.log(await radioButton.isChecked());
    await checkBox.click();
    await checkBox.uncheck();
    expect (await checkBox.isChecked()).toBeFalsy();
    await expect(blinkingText).toHaveAttribute('class','blinkingText');

    //await page.pause();

});

test('Child Window Handling', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    const redirectingLink = page.locator('[href*="documents-request"]');
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    //await page.locator('[href*="documents-request"]').click();
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        redirectingLink.click()

    ]);
    const emailtext = await newPage.locator('.red').textContent();
    const rightPart = emailtext.split('@')[1]
    const domain = rightPart.split(' ')[0];
    //console.log(domain);
    await page.locator('#username').fill(domain);
    //await page.pause();
    console.log(await page.locator('#username').inputValue());
    

});


test('Codegen generated', async ({ page }) => {
  await page.goto('https://client-stage.payset.io/login/');
  await page.getByRole('textbox', { name: 'Email' }).fill('akarsh.k+924294@payset.io');
  await page.getByRole('textbox', { name: 'Password' }).fill('p0g655YSE!Nn');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('spinbutton', { name: '-digit code' }).fill('123456');
  //await page.goto('https://client-stage.payset.io/secure-account/');
  await page.getByRole('button', { name: 'I’ll do it later in settings' }).click();
  await page.getByRole('button', { name: 'A Ankunding Group Business' }).click();
  await page.getByRole('button', { name: 'Logout' }).click();
});



