import $ from "webdriverio/build/commands/browser/$";
import OrderShipingPage from '../pageobjects/order.shipping';

class OrderAddressPage { 
  
  get proceedToCheckout()
  {
      return $('.cart_navigation [type="submit"]');
  }

  async proceed() {
    browser.execute(function(){
      this.proceedToCheckout.waitForClickable();
     this.proceedToCheckout.click();
  });
    return OrderShipingPage;
  }
}

export default new OrderAddressPage();
