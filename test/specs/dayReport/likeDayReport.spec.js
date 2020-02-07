const { expect } = require('chai');

const { loginAsAdmin, logout, clickDiaryButton } = require('./actionsDayReport');

const { likeSelectors } = require('./dataDayReport');


describe('DAY REPORT LIKE', () => {
  before('Login as admin', () => {
    loginAsAdmin();
    browser.pause(500);
  });

  after('Logout', () => {
    logout();
    browser.pause(2000);
  });

  it('should click Diary button', () => {
    clickDiaryButton ();
  });

  it('should click Like button', () => {
    browser.$(likeSelectors.likeButton).click();
    browser.pause(1000);
  });

  it('should verify whether diary was liked', () => {
    const el = browser.$(likeSelectors.likeMark).isEnabled();
    expect(el).eq(false);
  });

});