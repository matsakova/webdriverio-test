import Page from "../Page";

class ProfilePage extends Page {

    get h1() {
        return browser.$('//h1');
    }

    diaryBtn() {
        browser.$('//div[@id="site-menu"]//a[@qa="diary-link"]').click();
        browser.pause(300);
    }

}

export default new ProfilePage();