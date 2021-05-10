
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage {
    /**
     * define selectors using getter methods
     */
    get lnkSignIn () { return $('.login') }
   
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async clickSignIn (username, password) {
        
        await (await this.lnkSignIn).click();
    }   
}

export default new LandingPage();
