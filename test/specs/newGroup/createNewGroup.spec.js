import { expect } from'chai';

import LoginPage from "../login/LoginPage";
import ProfilePage from "../profile/ProfilePage";
import GroupsPage from "./GroupsPage";
import CreateNewGroupPage from "./CreateNewGroupPage";
import CreatedGroupPage from "./CreatedGroupPage";

describe('CREATE NEW GROUP', () => {
  before('Login as admin', () => {
    LoginPage.loginAsAdmin()
  });

  after('Logout', () => {
    LoginPage.logout();
  });

  it('should click Groups button', () => {
    ProfilePage.groupsBtn();
  });

  it('should click Create new Group button', () => {
    GroupsPage.createNewGroupBtn();
  });

  it('should fill out Group name field', () => {
    CreateNewGroupPage.groupNameField();
  });

  it('should fill out Group description field', () => {
    CreateNewGroupPage.groupDescriptionField();
  });

  it('should choose one option in Access type dropdown', () => {
    CreateNewGroupPage.accessTypeDropdown();
  });

  it('should click Create button', () => {
    CreateNewGroupPage.createBtn();
  });

  it('should first item in the list be equal created group title', () => {
    const actualTitle = GroupsPage.createdGroupTitle.getText();
    const expectedTitle = 'test group1';
    expect(actualTitle).eq(expectedTitle);
  });

  it('should first item in the list be equal created group access type', () => {
    const actualAccessType = GroupsPage.createdGroupAccessType.getText();
    const expectedAccessType = 'Only for members';
    expect(actualAccessType).eq(expectedAccessType);
  });

  it('should verify created group is clickable', () => {
    GroupsPage.createdGroupIsClickable();
  });

  it('should clicked group have correct title', () => {
    const actual = CreatedGroupPage.h1.getText();
    const expected = 'Group test group1';
    expect(actual).eq(expected);
  });

});