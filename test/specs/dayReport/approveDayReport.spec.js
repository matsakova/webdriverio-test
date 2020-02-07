const { expect } = require('chai');

const { loginAsAdmin, logoutAsAdmin } = require('./actions');


describe('DAY REPORT APPROVE', () => {
  before('Login as admin', () => {
    loginAsAdmin();
    browser.pause(2000);
  });

  after('Logout', () => {
    logoutAsAdmin();
    browser.pause(2000);
  });

  it('should click Diary button', () => {
    browser.$('//div[@id="site-menu"]//a[@qa="diary-link"]').click();
    browser.pause(500);
  });

  it('should click Approve button', () => {
    browser.$('//div[@qa="day-report-item-0"]//button[@qa="approve-button"]').click();
    browser.pause(1000);
  });

  it('should verify diary was approved', () => {
    browser.$('//div[@qa="day-report-item-0"]//span[@qa="approved-mark"]').isExisting();
    browser.pause(500);
  });

});