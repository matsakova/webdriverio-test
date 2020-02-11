import Page from "../Page";

class RegisterPage extends Page {

    open() {
        super.open('https://stage.pasv.us/user/register');
    }

    get h1() {
        return browser.$('//h1');
    }

    get description() {
        return browser.$('//p');
    }

    get submitBtnText() {
        return browser.$('//button[@type = "submit"]');
    }

    get firstNameField() {
        return browser.$('//input[@name = "firstName"]');
    }

    get lastNameField() {
        return browser.$('//input[@name = "lastName"]');
    }

    get cellPhoneNumber() {
        return browser.$('//input[@name = "phone"]');
    }

    get emailField() {
        return browser.$('//input[@name = "email"]');
    }

    get passwordField() {
        return browser.$('//input[@name = "password"]');
    }

    get aboutField() {
        return browser.$('//textarea[@name = "about"]');
    }

    get myGoalsField() {
        return browser.$('//textarea[@name = "goals"]');
    }

    get englishLevelField() {
        return browser.$('//select[@name = "englishLevel"]');
    }

    clickSubmitBtn() {
        browser.$('//button[@type = "submit"]').click();
        browser.pause(3000);
    }




}

export default new RegisterPage();