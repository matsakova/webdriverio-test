const URL_LOGIN = 'https://stage.pasv.us/user/login';

const { loginSelectors, loginAsAdminData, logoutSelectors, loginAsStudentData, diaryButtonMainViewSelectors } = require('./dataDayReport');

function loginAsAdmin () {

  browser.url(URL_LOGIN);
  browser.$(loginSelectors.email).setValue(loginAsAdminData.email);
  browser.$(loginSelectors.password).setValue(loginAsAdminData.password);
  browser.$(loginSelectors.loginButton).click();
  browser.pause(1000);
};


function logout () {
  browser.$(logoutSelectors.dropdown).click();
  browser.$(logoutSelectors.logoutButton).click();
};

function loginAsStudent () {
  browser.url(URL_LOGIN);
  browser.$(loginSelectors.email).setValue(loginAsStudentData.email);
  browser.$(loginSelectors.password).setValue(loginAsStudentData.password);
  browser.$(loginSelectors.loginButton).click();
  browser.pause(1000);
};


function clickDiaryButton () {
  browser.$(diaryButtonMainViewSelectors.diaryButton).click();
  browser.pause(300);
};


module.exports = {loginAsAdmin, logout, loginAsStudent, clickDiaryButton};