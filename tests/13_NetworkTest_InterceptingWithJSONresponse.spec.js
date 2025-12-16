const { test, expect, request } = require('@playwright/test')
const { APIUtils } = require('../utils/APIUtils')

const loginPayload = { userEmail: "tester_akarsh@gmail.com", userPassword: "Abcd1234#" }
let response;
const orderPayload = {
  orders: [
    {
      country: "Afghanistan",
      productOrderedId: "68a961719320a140fe1ca57c"
    }
  ]
}
let fakePayloadOrders = {data:[],message:"No Orders"}




test.beforeAll(async () => {


  const apiContext = await request.newContext();
  const apiUtils = new APIUtils(apiContext, loginPayload);
  response = await apiUtils.createOrder(orderPayload);




})

test('E2E test', async ({ page }) => {


  await page.addInitScript(value => {
    window.localStorage.setItem('token', value)
  }, response.token);


  const email = 'tester_akarsh@gmail.com';
  const products = page.locator('.card');
  const productName = 'ADIDAS ORIGINAL'; //ZARA COAT 3,ADIDAS ORIGINAL,iphone 13 pro
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

  await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*',
    async route => {
        const response = await page.request.fetch(route.request());
        let body = JSON.stringify(fakePayloadOrders);
        route.fulfill({
            response,
            body,
        });
    
    }
  )

  await page.locator('ul [routerlink="/dashboard/myorders"]').click();
  await page.waitForResponse('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*');
  console.log(await page.locator('.mt-4').textContent());
  
});