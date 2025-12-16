const { test, expect } = require('@playwright/test');
class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.cartDetails = page.locator('.items.even.ng-star-inserted');
        this.productText = page.locator('h3');
        this.checkoutButton = page.locator('text=Checkout');
    }
    async checkOutPageLoad() {
        await this.cartDetails.first().waitFor();
    }
    async productNameAssertionAndCheckout(productName) {
        const productBooleanValue = await this.productText.last().textContent() === productName
        expect(productBooleanValue).toBeTruthy();
        await this.checkoutButton.click();
    }
}
module.exports = { CheckoutPage };