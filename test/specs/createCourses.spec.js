const { expect } = require('chai');

const { URL_LOGIN, pageLoginSelectors, adminData, coursesPageAnswers, coursesPageSelectors} = require('./register_data');

describe('CREATE COURSES', () => {
  before('Login as admin', () => {
    browser.url(URL_LOGIN);
    $(pageLoginSelectors.emailInput).setValue(adminData.login);
    $(pageLoginSelectors.passwordInput).setValue(adminData.password);
    $(pageLoginSelectors.loginButton).click();
    browser.pause(2000);
  });

  it('should click Courses button', () => {
    const element = $(coursesPageSelectors.coursesButton);
    element.click();
    browser.pause(1000);
  });

  it('should check the header', () => {
    const actual = $(coursesPageSelectors.h1).getText();
    const expected = coursesPageAnswers.header;
    expect(actual).equal(expected);
  });

  it('should click Create new Course button', () => {
    const element = $(coursesPageSelectors.createNewCourseButton);
    element.click();
    browser.pause(1000);
  });

  it('should check the header Create Course', () => {
    const actual = $(coursesPageSelectors.createCourseHeader).getText();
    const expected = coursesPageAnswers.createCourseHeader;
    expect(actual).equal(expected);
  });

  it('should fill Course name field', () => {
    const element = $(coursesPageSelectors.courseNameInput);
    element.setValue(coursesPageAnswers.courseNameInput);
  });

  it('should fill Course description field', () => {
    const element = $(coursesPageSelectors.courseDescriptionInput);
    element.setValue(coursesPageAnswers.courseDescriptionInput);
  });

  it('should choose one option in Access type dropdown', () => {
    const dropdownList = $(coursesPageSelectors.accessTypeDropdown);
    dropdownList.selectByVisibleText(coursesPageAnswers.accessTypeDropdown);
  });

  it('should click Create button', () => {
    const element = $(coursesPageSelectors.createButton);
    element.click();
    browser.pause(1000);
  });

});