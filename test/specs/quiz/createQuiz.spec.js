import LoginPage from "../login/LoginPage";
import ProfilePage from "../profile/ProfilePage";
import QuizPage from "./QuizPage";
import CreateQuizPage from "./CreateQuizPage";
import CreatedQuizPage from "./CreatedQuizPage";

const { expect } = require('chai');


describe('QUIZ CREATE', () => {
  before('Login as admin', () => {
    LoginPage.loginAsAdmin();
  });

  after('Logout', () => {
    LoginPage.logout();
  });

  it('should click top menu Quiz', () => {
    ProfilePage.quizBtn();
  });

  it('should click Create Question Group button', () => {
    QuizPage.createQuestionGroupBtn();
  });

  it('should fill out input group name', () => {
    const el = CreateQuizPage.inputGroupName;
    el.setValue('new test quiz');
  });

  it('should fill out input group description', () => {
    const el = CreateQuizPage.inputGroupDescription;
    el.setValue('my description');
  });

  it('should fill out input acceptable mistakes', () => {
    const el = CreateQuizPage.acceptableMistakes;
    el.setValue('1');
  });

  it('should mark Active checkbox', () => {
    CreateQuizPage.markActiveCheckbox();
  });

  it('should save form', () => {
    CreateQuizPage.clickSaveBtn();
  });

  it('should created quiz have correct title', () => {
    const actual = CreatedQuizPage.createdQuizTitle.getText();
    const expected = 'new test quiz';
    expect(actual).eq(expected);
  });
  
});