const { expect } = require('chai');

const { loginAsAdmin, logout, clickDiaryButton } = require('./actionsDayReport');

const { deleteSelectors } = require('./dataDayReport');


describe('DAY REPORT DELETE', () => {
  before('Login as admin', () => {
    loginAsAdmin();
    browser.pause(500);
  });

  after('Logout as admin', () => {
    logout();
    browser.pause(2000);
  });

  it('should click Diary button', () => {
    clickDiaryButton ();
  });

  it('should click Delete button', () => {
    browser.$(deleteSelectors.deleteButton).click();
    browser.pause(1000);
  });

});