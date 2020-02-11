import Page from "../Page";

class CreateNewCoursePage extends Page {

    get courseNameField() {
        return browser.$('//form//input[@name="name"]');
    }

    get courseDescriptionField() {
        return browser.$('//form//input[@name="description"]');
    }

    get accessTypeDropdown() {
        return browser.$('//form//select[@name="accessType"]');
    }

    createBtn() {
        browser.$('//form//button[@type="submit"]').click();
        browser.pause(1000);
    }



}

export default new CreateNewCoursePage();