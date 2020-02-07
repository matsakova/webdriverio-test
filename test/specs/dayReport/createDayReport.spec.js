const { expect } = require('chai');

const { loginAsStudent, logoutAsStudent } = require('./actions');

describe('DAY REPORT CREATE', () => {
  before('Login as student', () => {
    loginAsStudent();
  });

  after('Logout as Student', () => {
    logoutAsStudent();
  });

  it('should click Diary button', () => {
    browser.$('//div[@id="site-menu"]//a[@qa="diary-link"]').click();
    browser.pause(300);
  });

  it('should click Create day report button', () => {
    browser.$('//a[@qa="create-day-report-button"]').click();
    browser.pause(300);
  });

  it('should mark the checkbox', () => {
    browser.$('//div[@qa="day-report-marks"]//input[@label="Helped classmates"]').click();
  });

  it('should choose one option in Morale dropdown', () => {
    const dropdown = browser.$('//select[@name="morale"]');
    dropdown.selectByVisibleText('9');
  });

  it('should fill out Hours field', () => {
    const element = browser.$('//input[@name="hours"]');
    element.setValue(5);
  });

  it('should fill out How was your day? field', () => {
    const element = browser.$('//textarea[@name="description"]');
    element.setValue('gogogogogogogoogogogogogogogogo');
  });

  it('should click Save button', () => {
    const element = browser.$('//button[@type="submit"]');
    element.click();
    browser.pause(2000);
  });

  it('should first item in the list be equal created day report description', () => {
    const actualText = browser.$('//div[@qa="day-report-item-0"]//div[@qa="description"]').getText();
    const expectedText = 'gogogogogogogoogogogogogogogogo';
    expect(actualText).eq(expectedText);
  });

  it('should first item in the list be equal created day report mark', () => {
    const actualText = browser.$('//div[@qa="day-report-item-0"]//div[@qa="labels"]//span').getText();
    const expectedText = 'Helped classmates';
    expect(actualText).eq(expectedText);
  });

});