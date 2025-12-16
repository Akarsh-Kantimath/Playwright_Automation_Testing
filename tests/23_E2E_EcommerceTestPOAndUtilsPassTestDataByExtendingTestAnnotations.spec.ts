import {test, expect } from '@playwright/test';
import { customTest } from '../utils_ts/test-base';
import { POManager } from '../pageobjects_ts/POManager';

const dataset = JSON.parse(JSON.stringify(require('../utils/placeorderTestData.json')))

    customTest(`E2E test of product with test annotation data pass`, async ({ browser, testDataForOrder }) => {

        const context = await browser.newContext();
        const page = await context.newPage();

        const poManager = new POManager(page);

        //LoginPage.js
        const loginPage = poManager.getLoginPage();
        await loginPage.goTo();
        await loginPage.validLogin(testDataForOrder.username, testDataForOrder.password);

        //DashboardPage.js
        const dashboardPage = poManager.getDashBoardPage();
        await dashboardPage.dashboardPageLoad();
        await dashboardPage.searchProductAddCart(testDataForOrder.productName);
        await dashboardPage.navigateToCart();

        //CheckoutPage.js
        const checkoutPage = poManager.getCheckoutPage();
        await checkoutPage.checkOutPageLoad();
        await checkoutPage.productNameAssertionAndCheckout(testDataForOrder.productName);

        //LandOnCheckoutPage.js
        const landOnCheckoutPage = poManager.getLandOnCheckoutPage();
        await landOnCheckoutPage.fillCartDetails(testDataForOrder.username);

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
