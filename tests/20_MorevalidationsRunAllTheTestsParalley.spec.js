const { test, expect } = require('@playwright/test')

//To run the all tests paralley which are present in a single spec file
//test.describe.configure({mode:'parallel'});
test.describe.configure({mode: 'serial'});


test(('Element is hidden or visible check'), async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    // await page.goto('https://google.com');
    // await page.goBack();
    // await page.goForward();
    // await page.goBack();
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('input[value="Hide"]').click();
    await expect(page.locator('#displayed-text')).toBeHidden();

})

test('Popup handling or Dialog handling and Mouse hover scenario', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.locator('#confirmbtn').click();
    page.on('dialog', dialog => dialog.accept());
    await page.locator('.mouse-hover').hover();
    await page.getByRole('link', { name: 'Reload' }).click();

    //await page.pause();
})

test('Frame component handling', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const framePage = page.frameLocator('iframe');
    await framePage.locator('.items-center [href*=all-access]').click();
    await framePage.locator('.grid-cols-2').waitFor();
    const str =await framePage.getByText('27,227').textContent();
    console.log(str);
})

test.skip('Screenshot related', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://client-stage.payset.io');
    //await page.screenshot({path : 'paysetLoginPage.png'});
    //await page.locator('.css-1yjvs5a h1').screenshot({path : 'paysetParialScreenshot.png'});
    expect(await page.screenshot()).toMatchSnapshot('PaysetLogin.png');

})