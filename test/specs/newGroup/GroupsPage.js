import Page from "../Page";

class GroupsPage extends Page {

    createNewGroupBtn() {
        browser.$('//a[@qa="create-group-button"]').click();
        browser.pause(1000);
}

    get createdGroupTitle() {
        return browser.$('//div[@qa="group-list"]//h4/a')  ;
}

    get createdGroupAccessType() {
        return browser.$('//div[@qa="group-list"]//span[@qa="access-type"]') ;
}

    createdGroupIsClickable() {
        browser.$('//div[@qa="group-list"]//h4/a').click();
        browser.pause(1000);
    }

}

export default new GroupsPage();