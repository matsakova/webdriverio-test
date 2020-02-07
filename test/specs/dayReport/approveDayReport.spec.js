const { expect } = require('chai');

const { loginAsAdmin, logout, clickDiaryButton } = require('./actionsDayReport');
const { approveSelectors } = require('./dataDayReport');

describe('DAY REPORT APPROVE', () => {
  before('Login as admin', () => {
    loginAsAdmin();
    browser.pause(2000);
  });

  after('Logout', () => {
    logout();
    browser.pause(2000);
  });

  it('should click Diary button', () => {
    clickDiaryButton ();
  });

  it('should click Approve button', () => {
    browser.$(approveSelectors.approveButton).click();
    browser.pause(1000);
  });

  it('should verify diary was approved', () => {
    browser.$(approveSelectors.approvedMark).isExisting();
    browser.pause(500);
  });

});