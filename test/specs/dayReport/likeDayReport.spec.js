import LoginPage from "../login/LoginPage";
import ProfilePage from "../profile/ProfilePage";
import DiaryPage from "./DiaryPage";


describe('DAY REPORT LIKE', () => {
  before('Login as admin', () => {
    LoginPage.loginAsAdmin();
  });

  after('Logout', () => {
    LoginPage.logout()
  });

  it('should click Diary button', () => {
    ProfilePage.diaryBtn();
  });

  it('should click Like button', () => {
    DiaryPage.likeBtn();
  });

  it('should verify whether diary was liked', () => {
    DiaryPage.likeMark();
  });

});