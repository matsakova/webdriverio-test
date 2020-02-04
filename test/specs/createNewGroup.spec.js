const { expect } = require('chai');

const { URL_LOGIN, pageLoginSelectors, adminData, groupsPageSelectors, groupsPageData } = require('./register_data');

describe('CREATE NEW GROUP', () => {
  before('Login as admin', () => {
    browser.url(URL_LOGIN);
    browser.$('//form//input[@name="email"]').setValue('admin@test.com');
    browser.$('//form//input[@name="password"]').setValue('11111');
    browser.$('//form//button[@type="submit"]').click();
    browser.pause(1000);
  });

  it('should click Groups button', () => {
    browser.$('//div[@id="site-menu"]//a[@qa="groups-link"]').click();
    browser.pause(1000);
  });

  it('should click Create new Group button', () => {
    browser.$('//a[@qa="create-group-button"]').click();
    browser.pause(1000);
  });

  it('should fill out Group name field', () => {
    const element = browser.$('//form//input[@name="name"]');
    element.setValue('test group1');
  });

  it('should fill out Group description field', () => {
    const element = browser.$('//form//input[@name="description"]');
    element.setValue('new description');
  });

  it('should choose one option in Access type dropdown', () => {
    const dropdown = browser.$('//form//select[@name="accessType"]');
    dropdown.selectByVisibleText('Members');
  });

  it('should click Create button', () => {
    browser.$('//form//button[@type="submit"]').click();
    browser.pause(2000);
  });

  it('should first item in the list be equal created group title', () => {
    const actualTitle = browser.$('//div[@qa="group-list"]//h4/a').getText();
    const expectedTitle = 'test group1';
    expect(actualTitle).eq(expectedTitle);
  });

  it('should first item in the list be equal created group access type', () => {
    const actualAccessType = browser.$('//div[@qa="group-list"]//span[@qa="access-type"]').getText();
    const expectedAccessType = 'Only for members';
    expect(actualAccessType).eq(expectedAccessType);
  });

  it('should verify created group is clickable', () => {
    browser.$('//div[@qa="group-list"]//h4/a').click();
    browser.pause(1000);
  });

  it('should clicked group have correct title', () => {
    const actual = browser.$('h1').getText();
    const expected = 'Group test group1';
    expect(actual).eq(expected);
  });

});