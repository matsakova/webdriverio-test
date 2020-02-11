import Page from "../Page";

class CoursesPage extends Page {

    createNewCourseBtn() {
        browser.$('//div[@class="form-group"]//a').click();
        browser.pause(1000);
    }


}

export default new CoursesPage();