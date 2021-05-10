import $ from 'webdriverio/build/commands/browser/$';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#email') }
    get inputPassword () { return $('#passwd') }
    get btnSubmit () { return $('#SubmitLogin') }
    get createEmail(){return $('#email_create')}
    get createSubmit(){return $('#SubmitCreate')}
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

    async waitForPageLoad()
    {
        await (await browser.waitUntill(this.btnSubmit.isClickable()));
    }
    async createAccount(email)
    {
        await (await this.createEmail).setValue(email);
        await (await this.createSubmit).click();
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
