const { expect } = require('chai');

const { URL_REGISTER, URL_LOGIN, user, page, pageLoginSelectors, pageRegisterSelectors } = require('./register_data');

describe('Register, Login , Profile pages', () => {
  it('should have the right title', () => {
    browser.url(URL_REGISTER);
    const actualTitle = browser.getTitle();
    expect(actualTitle).equal(page.title);
  });

  it('should have a correct title', () => {
    const actual = $(pageRegisterSelectors.h1).getText();
    expect(actual).equal(page.h1);
  });

  it('should have a correct description', () => {
    const actual = $(pageRegisterSelectors.description).getText();
    expect(actual).equal(page.description);
  });

  it('should have a correct Submit button text', () => {
    const actual = $(pageRegisterSelectors.submitButton).getText();
    expect(actual).equal(page.buttonText);
  });

  it('should fill First name field', () => {
    const element = $(pageRegisterSelectors.firstNameInput);
    element.setValue(user.firstName);
  });

  it('should fill Last name field', () => {
    const element = $(pageRegisterSelectors.lastNameInput);
    element.setValue(user.lastName);
  });

  it('should fill Cell phone number field', () => {
    const element = $(pageRegisterSelectors.phoneInput);
    element.setValue(user.cellPhoneNumber);
  });

  it('should fill Email field', () => {
    const element = $(pageRegisterSelectors.emailInput);
    element.setValue(user.email);
  });

  it('should fill Password field', () => {
    const element = $(pageRegisterSelectors.passwordInput);
    element.setValue(user.password);
  });

  it('should fill up About field', () => {
    const element = $(pageRegisterSelectors.aboutInput);
    element.setValue(user.about);
  });

  it('should fill up My goals field', () => {
    const element = $(pageRegisterSelectors.goalsInput);
    element.setValue(user.goals);
  });

  it('should fill up English level field', () => {
    const element = $(pageRegisterSelectors.englishLevelInput);
    element.selectByVisibleText(user.language);
  });

  it('should click Submit button', () => {
    const element = $(pageRegisterSelectors.submitButton);
    element.click();
  });

  it('should fill Email field on Login page', () => {
    browser.newWindow(URL_LOGIN);
    const element = $(pageLoginSelectors.emailInput);
    element.setValue(user.email);
  });

  it('should fill Password field', () => {
    const element = $(pageLoginSelectors.passwordInput);
    element.setValue(user.password);
  });

  it('should click Login button', () => {
    const element = $(pageLoginSelectors.loginButton);
    element.click();
  });

});