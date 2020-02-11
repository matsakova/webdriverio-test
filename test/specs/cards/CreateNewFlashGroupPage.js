import Page from "../Page";
import {expect} from "chai";

class CardsPage extends Page {

   modalForm() {
       const el = browser.$('//div[contains(@class, "sidepanel")]');
       expect(el.isDisplayed()).true;
   }

   get modalFormTitle() {
       return browser.$('//div[contains(@class, "sidepanel")]//*[@class="modal-title"]');
   }

   get inputGroupName() {
       return browser.$('//div[contains(@class, "sidepanel")]//input[@name="name"]');
   }

   get inputGroupDescription() {
       return browser.$('//div[contains(@class, "sidepanel")]//input[@name="description"]');
   }

   submitBtn() {
       browser.$('//div[contains(@class, "sidepanel")]//button[@type="submit"]').click();
   }

}

export default new CardsPage();