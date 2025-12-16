const { LoginPage } = require('../pageobjects/LoginPage');
const { DashboardPage } = require('../pageobjects/DashboardPage');
const { CheckoutPage } = require('../pageobjects/CheckoutPage');
const { LandOnCheckoutPage } = require('../pageobjects/LandOnCheckoutPage');
const { OrderDetailsPage } = require('../pageobjects/OrderDetailsPage');
const { AllOrdersPage } = require('../pageobjects/AllOrdersPage');
const { ViewOrderDetailsPage } = require('../pageobjects/ViewOrderDetailsPage');

class POManager {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.checkoutPage = new CheckoutPage(this.page);
        this.landOnCheckoutPage = new LandOnCheckoutPage(this.page);
        this.orderDetailsPage = new OrderDetailsPage(this.page);
        this.allOrderPage = new AllOrdersPage(this.page);
        this.viewOrderDetailsPage = new ViewOrderDetailsPage(this.page);
    }
    getLoginPage() {
        return this.loginPage;
    }
    getDashBoardPage() {
        return this.dashboardPage;
    }
    getCheckoutPage() {
        return this.checkoutPage;
    }
    getLandOnCheckoutPage() {
        return this.landOnCheckoutPage;
    }
    getOrderDetailsPage() {
        return this.orderDetailsPage;
    }
    getAllOrdersPage() {
        return this.allOrderPage;
    }
    getViewOrderDetailsPage() {
        return this.viewOrderDetailsPage;
    }
}
module.exports = { POManager };