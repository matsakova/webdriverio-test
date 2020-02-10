import { expect } from 'chai';
import LoginPage from '../login/LoginPage';
import ProfilePage from "../profile/ProfilePage";

describe('PROFILE', () => {
  before(() => {
    LoginPage.loginAsStudent();
  });

  it('should go to Profile page', () => {
    expect(ProfilePage.h1.getText()).eq('Admin Adminov');
    browser.pause(2000);
  });


});