const URL_REGISTER = 'https://stage.pasv.us/user/register';
const URL_LOGIN = 'https://stage.pasv.us/user/login';

const user = {
  email : Math.random() + 'masha2@test.com',
  firstName: 'Masha',
  lastName: 'Popova',
  cellPhoneNumber: 11111111111,
  password: '123456789',
  about: 'About me',
  goals: 'Tell about your goals in programming, career.',
  language: 'Advanced',
};

const page = {
  title: 'Progress Monitor',
  h1: 'User Register',
  description: 'Profiles with fictitious or dummy data will be deleted.',
  buttonText: 'Submit',
};

const pageRegisterSelectors = {
  h1: 'h1',
  description: 'p',
  submitButton: 'form button[type = "submit"]',
  firstNameInput: 'form input[name = "firstName"]',
  lastNameInput: 'form input[name = "lastName"]',
  phoneInput: 'form input[name = "phone"]',
  emailInput: 'form input[name = "email"]',
  passwordInput: 'form input[name = "password"]',
  aboutInput: 'form textarea[name = "about"]',
  goalsInput: 'form textarea[name = "goals"]',
  englishLevelInput: 'form select[name = "englishLevel"]',
};

const pageLoginSelectors = {
  emailInput: 'form input[name = "email"]',
  passwordInput: 'form input[name = "password"]',
  loginButton: 'form button[type = "submit"]',
};


const adminData = {
  login: 'admin@test.com',
  password: '11111',
};

const pageDailyReportsSelectors = {
  diaryButton:'a[qa="diary-link"]',
  h1: 'h1',
  createDayReportButton: 'a[qa="create-day-report-button"]',
  messageInput: '//h4[@class="notification-title"]'
};

const createDayReportPageSelectors = {
  h1: 'h1',
  expectedH1: 'Create day report',
  checkboxInput: 'input[label="Helped classmates"]',
  moraleInput: 'select[name="morale"]',
  hoursInput: 'input[name="hours"]',
  howWasYourDayInput: 'textarea[name="description"]',
  saveButton: 'button[type="submit"]',
};

const answers = {
  morale: '8',
  hours: '7',
  howWasYourDay: 'qwertyqwertyqwertyqwertyqwerty',
  message: 'Diary created'
};

const groupsPageSelectors = {
  groupButton: 'a[qa="groups-link"]',
  h1: 'h1',
  createNewGroupButton: 'a[qa="create-group-button"]',
  groupNameInput: 'input[name="name"]',
  accessTypeInput: 'select[name="accessType"]',
  createButton: 'button[type="submit"]',
  messageInput: '//h4[@class="notification-title"]'
};

const groupsPageData = {
  h1: 'Groups',
  groupName: 'Test',
  accesstype: 'All',
  message: 'Group created'
};

const flashCardsSelectors = {
  cardsButton: 'a[qa="cards-link"]',
  h1: 'h1',
  createNewFlashGroupButton: 'button[qa="flash-create-new-group"]',
  modalBody: 'div.modal-body',
  h5Input: 'h5.modal-title',
  groupNameInput: 'input[name="name"]',
  groupDescriptionInput: 'input[name="description"]',
  createButton: 'button[class="btn btn-primary"]',
  messageInput: '//h4[@class="notification-title"]'
};

const cardsPageData = {
  h1: 'FlashCards',
  h5: 'Create Flash Group',
  groupName: 'Test',
  groupDescription: 'abcdefg',
  errorMessage: 'Flash Group create Error'
};

const coursesPageSelectors = {
  coursesButton: 'a[qa="courses-link"]',
  h1: 'h1',
  createNewCourseButton: 'a[href="/course/create"]',
  createCourseHeader: 'span[class="h1 mr-4"]',
  courseNameInput: 'input[name="name"]',
  courseDescriptionInput: 'input[name="description"]',
  accessTypeDropdown: 'select[name="accessType"]',
  createButton: 'button[type="submit"]'
};

const coursesPageAnswers = {
  header: 'Courses',
  createCourseHeader: 'Create Course',
  courseNameInput: 'test2020',
  courseDescriptionInput: 'abc',
  accessTypeDropdown: 'All',
};

module.exports = { URL_REGISTER, URL_LOGIN, user, page, pageRegisterSelectors, pageLoginSelectors, adminData,
  pageDailyReportsSelectors, createDayReportPageSelectors, answers, groupsPageSelectors, groupsPageData,
  flashCardsSelectors, cardsPageData, coursesPageSelectors, coursesPageAnswers};