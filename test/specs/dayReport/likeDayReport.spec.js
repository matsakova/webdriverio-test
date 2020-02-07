const { expect } = require('chai');

const { loginAsAdmin, logoutAsAdmin } = require('./actions');


describe('DAY REPORT LIKE', () => {
  before('Login as admin', () => {
    loginAsAdmin();
    browser.pause(500);
  });

  after('Logout', () => {
    logoutAsAdmin();
    browser.pause(2000);
  });

  it('should click Diary button', () => {
    browser.$('//div[@id="site-menu"]//a[@qa="diary-link"]').click();
    browser.pause(500);
  });

  it('should click Like button', () => {
    browser.$('//div[@qa="day-report-item-0"]//button[@qa="like-button"]').click();
    browser.pause(1000);
  });

  it('should verify whether diary was liked', () => {
    const el = browser.$('//div[@qa="day-report-item-0"]//button[@qa="like-button"]').isEnabled();
    expect(el).eq(false);
  });

});