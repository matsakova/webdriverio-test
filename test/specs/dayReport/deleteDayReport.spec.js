const { expect } = require('chai');

const { loginAsAdmin, logoutAsAdmin } = require('./actions');


describe('DAY REPORT DELETE', () => {
  before('Login as admin', () => {
    loginAsAdmin();
    browser.pause(500);
  });

  after('Logout as admin', () => {
    logoutAsAdmin();
    browser.pause(2000);
  });

  it('should click Diary button', () => {
    browser.$('//div[@id="site-menu"]//a[@qa="diary-link"]').click();
    browser.pause(500);
  });

  it('should click Delete button', () => {
    browser.$('//div[@qa="day-report-item-0"]//button[@qa="delete-button"]').click();
    browser.pause(1000);
  });

});