const loginSelectors = {
  email: '//form//input[@name="email"]',
  password: '//form//input[@name="password"]',
  loginButton: '//form//button[@type="submit"]'
};

const loginAsAdminData = {
  email: 'admin@test.com',
  password: '11111'
};

const logoutSelectors = {
  dropdown: '//a[@class="dropdown-toggle nav-link"]',
  logoutButton: '//button[contains(text(),"Logout")]'
};

const flashCardsSelectors = {
  cardsButton: '//div[@id="site-menu"]//a[@qa="cards-link"]',
  createNewFlashGroupButton: '//button[@qa="flash-create-new-group"]',
  modalForm: '//div[contains(@class, "sidepanel")]',
  modalFormTitle: '//div[contains(@class, "sidepanel")]//*[@class="modal-title"]',
  groupName: '//div[contains(@class, "sidepanel")]//input[@name="name"]',
  groupDescription: '//div[contains(@class, "sidepanel")]//input[@name="description"]',
  submitButton: '//div[contains(@class, "sidepanel")]//button[@type="submit"]',
  firstItemTitle: '//div[@qa="flash-group-list "]//h4/a',
  firstItemDescription: '//div[@qa="flash-group-list "]//div[@qa="description"]',
  groupTitle: '//div[@qa="flash-group-list "]//h4/a',
  clickedGroupTitle: 'h1',
};

const flashCardsAnswers = {
  title: 'Create Flash Group',
  groupName: 'My group name 555',
  groupDescription: '7777777',

};


module.exports = {flashCardsSelectors, flashCardsAnswers, loginSelectors, logoutSelectors, loginAsAdminData};