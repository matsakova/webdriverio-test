import { expect } from 'chai';
import LoginPage from './LoginPage';

describe('LOGIN (negative)', () => {
  it('should open login page', () => {
    LoginPage.open();
    browser.pause(500);
  });

  it('should have correct title', () => {
    expect(LoginPage.h1.getText()).eq('User Login');
  });

  it('should fill out email field', () => {
    LoginPage.email.setValue('admin@test.com');
  });

  it('should fill out password field', () => {
    LoginPage.password.setValue('11111+');
  });

  it('should submit form', () => {
    LoginPage.submitBtn.click();
    browser.pause(2000);
  });

  it('should check h1 text', () => {
    expect(LoginPage.h1.getText()).eq('User Login');
  });
});