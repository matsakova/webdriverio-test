const { expect } = require('chai');

const { URL_LOGIN, pageLoginSelectors, adminData, answers, pageDailyReportsSelectors, createDayReportPageSelectors } = require('./register_data');

describe('CREATE DAY REPORT', () => {
  before('Login as admin', () => {
    browser.url(URL_LOGIN);
    $(pageLoginSelectors.emailInput).setValue(adminData.login);
    $(pageLoginSelectors.passwordInput).setValue(adminData.password);
    $(pageLoginSelectors.loginButton).click();
    browser.pause(2000);
  });

  it('should click Diary button', () => {
    const element = $(pageDailyReportsSelectors.diaryButton);
    element.click();
    browser.pause(3000);
  });

  it('should check the header', () => {
    const actual = $(pageDailyReportsSelectors.h1).getText();
    const expected = 'Daily reports';
    expect(actual).equal(expected);
  });

  it('should click Create day report button', () => {
    const element = $(pageDailyReportsSelectors.createDayReportButton);
    element.click();
  });

  it('should have the right header', () => {
    const actual = $(createDayReportPageSelectors.h1).getText();
    const expected = createDayReportPageSelectors.expectedH1;
    expect(actual).equal(expected);
  });

  it('should mark the checkbox', () => {
    const element = $(createDayReportPageSelectors.checkboxInput);
    element.click();
  });

  it('should choose one option in Morale dropdown', () => {
    const dropdown = $(createDayReportPageSelectors.moraleInput);
    dropdown.selectByVisibleText(answers.morale);
  });

  it('should fill up Hours field', () => {
    const element = $(createDayReportPageSelectors.hoursInput);
    element.setValue(answers.hours);
  });

  it('should fill up How was your day? field', () => {
    const element = $(createDayReportPageSelectors.howWasYourDayInput);
    element.setValue(answers.howWasYourDay);
  });

  it('should click Save button', () => {
    const element = $(createDayReportPageSelectors.saveButton);
    element.click();
    browser.pause(2000);
  });

});