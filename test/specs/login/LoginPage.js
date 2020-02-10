import Page from "../Page";

class LoginPage extends Page {

    get email() {
        return browser.$('//form//input[@name="email"]');
    }

    get password() {
        return browser.$('//form//input[@name="password"]');
    }

    get submitBtn() {
        return browser.$('//form//button[@type="submit"]');
    }

    get h1() {
        return browser.$('//h1');
    }

    loginAsStudent() {
      this.open();
      this.email.setValue('nicole@test.com');
      this.password.setValue('123456');
      this.submitBtn.click();
      browser.pause(3000);
    }

    loginAsAdmin() {
        this.open();
        this.email.setValue('admin@test.com');
        this.password.setValue('11111');
        this.submitBtn.click();
        browser.pause(3000);
    }

    logout() {
        browser.$('//a[@class="dropdown-toggle nav-link"]').click();
        browser.$('//button[contains(text(),"Logout")]').click();
    }

    open() {
        super.open('https://stage.pasv.us/user/login');
    }
}

export default new LoginPage();