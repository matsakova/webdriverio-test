import Page from "../Page";

class GroupsPage extends Page {

    groupNameField() {
        const element = browser.$('//form//input[@name="name"]');
        element.setValue('test group1');
    }

    groupDescriptionField() {
        const element = browser.$('//form//input[@name="description"]');
        element.setValue('new description');
    }

    accessTypeDropdown() {
        const dropdown = browser.$('//form//select[@name="accessType"]');
        dropdown.selectByVisibleText('Members');
    }

    createBtn() {
        browser.$('//form//button[@type="submit"]').click();
        browser.pause(2000);
    }

}

export default new GroupsPage();