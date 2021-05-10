import $ from "webdriverio/build/commands/browser/$";
import $$ from "webdriverio/build/commands/browser/$$";

class PaymentPage {
  
  get cartSummary() {
    return $$("#cart_summary tbody tr");
  }
  get totalAmount() {
    return $("total_price");
  }
  async getProductDesciption(index = 0) {
    return await this.cartSummary[index].$$("td")[2].getText();
  }
  async getUnitPrice(index = 0) {
    return await this.cartSummary[index].$$("td")[3].getText();
  }
  async getUnitcount(index = 0) {
    return await this.cartSummary[index].$$("td")[3].getText();
  }
  async getTotal(index = 0) {
    return await this.cartSummary[index].$$("td")[5].getText();
  }
  async isTotalPriceDisplayed() {
    return await this.totalAmount.isDisplayed();
  }
}

export default new PaymentPage();
