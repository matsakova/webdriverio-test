const URL_REGISTER = 'https://stage.pasv.us/user/register';
const URL_LOGIN = 'https://stage.pasv.us/user/login';

const user = {
  email : 'masha2@test.com',
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
  howWasYourDay: 'Great! Solved Codewars Katas!!!',
  message: 'Diary created'
};


module.exports = { URL_REGISTER, URL_LOGIN, user, page, pageRegisterSelectors, pageLoginSelectors, adminData, pageDailyReportsSelectors, createDayReportPageSelectors, answers };