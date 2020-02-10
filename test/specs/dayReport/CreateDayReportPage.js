import Page from "../Page";
import {diaryPageData, diaryPageSelectors} from "./dataDayReport";


class CreateDayReportPage extends Page {

    markCheckBox() {
        browser.$('//div[@qa="day-report-marks"]//input[@label="Helped classmates"]').click();
    }

    selectMorale() {
        const dropdown = browser.$('//select[@name="morale"]');
        dropdown.selectByVisibleText('9');
    }

    hoursFieldFillOut() {
        const element = browser.$('//input[@name="hours"]');
        element.setValue('5');
    }

    howWasYourDayFillOut() {
        const element = browser.$('//textarea[@name="description"]');
        element.setValue('gogogogogogogoogogogogogogogogo');
    }

    saveBtnClick() {
        const element = browser.$('//button[@type="submit"]');
        element.click();
        browser.pause(2000);
    }

}

export default new CreateDayReportPage();