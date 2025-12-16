const { expect } = require("@playwright/test");
class OrderDetailsPage {
    constructor(page) {
        this.page = page;
        this.thankyouText = page.locator('h1');
        this.orderIdText = page.locator('[style*="14px"] .ng-star-inserted');
        this.allOrderDetails = page.locator('ul [routerlink="/dashboard/myorders"]');
    }
    async orderDetailsAsserions() {
        await expect(this.thankyouText).toHaveText(' Thankyou for the order. ');
    }
    async getOrderId() {
        return await this.orderIdText.textContent()
    }
    async allOrderDetailsPage() {
        await this.allOrderDetails.click();
    }
}
module.exports = { OrderDetailsPage };