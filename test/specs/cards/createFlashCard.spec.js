const { expect } = require('chai');

const { loginAsAdmin, logout } = require('./actionsFlashCards');

const { flashCardsSelectors, flashCardsAnswers } = require('./dataFlashCards');

describe('FLASH GROUP CREATE', () => {
  before('Login as admin', () => {
    loginAsAdmin ();
  });

  after('Logout', () => {
    logout();
  });

  it('should click top menu Cards', () => {
    browser.$(flashCardsSelectors.cardsButton).click();
  });

  it('should click Create new FlashGroup button', () => {
    browser.$(flashCardsSelectors.createNewFlashGroupButton).click();
    browser.pause(500);
  });

  it('should check if modal form is open', () => {
    const el = browser.$(flashCardsSelectors.modalForm);
    expect(el.isDisplayed()).true;
  });

  it('should check if modal form title is correct', () => {
    const actualText = browser.$(flashCardsSelectors.modalFormTitle).getText();
    const expectedText = flashCardsAnswers.title;
    expect(actualText).eq(expectedText);
  });

  it('should fill out input group name', () => {
    const el = browser.$(flashCardsSelectors.groupName);
    el.setValue(flashCardsAnswers.groupName);
  });

  it('should fill out input group description', () => {
    const el = browser.$(flashCardsSelectors.groupDescription);
    el.setValue(flashCardsAnswers.groupDescription);
  });

  it('should submit form', () => {
    const el = browser.$(flashCardsSelectors.submitButton);
    el.click();
    browser.pause(500);
  });

  it('should first item in the list be equal created group title', () => {
    const actualTitle = browser.$(flashCardsSelectors.firstItemTitle).getText();
    const expectedTitle = flashCardsAnswers.groupName;
    expect(actualTitle).eq(expectedTitle);
  });

  it('should first item in the list be equal created group description', () => {
    const actualDescription = browser.$(flashCardsSelectors.firstItemDescription).getText();
    const expectedDescription = flashCardsAnswers.groupDescription;
    expect(actualDescription).eq(expectedDescription);
  });

  it('should verify created group title is clickable', () => {
    const el = browser.$(flashCardsSelectors.groupTitle);
    el.click();
    browser.pause(300);
  });

  it('should clicked group have correct title', () => {
    const actual = browser.$(flashCardsSelectors.clickedGroupTitle).getText();
    const expected = flashCardsAnswers.groupName;
    expect(actual).eq(expected);
  });
  
});