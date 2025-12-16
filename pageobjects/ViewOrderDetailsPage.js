class ViewOrderDetailsPage {
    constructor(page) {
        this.page = page;
        this.OrderIdFromOrderSummary = page.locator('.col-text');
    }
    async orderSummary() {
        return await this.OrderIdFromOrderSummary.textContent();
    }
}
module.exports = { ViewOrderDetailsPage }