
class RegistrationPage extends BasePage {
  get mrTitle() {
    return $("#uniform-id_gender1");
  }
  get mrsTitle() {
    return $("#uniform-id_gender2");
  }
  get firstName() {
    return $("#customer_firstname");
  }
  get lastName() {
    return $("#customer_lastname");
  }
  get password() {
    return $("#passwd");
  }
  get dobDays() {
    return $("#days");
  }
  get dobMonth() {
    return $("#months");
  }
  get dobYear() {
    return $("#years");
  }
  get address1() {
    return $("#address1");
  }
  get city() {
    return $("#city");
  }
  get ddState() {
    return $("#id_state");
  }
  get zipCode() {
    return $("#postcode");
  }
  get mobile() {
    return $("#phone_mobile");
  }
  get btnSubmit() {
    return $("#submitAccount");
  }

  registerUser(title,firstName,lastName,password,address1,city,state,zipCode,mobile)
  {
      String(title).toLocaleLowerCase=="mr"? this.mrTitle.click() : this.mrsTitle.click();
      this.firstName.setValue(firstName);
      this.lastName.setValue(lastName);
      this.password.setValue(password);
      this.dobDays.selectByAttribute('value', day);
      this.dobMonth.selectByAttribute('value', month);
      this.dobYear.selectByAttribute('value', year);
      this.address1.setValue(address1);
      this.city.setValue(city);
      this.state.selectByAttribute('value', state);
      this.zipCode.setValue(zipCode);
      this.country.selectByAttribute('value', country);
      this.mobile.setValue(mobile);
      this.btnSubmit.click();
  }
}
export default new RegistrationPage();