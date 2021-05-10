/**
 * sub page containing specific selectors and methods for a specific page
 */
class AccountPage {
  /**
   * define selectors using getter methods
   */
  get lnkWomen() {
    return $('[title="Women"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async clickOnWomenLink(username, password) {
    await (await this.lnkWomen).waitForClickable();
    return await (await this.lnkWomen).click();
  }
}

export default new AccountPage();
