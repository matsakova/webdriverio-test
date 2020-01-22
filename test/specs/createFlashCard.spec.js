const { expect } = require('chai');

const { URL_LOGIN, pageLoginSelectors, adminData, cardsPageData, flashCardsSelectors } = require('./register_data');

describe('CREATE FLASH CARD', () => {
  before('Login as admin', () => {
    browser.url(URL_LOGIN);
    $(pageLoginSelectors.emailInput).setValue(adminData.login);
    $(pageLoginSelectors.passwordInput).setValue(adminData.password);
    $(pageLoginSelectors.loginButton).click();
    browser.pause(2000);
  });

  it('should click Cards button', () => {
    const element = $(flashCardsSelectors.cardsButton);
    element.click();
    browser.pause(1000);
  });

  it('should check the header', () => {
    const actual = $(flashCardsSelectors.h1).getText();
    const expected = cardsPageData.h1;
    expect(actual).equal(expected);
  });

  it('should click Create new FlashGroup button', () => {
    const element = $(flashCardsSelectors.createNewFlashGroupButton);
    element.click();
    browser.pause(1000);
  });

  it('should check if modal body exists', () => {
    const element = $(flashCardsSelectors.modalBody);
    element.isExisting();
    browser.pause(1000);
  });

  it('should check the header Create Flash Group', () => {
    const actual = $(flashCardsSelectors.h5Input).getText();
    const expected = cardsPageData.h5;
    expect(actual).equal(expected);
  });

  it('should fill Group name field', () => {
    const element = $(flashCardsSelectors.groupNameInput);
    element.setValue(cardsPageData.groupName);
  });

  it('should fill Group description field', () => {
    const element = $(flashCardsSelectors.groupDescriptionInput);
    element.setValue(cardsPageData.groupName);
  });

  it('should click Create button', () => {
    const element = $(flashCardsSelectors.createButton);
    element.click();
    browser.pause(1000);
  });

  it('should check that error message does not pop-up', () => {
    const element = $(flashCardsSelectors.messageInput);
    expect(element).not.eql(cardsPageData.errorMessage);
    browser.pause(1000);
  });


});