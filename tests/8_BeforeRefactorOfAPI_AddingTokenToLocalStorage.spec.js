const{test, expect, request} = require('@playwright/test')
const loginPayload = {
  userEmail: "tester_akarsh@gmail.com",
  userPassword: "Abcd1234#"
}
let token;

test.beforeAll(async()=>{

    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',{
        data: loginPayload
    })
    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
    token = loginResponseJson.token;
    console.log(token);

})

test('before refactor of API with Utils file adding token to local storage and logging in', async({page})=>{

    await page.addInitScript( value => {
        window.localStorage.setItem('token',value);
    }, token)

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

})