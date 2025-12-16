import { expect, type Locator, type Page } from '@playwright/test';

export class CheckoutPage {
    page : Page;
    cartDetails : Locator;
    productText : Locator;
    checkoutButton : Locator;

    constructor(page : Page) {
        this.page = page;
        this.cartDetails = page.locator('.items.even.ng-star-inserted');
        this.productText = page.locator('h3');
        this.checkoutButton = page.locator('text=Checkout');
    }
    async checkOutPageLoad() {
        await this.cartDetails.first().waitFor();
    }
    async productNameAssertionAndCheckout(productName : string) {
        const productBooleanValue = await this.productText.last().textContent() === productName
        expect(productBooleanValue).toBeTruthy();
        await this.checkoutButton.click();
    }
}
