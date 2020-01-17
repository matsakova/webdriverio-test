const { expect } = require('chai');

const email = 'masha2@test.com';
const firstName = 'Masha';
const lastName = 'Popova';
const cellPhoneNumber = 11111111111;
const password = '123456789';
const about = 'About me';
const goals = 'Tell about your goals in programming, career.';

describe('Register page', () => {
  before( () => {browser.url('https://stage.pasv.us/user/register');
  });

  it('should have the right title', () => {
    const actualTitle = browser.getTitle();
    const expectedTitle = 'Progress Monitor';
    expect(actualTitle).equal(expectedTitle);
  });

  it('should have a correct title', () => {
    const actual = $('h1').getText();
    const expected = 'User Register';
    expect(actual).equal(expected);
  });

  it('should have a correct description', () => {
    const actual = $('p').getText();
    const expected = 'Profiles with fictitious or dummy data will be deleted.';
    expect(actual).equal(expected);
  });

  it('should have a correct Submit button text', () => {
    const actual = $('form button').getText();
    const expected = 'Submit';
    expect(actual).equal(expected);
  });

  it('should fill First name field', () => {
    const element = $('form input[name = "firstName"]');
    element.setValue(firstName);
  });

  it('should fill Last name field', () => {
    const element = $('form input[name = "lastName"]');
    element.setValue(lastName);
  });

  it('should fill Cell phone number field', () => {
    const element = $('form input[name = "phone"]');
    element.setValue(cellPhoneNumber);
  });

  it('should fill Email field', () => {
    const element = $('form input[name = "email"]');
    element.setValue(email);
  });

  it('should fill Password field', () => {
    const element = $('form input[name = "password"]');
    element.setValue(password);
  });

  it('should fill up About field', () => {
    const element = $('form textarea[name = "about"]');
    element.setValue(about);
  });

  it('should fill up My goals field', () => {
    const element = $('form textarea[name = "goals"]');
    element.setValue(goals);
  });

  it('should fill up English level field', () => {
    const element = $('form select[name = "englishLevel"]');
    element.selectByVisibleText('Advanced');
  });

  it('should click Submit button', () => {
    const element = $('form button[type = "submit"]');
    element.click();
  });

  it('should fill Email field on Login page', () => {
    browser.newWindow('https://stage.pasv.us/user/login');
    const element = $('form input[name = "email"]');
    element.setValue(email);
  });

  it('should fill Password field', () => {
    const element = $('form input[name = "password"]');
    element.setValue(password);
  });

  it('should click Login button', () => {
    const element = $('form button[type = "submit"]');
    element.click();
  });

  it('should have a correct header', () => {
    const actual = $('h1.mb-3').getText();
    const expected = firstName + ' ' + lastName;
    expect(actual).equal(expected);
    browser.pause(3000);
  });

});