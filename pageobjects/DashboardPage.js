class DashboardPage {
    constructor(page) {
        this.page = page;
        this.products = page.locator('.card-body');
        this.cart = page.locator('[routerlink="/dashboard/cart"]');
        this.listedProducts = page.locator('.card-body');
    }
    async dashboardPageLoad() {
        await this.listedProducts.last().waitFor();
    }
    async searchProductAddCart(productName) {
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
module.exports = { DashboardPage };