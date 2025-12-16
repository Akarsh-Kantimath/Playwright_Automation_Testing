import { expect, type Locator, type Page } from '@playwright/test';

export class AllOrdersPage {
    page : Page;
    orderTable : Locator;
    orderTableButton : Locator;

    constructor(page : Page) {
        this.page = page;
        this.orderTable = page.locator('tbody tr th');
        this.orderTableButton = page.locator('tbody tr button')
    }
    async orderPageLoad() {
        await this.orderTable.last().waitFor();
    }
    async viewOrderDetails(orderId : any) {
        const totalRows = await this.orderTable.count();
        console.log(totalRows);
        for (let i = 0; i < totalRows; i++) {
            console.log(await this.orderTable.nth(i).textContent());
            if (orderId.includes(await this.orderTable.nth(i).textContent())) {
                await this.orderTableButton.nth(i).first().click();
                break;
            }
        }
    }
}
