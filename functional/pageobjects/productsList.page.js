import $ from "webdriverio/build/commands/element/$";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductsListPage {
  /**
   * define selectors using getter methods
   */
  get productList() {
    return $$(".product_list li a");
  }
  get addToCartView()
  {
      return $('#add_to_cart button')
  }
  get proceedTocheckOut()
  {
      return $('#layer_cart [title="Proceed to checkout]"')
  }
  async quickViewAndAddProduct(index = 0) {
    const item = await (await this.productList)[index];
    item.scrollIntoView();
    item.moveTo();
    item.click();
    await this.addToCart();
  }
  async addToCart()
  {
    browser.execute(function(){
         this.addToCartView.waitForClickable();
        this.addToCartView.click();
     });
  }
  async proceed()
  {
    browser.execute(function(){
         this.proceedTocheckOut.waitForClickable();
        this.proceedTocheckOut.click();
     });
  }
}

export default new ProductsListPage();
