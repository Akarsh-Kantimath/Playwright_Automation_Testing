const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');
const dataset = JSON.parse(JSON.stringify(require('../utils/placeorderTestData.json')))

for (const data of dataset) {
    test(`E2E test of product ${data.productName}`, async ({ browser }) => {

        const context = await browser.newContext();
        const page = await context.newPage();

        const poManager = new POManager(page);

        //LoginPage.js
        const loginPage = poManager.getLoginPage();
        await loginPage.goTo();
        await loginPage.validLogin(data.username, data.password);

        //DashboardPage.js
        const dashboardPage = poManager.getDashBoardPage();
        await dashboardPage.dashboardPageLoad();
        await dashboardPage.searchProductAddCart(data.productName);
        await dashboardPage.navigateToCart();

        //CheckoutPage.js
        const checkoutPage = poManager.getCheckoutPage();
        await checkoutPage.checkOutPageLoad();
        await checkoutPage.productNameAssertionAndCheckout(data.productName);

        //LandOnCheckoutPage.js
        const landOnCheckoutPage = poManager.getLandOnCheckoutPage();
        await landOnCheckoutPage.fillCartDetails(data.username);

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
    })
}