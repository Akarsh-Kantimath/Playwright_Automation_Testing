import { expect, type Locator, type Page } from '@playwright/test';

export class DashboardPage {
    page : Page;
    products : Locator;
    cart : Locator;
    listedProducts : Locator;

    constructor(page : Page) {
        this.page = page;
        this.products = page.locator('.card-body');
        this.cart = page.locator('[routerlink="/dashboard/cart"]');
        this.listedProducts = page.locator('.card-body');
    }
    async dashboardPageLoad() {
        await this.listedProducts.last().waitFor();
    }
    async searchProductAddCart(productName : string) {
        const productsTotalCount = await this.products.count();
        console.log(productsTotalCount);
        for (let i = 0; i < productsTotalCount; i++) {
            if (await this.products.nth(i).locator('b').textContent() === productName) {
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
    }
    async navigateToCart() {
        await this.cart.click();
    }
}
