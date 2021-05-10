import $ from "webdriverio/build/commands/browser/$";

class PaymentPage {
  get cartSummary() {
    return $$("#cart_summary tbody tr");
  }
  async getProductDesciption(index = 1) {
    return await (await this.cartSummary)[index].$$('td')[2].getText();
  }
  async getUnitPrice(index = 1) {
    return await (await this.cartSummary)[index].$$('td')[3].getText();
  }
  async getUnitcount(index = 1) {
    return await (await this.cartSummary)[index].$$('td')[4].getText();
  }
  async getTotal(index = 1) {
    return await (await this.cartSummary)[index].$$('td')[4].getText();
  }
}

export default new PaymentPage();
