const {test, expect} = require('@playwright/test')
let webContext;

test.beforeAll(async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://client-stage.payset.io/login/');
    await page.locator('#Email-').fill('ymrjyDonna_Greenfelder@yahoo.com');
    await page.locator('#Password-').fill('1aa362QXC!Nn');
    await page.getByRole('button',{name : 'Log in'}).click();
    await page.locator('[id="6-digit code-undefined"]').fill('123456');
    //await page.getByRole('button',{name : 'Confirm code'}).click();
    await page.getByRole('button',{name : 'I’ll do it later in settings'}).click();
    await context.storageState({path : 'state.json'});
    webContext = await browser.newContext({storageState: 'state.json'});


})

test('continuation test', async()=>{
    const page = await webContext.newPage();
    await page.goto('https://client-stage.payset.io/');
    await page.locator('[data-cy="DKK-wallet"]').click();
    console.log(await page.locator('.MuiTypography-root.MuiTypography-BodySmall.css-rf1u0a').textContent());
    

})

test('continuation test two', async()=>{
    const page = await webContext.newPage();
    await page.goto('https://client-stage.payset.io/');
    await page.locator('[data-cy="RON-wallet"]').click();
    console.log(await page.locator('.MuiTypography-root.MuiTypography-BodySmall.css-rf1u0a').textContent());
    

})


