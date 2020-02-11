import {expect} from 'chai';

import LoginPage from "../login/LoginPage";
import ProfilePage from "../profile/ProfilePage";
import CardsPage from "./CardsPage";
import CreateNewFlashGroupPage from "./CreateNewFlashGroupPage";
import CreatedGroupTitlePage from "./CreatedGroupTitlePage";


describe('FLASH GROUP CREATE', () => {
  before('Login as admin', () => {
    LoginPage.loginAsAdmin();
  });

  after('Logout', () => {
    LoginPage.logout();
  });

  it('should click top menu Cards', () => {
    ProfilePage.cardsBtn();
  });

  it('should click Create new FlashGroup button', () => {
    CardsPage.createNewFlashGroupBtn();
  });

  it('should check if modal form is open', () => {
    CreateNewFlashGroupPage.modalForm();
  });

  it('should check if modal form title is correct', () => {
    const actualText = CreateNewFlashGroupPage.modalFormTitle.getText();
    const expectedText = 'Create Flash Group';
    expect(actualText).eq(expectedText);
  });

  it('should fill out input group name', () => {
    const el = CreateNewFlashGroupPage.inputGroupName;
    el.setValue('My group name 555');
  });

  it('should fill out input group description', () => {
    const el = CreateNewFlashGroupPage.inputGroupDescription;
    el.setValue('7777777');
  });

  it('should submit form', () => {
    CreateNewFlashGroupPage.submitBtn();
    browser.pause(500);
  });

  it('should first item in the list be equal created group title', () => {
    const actualTitle = CardsPage.createdGroupTitle.getText();
    const expectedTitle = 'My group name 555';
    expect(actualTitle).eq(expectedTitle);
  });

  it('should first item in the list be equal created group description', () => {
    const actualDescription = CardsPage.createdGroupDescription.getText();
    const expectedDescription = '7777777';
    expect(actualDescription).eq(expectedDescription);
  });

  it('should verify created group title is clickable', () => {
    CardsPage.groupTitleIsClickable();
    browser.pause(300);
  });

  it('should clicked group have correct title', () => {
    const actual = CreatedGroupTitlePage.createdGroupTitle.getText();
    const expected = 'My group name 555';
    expect(actual).eq(expected);
  });
  
});