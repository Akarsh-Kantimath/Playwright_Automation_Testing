const {test, expect} = require('@playwright/test')
let webContext;



test.beforeAll(async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').fill('tester_akarsh@gmail.com');
    await page.locator('#userPassword').fill('Abcd1234#');
    await page.locator('#login').click();
    const products = page.locator('.card');
    await products.last().waitFor();
    await context.storageState({path : 'state.json'});
    webContext = await browser.newContext({storageState: 'state.json'});



})


test.skip('Login through Storage state', async()=>{
    const page = await webContext.newPage();
    await page.goto('https://rahulshettyacademy.com/client');
    
    const email = 'tester_akarsh@gmail.com';
    
    
    const products = page.locator('.card');
    const productName = 'ADIDAS ORIGINAL'; //ZARA COAT 3,ADIDAS ORIGINAL,iphone 13 pro
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    
    await products.last().waitFor();
    const productsTotalCount = await products.count();
    //console.log(productsTotalCount);
    for (let i = 0; i < productsTotalCount; i++){
        // if (i === 3 ){
            
        //     break;
        // }
        // console.log (await products.nth(i).locator('b').textContent());
        
        if (await products.nth(i).locator('b').textContent() === productName ) {
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }
    await page.locator('[routerlink="/dashboard/cart"]').click();
    await page.locator('.items.even.ng-star-inserted').first().waitFor();
    const productBooleanValue = await page.locator('h3').last().textContent() === productName
    expect(productBooleanValue).toBeTruthy();
    await page.locator('text=Checkout').click();
    await page.locator('.field.small input').first().fill('123');
    await page.locator('.field.small input').last().fill('rahulshettyacademy');
    await page.getByRole('textbox').nth(2).fill('tester');
    await page.locator('button').locator('text=Apply Coupon').click();
    await expect(page.locator('p').last()).toHaveText('* Coupon Applied');
    await page.locator('[placeholder="Select Country"]').pressSequentially('ro', {delay:150});
    await page.locator('.ta-results.list-group.ng-star-inserted').waitFor();
    const countryName = page.locator('section button');
    const totalNumberOfCountries = await countryName.count();
    // const Names = await countryName.allTextContents();
    // console.log(Names);
    console.log(countryName.nth(7).textContent());
    for(let i = 0; i < totalNumberOfCountries; i++){
        
        if(await countryName.nth(i).textContent() === ' Romania'){
            await countryName.nth(i).click();
            break;
        }
    }
    await expect (page.locator('[style*="lightgray"]')).toHaveText(email);
    await page.locator('.action__submit').click();
    await expect (page.locator('h1')).toHaveText(' Thankyou for the order. ');
    const orderId = await page.locator('[style*="14px"] .ng-star-inserted').textContent();
    console.log(orderId);

    await page.locator('ul [routerlink="/dashboard/myorders"]').click();
    await page.locator('tbody tr th').last().waitFor();
    const totalRows = await page.locator('tbody tr th').count();
    console.log(totalRows);
    for(let i = 0; i < totalRows; i++){
        console.log(await page.locator('tbody tr th').nth(i).textContent());
        if(orderId.includes(await page.locator('tbody tr th').nth(i).textContent())){
            await page.locator('tbody tr button').nth(i).first().click();
            break;
        }
    }
    const OrderIdFromOrderSummary = await page.locator('.col-text').textContent();
    expect(orderId.includes(OrderIdFromOrderSummary)).toBeTruthy();
    //await page.pause();

})

test('test 2', async()=>{
    const page = await webContext.newPage();
    await page.goto('https://rahulshettyacademy.com/client');
    
    const email = 'tester_akarsh@gmail.com';
    
    
    const products = page.locator('.card');
    const productName = 'ADIDAS ORIGINAL'; //ZARA COAT 3,ADIDAS ORIGINAL,iphone 13 pro
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    
    await products.last().waitFor();
    const productsTotalCount = await products.count();
    console.log(productsTotalCount);
})

