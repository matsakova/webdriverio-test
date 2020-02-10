import Page from "../Page";
import {expect} from 'chai';

class DiaryPage extends Page {

    createDayReportBtn() {
        browser.$('//a[@qa="create-day-report-button"]').click();
        browser.pause(300);
    }

    get createdDayReportDescription() {
        return browser.$('//div[@qa="day-report-item-0"]//div[@qa="description"]');
    }

    get createdDayReportMark() {
        return browser.$('//div[@qa="day-report-item-0"]//div[@qa="labels"]//span');
    }

    approveBtn() {
        browser.$('//div[@qa="day-report-item-0"]//button[@qa="approve-button"]').click();
        browser.pause(1000);
    }

    approvedMark() {
        browser.$('//div[@qa="day-report-item-0"]//span[@qa="approved-mark"]').isExisting();
        browser.pause(500);
    }

    deleteBtn() {
        browser.$('//div[@qa="day-report-item-0"]//button[@qa="delete-button"]').click();
        browser.pause(500);
    }

    likeBtn() {
        browser.$('//div[@qa="day-report-item-0"]//button[@qa="like-button"]').click();
        browser.pause(3000);
    }

    likeMark() {
        const el = browser.$('//div[@qa="day-report-item-0"]//button[@qa="like-button"]').isEnabled();
        expect(el).eq(false);
    }
}

export default new DiaryPage();