import Page from "../Page";

class QuizPage extends Page {

    createQuestionGroupBtn() {
        browser.$('//div[@class="form-group"]//button[@type="button"]').click();
        browser.pause(500);
    }


}

export default new QuizPage();