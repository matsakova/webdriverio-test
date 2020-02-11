import { expect } from 'chai';

import RegisterPage from "./RegisterPage";
import LoginPage from "../login/LoginPage";
import NewUserPage from "./NewUserPage";

const emailMasha = Math.random() + "masha2@test.com";

describe('REGISTER', () => {
  before('open Register Page', () => {
    RegisterPage.open();
  });

  it('should have the right title', () => {
    const actualTitle = browser.getTitle();
    expect(actualTitle).equal('Progress Monitor');
  });

  it('should have a correct header', () => {
    const actual = RegisterPage.h1.getText();
    expect(actual).equal('User Register');
  });

  it('should have a correct description', () => {
    const actual = RegisterPage.description.getText();
    expect(actual).equal('Profiles with fictitious or dummy data will be deleted.');
  });

  it('should have a correct Submit button text', () => {
    const actual = RegisterPage.submitBtnText.getText();
    expect(actual).equal('Submit');
  });

  it('should fill out First name field', () => {
    const element = RegisterPage.firstNameField;
    element.setValue('Masha');
  });

  it('should fill out Last name field', () => {
    const element = RegisterPage.lastNameField;
    element.setValue('Popova');
  });

  it('should fill out Cell phone number field', () => {
    const element = RegisterPage.cellPhoneNumber;
    element.setValue('11111111111');
  });

  it('should fill out Email field', () => {
    const element = RegisterPage.emailField;
    element.setValue(emailMasha);
  });

  it('should fill out Password field', () => {
    const element = RegisterPage.passwordField;
    element.setValue('123456789');
  });

  it('should fill out About field', () => {
    const element = RegisterPage.aboutField;
    element.setValue('About me');
  });

  it('should fill out My goals field', () => {
    const element = RegisterPage.myGoalsField;
    element.setValue('Tell about your goals in programming, career.');
  });

  it('should fill out English level field', () => {
    const element = RegisterPage.englishLevelField;
    element.selectByVisibleText('Advanced');
  });

  it('should click Submit button', () => {
    RegisterPage.clickSubmitBtn();
    browser.pause(1000);
  });

  it('should fill out Email field on Login page', () => {
    const element = LoginPage.email;
    element.setValue(emailMasha);
  });

  it('should fill out Password field', () => {
    const element = LoginPage.password;
    element.setValue('123456789');
  });

  it('should click Login button', () => {
    const element = LoginPage.submitBtn;
    element.click();
    browser.pause(2000);
  });

  it('should check the header', () => {
    const actual = NewUserPage.h1.getText();
    const expected = "You are a new user";
    expect(actual).eq(expected);
    browser.pause(2000);
  });

});