import { expect, type Locator, type Page } from '@playwright/test';

export class ViewOrderDetailsPage {
    page : Page;
    OrderIdFromOrderSummary : Locator;

    constructor(page : Page) {
        this.page = page;
        this.OrderIdFromOrderSummary = page.locator('.col-text');
    }
    async orderSummary() : Promise<any> {
        return await this.OrderIdFromOrderSummary.textContent();
    }
}
