const URL_LOGIN = 'https://stage.pasv.us/user/login';

function loginAsAdmin () {

  browser.url(URL_LOGIN);
  browser.$('//form//input[@name="email"]').setValue('admin@test.com');
  browser.$('//form//input[@name="password"]').setValue('11111');
  browser.$('//form//button[@type="submit"]').click();
  browser.pause(1000);
};


function logoutAsAdmin () {
  browser.$('//a[@class="dropdown-toggle nav-link"]').click();
  browser.$('//button[contains(text(),"Logout")]').click();
};

function loginAsStudent () {
  browser.url(URL_LOGIN);
  browser.$('//form//input[@name="email"]').setValue('nicole@test.com');
  browser.$('//form//input[@name="password"]').setValue('123456');
  browser.$('//form//button[@type="submit"]').click();
  browser.pause(1000);
};

function logoutAsStudent () {
  browser.$('//a[@class="dropdown-toggle nav-link"]').click();
  browser.$('//button[contains(text(),"Logout")]').click();
  browser.pause(2000);
};


module.exports = {loginAsAdmin, logoutAsAdmin, loginAsStudent, logoutAsStudent};