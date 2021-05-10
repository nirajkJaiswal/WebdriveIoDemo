import { Given, When, Then } from '@cucumber/cucumber';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import landingPage from '../pageobjects/landing.page';
import inputdata from '../data/input.data.json';
const username = inputdata.userName;
const password = inputdata.password;

Given(/^I am on the (\w+) page$/, async (page) => {
    await LoginPage.open()
});
When(/^User clicks on SignIn link$/, async () => {
    await landingPage.clickSignIn()
});
When(/^I login with valid username and password$/, async () => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

