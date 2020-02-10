import LoginPage from "../login/LoginPage";
import ProfilePage from "../profile/ProfilePage";
import DiaryPage from "./DiaryPage";

describe('DAY REPORT APPROVE', () => {
  before('Login as admin', () => {
    LoginPage.loginAsAdmin();
  });

  after('Logout', () => {
    LoginPage.logout();
  });

  it('should click Diary button', () => {
    ProfilePage.diaryBtn();
  });

  it('should click Approve button', () => {
    DiaryPage.approveBtn();
  });

  it('should verify diary was approved', () => {
    DiaryPage.approvedMark();
  });

});