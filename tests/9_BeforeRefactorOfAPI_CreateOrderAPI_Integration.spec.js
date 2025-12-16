const{test, expect, request} = require('@playwright/test')
const loginPayload = {
  userEmail: "tester_akarsh@gmail.com",
  userPassword: "Abcd1234#"
}
let token;
const createOrderPayload = {
  orders: [
    {
      country: "Uzbekistan",
      productOrderedId: "68a961959320a140fe1ca57e"
    }
  ]
}
let orderId;




test.beforeAll(async()=>{

    //Login API
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',{
        data: loginPayload
    })
    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
    token = loginResponseJson.token;
    console.log(token);

    //Create Order API
    const orderResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',{
        data: createOrderPayload,
        headers : {
            'Authorization' : token,
            'Content-Type' : 'application/json'
        }
    })
    const orderResponseJson = await orderResponse.json();
    console.log(orderResponseJson);
    orderId = orderResponseJson.orders[0];
    console.log(orderId);
})

test('before refactor of API with Utils file adding token to local storage and logging in', async({page})=>{

    await page.addInitScript( value => {
        window.localStorage.setItem('token',value);
    }, token)

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('nav button[routerlink="/dashboard/myorders"]').click();
    await page.locator('table').waitFor();
    const tableRowsCount = await page.locator('table tbody tr').count();
    const tableInfo = await page.locator('table tbody tr th');
    // for (let i = 0; i < tableRowsCount; i++){
    //     if(tableInfo.nth(i).textContent() === orderId){
    //         await page.locator('table tbody tr').nth(i).getByRole('button',{name: 'View' }).click();
    //     }
    // }
    
    //await page.pause();

})