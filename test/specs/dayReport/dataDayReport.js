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

const loginAsStudentData = {
  email: 'nicole@test.com',
  password: '123456'
};

const diaryButtonMainViewSelectors = {
  diaryButton: '//div[@id="site-menu"]//a[@qa="diary-link"]',
};

const diaryPageSelectors = {
  createDayReportButton: '//a[@qa="create-day-report-button"]',
  markCheckbox: '//div[@qa="day-report-marks"]//input[@label="Helped classmates"]',
  morale: '//select[@name="morale"]',
  hours: '//input[@name="hours"]',
  howWasYourDay: '//textarea[@name="description"]',
  saveButton: '//button[@type="submit"]',
  firstItemDescription: '//div[@qa="day-report-item-0"]//div[@qa="description"]',
  firstItemMark: '//div[@qa="day-report-item-0"]//div[@qa="labels"]//span'
};

const diaryPageData = {
  morale: '9',
  hours: '5',
  howWasYourDay: 'gogogogogogogoogogogogogogogogo',
  checkBoxDescription: 'Helped classmates'
};

const approveSelectors = {
  approveButton: '//div[@qa="day-report-item-0"]//button[@qa="approve-button"]',
  approvedMark: '//div[@qa="day-report-item-0"]//span[@qa="approved-mark"]'
};

const deleteSelectors = {
  deleteButton: '//div[@qa="day-report-item-0"]//button[@qa="delete-button"]'
};

const likeSelectors = {
  likeButton: '//div[@qa="day-report-item-0"]//button[@qa="like-button"]',
  likeMark: '//div[@qa="day-report-item-0"]//button[@qa="like-button"]'
};


module.exports = { loginSelectors, loginAsAdminData, logoutSelectors, loginAsStudentData, diaryButtonMainViewSelectors,
  diaryPageSelectors,  diaryPageData, approveSelectors, deleteSelectors, likeSelectors};