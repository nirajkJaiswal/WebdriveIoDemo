import $ from "webdriverio/build/commands/browser/$";

class ProductsListPage {
  get productPrice() {
    return $("#our_price_display");
  }
  get btnAddToCart() {
    return $("#add_to_cart");
  }
  get proceedToCheckout()
  {
      return $('#layer_cart [title="Proceed to checkout"]');
  }

  async addProductInCart() {
    await (await this.btnAddToCart).click();
    return this;
  }
  async proceed() {
    await (await this.proceedToCheckout).waitForClickable();
    await (await this.proceedToCheckout).click();
  }
}

export default new ProductsListPage();
