import $ from "webdriverio/build/commands/browser/$";

class OrderShipingPage { 
  
  get proceedToCheckout()
  {
      return $('.cart_navigation [type="submit"]');
  }
  get chkServiceTerm()
  {
      return $('#uniform-cgv [type="checkbox"]');
  }
  async checkServiceTerm() {
    browser.execute(function(){
      this.chkServiceTerm.waitForClickable();
     this.chkServiceTerm.click();
  });
    return this;
  }
  async proceed() {
    browser.execute(function(){
      this.proceedToCheckout.waitForClickable();
     this.proceedToCheckout.click();
  });
  }
}

export default new OrderShipingPage();
