const { expect } = require('chai');

const { URL_LOGIN, pageLoginSelectors, adminData, groupsPageSelectors, groupsPageData } = require('./register_data');

describe('CREATE NEW GROUP', () => {
  before('Login as admin', () => {
    browser.url(URL_LOGIN);
    $(pageLoginSelectors.emailInput).setValue(adminData.login);
    $(pageLoginSelectors.passwordInput).setValue(adminData.password);
    $(pageLoginSelectors.loginButton).click();
    browser.pause(2000);
  });

  it('should click Groups button', () => {
    const element = $(groupsPageSelectors.groupButton);
    element.click();
    browser.pause(1000);
  });

  it('should check the header', () => {
    const actual = $(groupsPageSelectors.h1).getText();
    const expected = groupsPageData.h1;
    expect(actual).equal(expected);
  });

  it('should click Create new Group button', () => {
    const element = $(groupsPageSelectors.createNewGroupButton);
    element.click();
    browser.pause(1000);
  });

  it('should fill Group name field', () => {
    const element = $(groupsPageSelectors.groupNameInput);
    element.setValue(groupsPageData.groupName);
  });

  it('should choose one option in Access type dropdown', () => {
    const dropdown = $(groupsPageSelectors.accessTypeInput);
    dropdown.selectByVisibleText(groupsPageData.accesstype);
  });

  it('should click Create button', () => {
    const element = $(groupsPageSelectors.createButton);
    element.click();
    browser.pause(1000);
  });

  it('should check the message', () => {
    const actualH4 = browser.$(groupsPageSelectors.messageInput).getText();
    const expectedH4 = groupsPageData.message;
    expect(actualH4).equal(expectedH4);
    browser.pause(3000);
  });

});