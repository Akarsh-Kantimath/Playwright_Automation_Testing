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

  await page.locator('ul [routerlink="/dashboard/myorders"]').click();
  await page.locator('tbody tr th').last().waitFor();
  const totalRows = await page.locator('tbody tr th').count();
  console.log(totalRows);
  for (let i = 0; i < totalRows; i++) {
    console.log(await page.locator('tbody tr th').nth(i).textContent());
    if (response.orderId.includes(await page.locator('tbody tr th').nth(i).textContent())) {
      await page.locator('tbody tr button').nth(i).first().click();
      break;
    }
  }
  await page.pause();
  const OrderIdFromOrderSummary = await page.locator('.col-text').textContent();
  expect(response.orderId.includes(OrderIdFromOrderSummary)).toBeTruthy();

});