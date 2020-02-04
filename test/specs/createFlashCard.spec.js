const { expect } = require('chai');

const { URL_LOGIN, pageLoginSelectors, adminData, cardsPageData, flashCardsSelectors } = require('./register_data');

describe('FLASH GROUP CREATE', () => {
  before('Login as admin', () => {
    browser.url(URL_LOGIN);
    browser.$('//form//input[@name="email"]').setValue('admin@test.com');
    browser.$('//form//input[@name="password"]').setValue('11111');
    browser.$('//form//button[@type="submit"]').click();
    browser.pause(1000);
  });

  after('AFTER', () => {
    browser.pause(3000);
  });

  it('should click top menu Cards', () => {
    browser.$('//div[@id="site-menu"]//a[@qa="cards-link"]').click();
  });

  it('should click Create new FlashGroup button', () => {
    browser.$('//button[@qa="flash-create-new-group"]').click();
    browser.pause(500);
  });

  it('should check if modal form is open', () => {
    const el = browser.$('//div[contains(@class, "sidepanel")]');
    expect(el.isDisplayed()).true;
  });

  it('should check if modal form title is correct', () => {
    const actualText = browser.$('//div[contains(@class, "sidepanel")]//*[@class="modal-title"]').getText();
    const expectedText = 'Create Flash Group';
    expect(actualText).eq(expectedText);
  });

  it('should fill out input group name', () => {
    const el = browser.$('//div[contains(@class, "sidepanel")]//input[@name="name"]');
    el.setValue('My group name 555');
  });

  it('should fill out input group description', () => {
    const el = browser.$('//div[contains(@class, "sidepanel")]//input[@name="description"]');
    el.setValue('7777777');
  });

  it('should submit form', () => {
    const el = browser.$('//div[contains(@class, "sidepanel")]//button[@type="submit"]');
    el.click();
    browser.pause(500);
  });

  it('should first item in the list be equal created group title', () => {
    const actualTitle = browser.$('//div[@qa="flash-group-list "]//h4/a').getText();
    const expectedTitle = 'My group name 555';
    expect(actualTitle).eq(expectedTitle);
  });

  it('should first item in the list be equal created group description', () => {
    const actualDescription = browser.$('//div[@qa="flash-group-list "]//div[@qa="description"]').getText();
    const expectedDescription = '7777777';
    expect(actualDescription).eq(expectedDescription);
  });

  it('should verify created title group is clickable', () => {
    const el = browser.$('//div[@qa="flash-group-list "]//h4/a');
    el.click();
    browser.pause(300);
  });

  it('should clicked group have correct title', () => {
    const actual = browser.$('h1').getText();
    const expected = 'My group name 555';
    expect(actual).eq(expected);
  });
  
});