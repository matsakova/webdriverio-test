import Page from "../Page";

class CardsPage extends Page {

   createNewFlashGroupBtn() {
       browser.$('//button[@qa="flash-create-new-group"]').click();
       browser.pause(500);
   }

   get createdGroupTitle() {
       return browser.$('//div[@qa="flash-group-list "]//h4/a');
   }

   get createdGroupDescription() {
       return browser.$('//div[@qa="flash-group-list "]//div[@qa="description"]');
   }

   groupTitleIsClickable() {
       browser.$('//div[@qa="flash-group-list "]//h4/a').click();
   }

}

export default new CardsPage();