import $ from "webdriverio/build/commands/browser/$";
import OrderAddressPage from '../pageobjects/order.address';

class OrderSummaryPage {
  get proceedToCheckout() {
    return $('.cart_navigation.clearfix [title="Proceed to checkout"]');
  }

  async proceed() {
    console.log("============================================");
    browser.execute(function(){
      this.proceedToCheckout.waitForClickable();
     this.proceedToCheckout.click();
  });
    return OrderAddressPage;
  }
}

export default new OrderSummaryPage();
