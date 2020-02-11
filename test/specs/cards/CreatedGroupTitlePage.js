import Page from "../Page";

class CreatedGroupTitlePage extends Page {

    get createdGroupTitle() {
        return browser.$('h1');
    }


}

export default new CreatedGroupTitlePage();