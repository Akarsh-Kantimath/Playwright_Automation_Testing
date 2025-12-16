const { expect } = require("@playwright/test");
class LandOnCheckoutPage {
    constructor(page) {
        this.page = page;
        this.cvvCode = page.locator('.field.small input').first();
        this.applyCoupon = page.locator('.field.small input').last();
        this.nameOnCard = page.getByRole('textbox').nth(2);
        this.applyCouponButton = page.locator('button').locator('text=Apply Coupon');
        this.couponMessage = page.locator('p').last();
        this.countryField = page.locator('[placeholder="Select Country"]');
        this.countryListSuggestion = page.locator('.ta-results.list-group.ng-star-inserted');
        this.countryName = page.locator('section button');
        this.greyText = page.locator('[style*="lightgray"]');
        this.placeOrderButton = page.locator('.action__submit');
    }
    async fillCartDetails(username) {
        await this.cvvCode.fill('123');
        await this.applyCoupon.fill('rahulshettyacademy');
        await this.nameOnCard.fill('tester');
        await this.applyCouponButton.click();
        await expect(this.couponMessage).toHaveText('* Coupon Applied');
        await this.countryField.pressSequentially('ro', { delay: 150 });
        await this.countryListSuggestion.waitFor();
        for (let i = 0; i < await this.countryName.count(); i++) {
            if (await this.countryName.nth(i).textContent() === ' Romania') {
                await this.countryName.nth(i).click();
                break;
            }
        }
        await expect(this.greyText).toHaveText(username);
        await this.placeOrderButton.click();
    }
}
module.exports = { LandOnCheckoutPage };