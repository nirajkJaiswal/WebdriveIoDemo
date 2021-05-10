import { Given, When, Then } from '@cucumber/cucumber';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import landingPage from '../pageobjects/landing.page';
import inputdata from '../data/input.data.json';
import accountPage from '../pageobjects/account.page';
import ProductListPage from '../pageobjects/productsList.page';
import OrderSummaryPage from '../pageobjects/order.summary.page';
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

When(/^I Click on Tshirt link$/, async () => {
    await accountPage.clickOnWomenLink();
});
When(/^I try to quick view first product$/, async () => {
    await ProductListPage.quickViewAndAddProduct();
});
When(/^I add item to cart and proceed to checkout$/, async () => {
    await  ProductListPage.proceed();
});
When(/^I Proceed to Payment page$/, async () => {
    await (
      await (
        await (await OrderSummaryPage.proceed()).proceed()
      ).checkServiceTerm()
    ).proceed();
});


