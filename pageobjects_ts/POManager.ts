
import { LoginPage } from "../pageobjects_ts/LoginPage";
import { DashboardPage } from "../pageobjects_ts/DashboardPage"
import { CheckoutPage } from "../pageobjects_ts/CheckoutPage";
import { LandOnCheckoutPage } from "../pageobjects_ts/LandOnCheckoutPage";
import { OrderDetailsPage } from "../pageobjects_ts/OrderDetailsPage";
import { AllOrdersPage } from "../pageobjects_ts/AllOrdersPage";
import { ViewOrderDetailsPage } from "../pageobjects_ts/ViewOrderDetailsPage";
import { Page } from "@playwright/test";

export class POManager {
    loginPage : LoginPage;
    dashboardPage : DashboardPage;
    checkoutPage : CheckoutPage;
    landOnCheckoutPage : LandOnCheckoutPage;
    orderDetailsPage : OrderDetailsPage;
    allOrderPage : AllOrdersPage;
    viewOrderDetailsPage : ViewOrderDetailsPage;
    page : Page;

    constructor(page : Page) {
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
