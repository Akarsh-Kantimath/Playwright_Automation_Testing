const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');

test('E2E test', async ({ browser }) => {

    const username = 'tester_akarsh@gmail.com';
    const password = 'Abcd1234#';
    const productName = 'ADIDAS ORIGINAL'; //ZARA COAT 3,ADIDAS ORIGINAL,iphone 13 pro
    const context = await browser.newContext();
    const page = await context.newPage();

    const poManager = new POManager(page);

    //LoginPage.js
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(username, password);

    //DashboardPage.js
    const dashboardPage = poManager.getDashBoardPage();
    await dashboardPage.dashboardPageLoad();
    await dashboardPage.searchProductAddCart(productName);
    await dashboardPage.navigateToCart();

    //CheckoutPage.js
    const checkoutPage = poManager.getCheckoutPage();
    await checkoutPage.checkOutPageLoad();
    await checkoutPage.productNameAssertionAndCheckout(productName);

    //LandOnCheckoutPage.js
    const landOnCheckoutPage = poManager.getLandOnCheckoutPage();
    await landOnCheckoutPage.fillCartDetails(username);

    //OrderDetailsPage.js
    const orderDetailsPage = poManager.getOrderDetailsPage();
    await orderDetailsPage.orderDetailsAsserions();
    const orderId = await orderDetailsPage.getOrderId();
    console.log(orderId);
    await orderDetailsPage.allOrderDetailsPage();

    //AllOrdersPage.js
    const allOrdersPage = poManager.getAllOrdersPage();
    await allOrdersPage.orderPageLoad();
    await allOrdersPage.viewOrderDetails(orderId);

    //ViewOrderDetailsPage.js
    const viewOrderDetailsPage = poManager.getViewOrderDetailsPage();
    const OrderIdFromOrderSummary = await viewOrderDetailsPage.orderSummary();
    expect(orderId.includes(OrderIdFromOrderSummary)).toBeTruthy();

    //await page.pause();
});