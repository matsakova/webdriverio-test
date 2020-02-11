import Page from "../Page";

class CreatedGroupPage extends Page {

    get h1() {
        return browser.$('h1');
    }


}

export default new CreatedGroupPage();