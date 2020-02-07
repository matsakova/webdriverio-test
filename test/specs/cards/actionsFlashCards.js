const URL_LOGIN = 'https://stage.pasv.us/user/login';

const { loginSelectors, loginAsAdminData, logoutSelectors} = require('./dataFlashCards');

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



module.exports = {loginAsAdmin, logout};