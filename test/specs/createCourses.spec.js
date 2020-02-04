const { expect } = require('chai');

const { URL_LOGIN, pageLoginSelectors, adminData, coursesPageAnswers, coursesPageSelectors} = require('./register_data');

describe('CREATE COURSES', () => {
  before('Login as admin', () => {
    browser.url(URL_LOGIN);
    browser.$('//form//input[@name="email"]').setValue('admin@test.com');
    browser.$('//form//input[@name="password"]').setValue('11111');
    browser.$('//form//button[@type="submit"]').click();
    browser.pause(1000);
  });

  it('should click Courses button', () => {
    browser.$('//div[@id="site-menu"]//a[@qa="courses-link"]').click();
    browser.pause(1000);
  });

  it('should click Create new Course button', () => {
    browser.$('//div[@class="form-group"]//a').click();
    browser.pause(1000);
  });

  it('should fill out Course name field', () => {
    const element = browser.$('//form//input[@name="name"]');
    element.setValue('new new course');
  });

  it('should fill out Course description field', () => {
    const element = browser.$('//form//input[@name="description"]');
    element.setValue('abc');
  });

  it('should choose one option in Access type dropdown', () => {
    const dropdownList = browser.$('//form//select[@name="accessType"]');
    dropdownList.selectByVisibleText('All');
  });

  it('should click Create button', () => {
    browser.$('//form//button[@type="submit"]').click();
    browser.pause(1000);
  });


});