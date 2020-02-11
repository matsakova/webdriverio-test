import LoginPage from "../login/LoginPage";
import ProfilePage from "../profile/ProfilePage";
import CoursesPage from "./CoursesPage";
import CreateNewCoursePage from "./CreateNewCoursePage";


describe('CREATE COURSES', () => {
  before('Login as admin', () => {
    LoginPage.loginAsAdmin()
  });

  after('Logout', () => {
    LoginPage.logout();
  });

  it('should click Courses button', () => {
    ProfilePage.coursesBtn();
  });

  it('should click Create new Course button', () => {
    CoursesPage.createNewCourseBtn();
  });

  it('should fill out Course name field', () => {
    const element = CreateNewCoursePage.courseNameField;
    element.setValue('new new course');
  });

  it('should fill out Course description field', () => {
    const element = CreateNewCoursePage.courseDescriptionField;
    element.setValue('abc');
  });

  it('should choose one option in Access type dropdown', () => {
    const dropdownList = CreateNewCoursePage.accessTypeDropdown;
    dropdownList.selectByVisibleText('All');
  });

  it('should click Create button', () => {
    CreateNewCoursePage.createBtn();
  });


});