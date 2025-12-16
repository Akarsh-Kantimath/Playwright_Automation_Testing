const {test, expect} = require('@playwright/test')

test('continuation test', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    //page.route('**/graphql', route => route.abort());
    await page.goto('https://client-stage.payset.io/login/');
    await page.locator('#Email-').fill('ymrjyDonna_Greenfelder@yahoo.com');
    //page.on('request', request => console.log(request.url()));
    //page.on('response', response => console.log(response.url(), response.status()))
    await page.locator('#Password-').fill('1aa362QXC!Nn');
    await page.getByRole('button',{name : 'Log in'}).click();
    await page.locator('[id="6-digit code-undefined"]').fill('123456');
    //await page.getByRole('button',{name : 'Confirm code'}).click();
    await page.getByRole('button',{name : 'I’ll do it later in settings'}).click();
    await page.locator('[data-cy="DKK-wallet"]').click();
    console.log(await page.locator('.MuiTypography-root.MuiTypography-BodySmall.css-rf1u0a').textContent());
    //await page.screenshot({path: 'screenshot.png'});
    await page.locator('.MuiBox-root.css-7y8gaj').screenshot({path : 'partialScreenshot.png'});

})