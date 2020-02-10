import LoginPage from "../login/LoginPage";
import ProfilePage from "../profile/ProfilePage";
import DiaryPage from "./DiaryPage";


describe('DAY REPORT DELETE', () => {
  before('Login as admin', () => {
    LoginPage.loginAsAdmin();
  });

  after('Logout as admin', () => {
    LoginPage.logout()
  });

  it('should click Diary button', () => {
    ProfilePage.diaryBtn();
  });

  it('should click Delete button', () => {
    DiaryPage.deleteBtn();
  });

});