import { IndexPage } from '../pages/indexPage'
const indexPage = new IndexPage()
const registrationUrl = "https://www.way2automation.com/way2auto_jquery/index.php"

describe('way2automation registration form spec', () => {
  before(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
  })

  beforeEach(() => {
    cy.visit(registrationUrl)
  })

  it('should registration and login forms', () => {
    //2.Validate the form title.
    indexPage.validateRegistrationTitle()
    //3.Validate the form is having (Already Have an Account) link.
    indexPage.validateRegistrationFormLinks()
    //4.Validate the form to have the (Name, Phone, Email, Country, City, Username, Password) fields.
    indexPage.validateFormFields()
    //5.Click the ‘Submit’ button, and validate the error message.
    indexPage.validateEmptyErrorMessage()
    //6.Fill in all required data then click the ‘Submit’ button.
    cy.fixture('user').then((data)=>{
      indexPage.fillRegistrationForm(data.userName,data.userPhone,data.userEmail,data.userCountry,data.userCity,data.userUsername,data.userPassword)
    })
    //7.Assert the displayed message
    cy.get('#alert').contains('This is just a dummy form, you just clicked SUBMIT BUTTON')
    //8.Click on link ‘Signin’
    indexPage.gotoLogin()
    //9.Validate the new form is open with title ‘LOGIN’
    indexPage.validateLoginTitle()
    //10.Type username and password
    cy.fixture('user').then((data)=>{
      indexPage.fillLoginForm(data.userUsername,data.userPassword)
    })
    //11. Click ‘LOGIN’
    indexPage.clickLogin()
    //12.Validate the message displayed
    cy.get('#alert1').contains('This is just a dummy form, you just clicked LOGIN')
  })

  after(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
  })
})