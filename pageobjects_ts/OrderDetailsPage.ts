import { expect, type Locator, type Page } from '@playwright/test';

export class OrderDetailsPage {
    page : Page;
    thankyouText : Locator;
    orderIdText : Locator;
    allOrderDetails : Locator;

    constructor(page : Page) {
        this.page = page;
        this.thankyouText = page.locator('h1');
        this.orderIdText = page.locator('[style*="14px"] .ng-star-inserted');
        this.allOrderDetails = page.locator('ul [routerlink="/dashboard/myorders"]');
    }
    async orderDetailsAsserions() {
        await expect(this.thankyouText).toHaveText(' Thankyou for the order. ');
    }
    async getOrderId() : Promise<any> {
        return await this.orderIdText.textContent()
    }
    async allOrderDetailsPage() {
        await this.allOrderDetails.click();
    }
}
