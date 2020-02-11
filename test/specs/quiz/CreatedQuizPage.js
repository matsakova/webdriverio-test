import Page from "../Page";

class CreatedQuizPage extends Page {

    get createdQuizTitle() {
        return browser.$('//h1//i');
    }


}

export default new CreatedQuizPage();