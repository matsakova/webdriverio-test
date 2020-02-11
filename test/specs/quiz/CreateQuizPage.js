import Page from "../Page";

class QuizPage extends Page {

    get inputGroupName() {
        return browser.$('//input[@name="name"]');
    }

    get inputGroupDescription() {
        return browser.$('//input[@name="description"]');
    }

    get acceptableMistakes() {
        return browser.$('//input[@name="acceptableMistakes"]');
    }

    markActiveCheckbox() {
        browser.$('//label[@for="Active"]').click();
    }

    clickSaveBtn() {
        browser.$('//button[@type="submit"]').click();
        browser.pause(500);
    }

}

export default new QuizPage();