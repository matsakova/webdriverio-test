const { expect } = require('chai');

const { loginAsStudent, logout, clickDiaryButton } = require('./actionsDayReport');
const { diaryPageSelectors, diaryPageData } = require('./dataDayReport');

describe('DAY REPORT CREATE', () => {
  before('Login as student', () => {
    loginAsStudent();
  });

  after('Logout as Student', () => {
    logout();
  });

  it('should click Diary button', () => {
    clickDiaryButton ();
  });

  it('should click Create day report button', () => {
    browser.$(diaryPageSelectors.createDayReportButton).click();
    browser.pause(300);
  });

  it('should mark the checkbox', () => {
    browser.$(diaryPageSelectors.markCheckbox).click();
  });

  it('should choose one option in Morale dropdown', () => {
    const dropdown = browser.$(diaryPageSelectors.morale);
    dropdown.selectByVisibleText(diaryPageData.morale);
  });

  it('should fill out Hours field', () => {
    const element = browser.$(diaryPageSelectors.hours);
    element.setValue(diaryPageData.hours);
  });

  it('should fill out How was your day? field', () => {
    const element = browser.$(diaryPageSelectors.howWasYourDay);
    element.setValue(diaryPageData.howWasYourDay);
  });

  it('should click Save button', () => {
    const element = browser.$(diaryPageSelectors.saveButton);
    element.click();
    browser.pause(2000);
  });

  it('should first item in the list be equal created day report description', () => {
    const actualText = browser.$(diaryPageSelectors.firstItemDescription).getText();
    const expectedText = diaryPageData.howWasYourDay;
    expect(actualText).eq(expectedText);
  });

  it('should first item in the list be equal created day report mark', () => {
    const actualText = browser.$(diaryPageSelectors.firstItemMark).getText();
    const expectedText = diaryPageData.checkBoxDescription;
    expect(actualText).eq(expectedText);
  });

});