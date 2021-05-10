import { Given, When, Then } from "@cucumber/cucumber";
import RegistrationPage from "../pageobjects/registration.page";
import LoginPage from "../pageobjects/login.page";

const _userDetails = {
  email: "test.nirajKumar" + Math.random() + "@gmail.com",
  title: "mr",
  firstName: "niraj",
  lastName: "kumar",
  password: "test@123",
  address: "bloomfield hills",
  city: "MI",
  state: "Michigan",
  zip: "123456",
  country: "United States",
  mobile: "9876543210",
};

When(/^I provide email id to create account$/, async (page) => {
  await LoginPage.createAccount(_userDetails.email);
});
When(/^I enter all mandatory fields & submit registraion form$/, async (page) => {
  await RegistrationPage.registerUser(
    _userDetails.title,
    _userDetails.firstName,
    _userDetails.lastName,
    _userDetails.password,
    _userDetails.address,
    _userDetails.city,
    _userDetails.state,
    _userDetails.zip,
    _userDetails.country,
    _userDetails.mobile
  );
});
