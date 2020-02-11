import Page from "../Page";

class NewUserPage extends Page {

    get h1() {
        return browser.$('//h1');
    }




}

export default new NewUserPage();