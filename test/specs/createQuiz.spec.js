const { expect } = require('chai');

const { URL_LOGIN, pageLoginSelectors, adminData, cardsPageData, flashCardsSelectors } = require('./register_data');

describe('QUIZ CREATE', () => {
  before('Login as admin', () => {
    browser.url(URL_LOGIN);
    browser.$('//form//input[@name="email"]').setValue('admin@test.com');
    browser.$('//form//input[@name="password"]').setValue('11111');
    browser.$('//form//button[@type="submit"]').click();
    browser.pause(1000);
  });

  it('should click top menu Quiz', () => {
    browser.$('//div[@id="site-menu"]//a[@qa="quiz-link"]').click();
  });

  it('should click Create Question Group button', () => {
    browser.$('//div[@class="form-group"]//button[@type="button"]').click();
    browser.pause(500);
  });

  it('should fill out input group name', () => {
    const el = browser.$('//input[@name="name"]');
    el.setValue('new test quiz');
  });

  it('should fill out input group description', () => {
    const el = browser.$('//input[@name="description"]');
    el.setValue('my description');
  });

  it('should fill out input acceptable mistakes', () => {
    const el = browser.$('//input[@name="acceptableMistakes"]');
    el.setValue('1');
  });

  it('should mark Active checkbox', () => {
    browser.$('//label[@for="Active"]').click();
  });

  it('should save form', () => {
    browser.$('//button[@type="submit"]').click();
    browser.pause(500);
  });

  it('should created quiz have correct title', () => {
    const actual = browser.$('//h1//i').getText();
    const expected = 'new test quiz';
    expect(actual).eq(expected);
  });
  
});