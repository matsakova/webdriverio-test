import Page from "../Page";

class ProfilePage extends Page {

    get h1() {
        return browser.$('//h1');
    }

    diaryBtn() {
        browser.$('//div[@id="site-menu"]//a[@qa="diary-link"]').click();
        browser.pause(300);
    }

    groupsBtn() {
        browser.$('//div[@id="site-menu"]//a[@qa="groups-link"]').click();
        browser.pause(1000);
    }

    cardsBtn() {
        browser.$('//div[@id="site-menu"]//a[@qa="cards-link"]').click();
    }

    coursesBtn() {
        browser.$('//div[@id="site-menu"]//a[@qa="courses-link"]').click();
        browser.pause(1000);
    }

    quizBtn() {
        browser.$('//div[@id="site-menu"]//a[@qa="quiz-link"]').click();
    }

}

export default new ProfilePage();