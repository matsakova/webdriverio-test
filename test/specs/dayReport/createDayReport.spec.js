import {expect} from 'chai';

import LoginPage from "../login/LoginPage";
import ProfilePage from "../profile/ProfilePage";
import DiaryPage from "./DiaryPage";
import CreateDayReportPage from "./CreateDayReportPage";

describe('DAY REPORT CREATE', () => {
  before('Login as student', () => {
    LoginPage.loginAsStudent();
  });

  after('Logout as Student', () => {
    LoginPage.logout();
  });

  it('should click Diary button', () => {
    ProfilePage.diaryBtn();
  });

  it('should click Create day report button', () => {
    DiaryPage.createDayReportBtn();
  });

  it('should mark the checkbox', () => {
    CreateDayReportPage.markCheckBox();
  });

  it('should choose one option in Morale dropdown', () => {
    CreateDayReportPage.selectMorale();
  });

  it('should fill out Hours field', () => {
    CreateDayReportPage.hoursFieldFillOut();
  });

  it('should fill out How was your day? field', () => {
    CreateDayReportPage.howWasYourDayFillOut();
  });

  it('should click Save button', () => {
    CreateDayReportPage.saveBtnClick();
  });

  it('should first item in the list be equal created day report description', () => {
    const actualText = DiaryPage.createdDayReportDescription.getText();
    const expectedText = 'gogogogogogogoogogogogogogogogo';
    expect(actualText).eq(expectedText);
  });

  it('should first item in the list be equal created day report mark', () => {
    const actualText = DiaryPage.createdDayReportMark.getText();
    const expectedText = 'Helped classmates';
    expect(actualText).eq(expectedText);
  });

});