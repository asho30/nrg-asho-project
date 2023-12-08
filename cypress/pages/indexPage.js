export class IndexPage {
    constructor() {
        this.selectors = {
            registrationForm: "form.ajaxsubmit",
            registrationFormTitle: "input[value='register']+h3",
            signinText: "#load_box :nth-child(12) div.span_3_of_4:first-child p.text_popup",
            signinLink: "#load_box :nth-child(12) div.span_3_of_4:first-child p.text_popup a",
            testingWebsiteLink: "#load_box :nth-child(13) > .span_3_of_4 > :nth-child(1) > a.fancybox",
            lifetimeMembershipLink: "#load_box :nth-child(13) > .span_3_of_4 > :nth-child(2) > a.fancybox",
            nameField: "form.ajaxsubmit fieldset>input[name='name']",
            phoneField: "form.ajaxsubmit fieldset>input[name='phone']",
            emailField: "form.ajaxsubmit fieldset>input[name='email']",
            countryList: "form.ajaxsubmit fieldset>select[name='country']",
            cityField: "form.ajaxsubmit fieldset>input[name='city']",
            usernameField: "form.ajaxsubmit fieldset>input[name='username']",
            passwordField: "form.ajaxsubmit fieldset>input[name='password']",
            submitButton: "form.ajaxsubmit input[value='Submit']",
            loginFormTitle: "input[value='login']+h3",
            usernameLoginField: "form.ajaxlogin fieldset>input[name='username']",
            passwordLoginField: "form.ajaxlogin fieldset>input[name='password']",
            loginButton: "form.ajaxlogin input[value='Submit']"
        }
    }

    validateFormFields() {
        cy.get(this.selectors.nameField).should('exist').should('be.visible')
        cy.get(this.selectors.phoneField).should('exist').should('be.visible')
        cy.get(this.selectors.emailField).should('exist').should('be.visible')
        cy.get(this.selectors.countryList).should('exist').should('be.visible')
        cy.get(this.selectors.cityField).should('exist').should('be.visible')
        cy.get(this.selectors.usernameField).should('exist').should('be.visible')
        cy.get(this.selectors.passwordField).should('exist').should('be.visible')
    }

    validateRegistrationFormLinks() {
        cy.get(this.selectors.registrationForm).contains("p.text_popup", "Already Have an Account").should("have.text", "Already Have an Account? | Signin")
        //2nd way to select the element
        cy.get(this.selectors.signinText).should("have.text", "Already Have an Account? | Signin")
        cy.get(this.selectors.signinLink).should('have.attr', 'href').and('include', '#login')

        //Validate the form is having (TESTING WEBSITE) link.
        cy.get(this.selectors.registrationForm).contains("a.fancybox", "TESTING WEBSITE").should("have.text", "ENTER TO THE TESTING WEBSITE")
            .should('have.attr', 'href').and('include', 'automation-practice-site.html')
        //2nd way to select the element
        cy.get(this.selectors.testingWebsiteLink).should("have.text", "ENTER TO THE TESTING WEBSITE").should('have.attr', 'href')
            .and('include', 'automation-practice-site.html')
        //Or the full link==> https://www.way2automation.com/way2auto_jquery/automation-practice-site.html

        //Validate the form is having (LIFETIME MEMBERSHIP) link.
        cy.get(this.selectors.registrationForm).contains("a.fancybox", "LIFETIME MEMBERSHIP").should("have.text", "EXPLORE LIFETIME MEMBERSHIP")
            .should('have.attr', 'href').and('include', 'lifetime-membership-club')
        //2nd way to select the element
        cy.get(this.selectors.lifetimeMembershipLink).should("have.text", "EXPLORE LIFETIME MEMBERSHIP").should('have.attr', 'href').and('include', 'lifetime-membership-club')
        //Or the full link==> https://www.way2automation.com/lifetime-membership-club/
    }

    fillRegistrationForm(userName,userPhone,userEmail,userCountry,userCity,userUsername,userPassword) {
        cy.get(this.selectors.nameField).type(userName)
        cy.get(this.selectors.phoneField).type(userPhone)
        cy.get(this.selectors.emailField).type(userEmail)
        cy.get(this.selectors.countryList).select(userCountry)
        cy.get(this.selectors.cityField).type(userCity)
        cy.get(this.selectors.usernameField).type(userUsername)
        cy.get(this.selectors.passwordField).type(userPassword)
        cy.get(this.selectors.submitButton).click()
    }

    validateEmptyErrorMessage() {
        cy.get(this.selectors.submitButton).click()
        cy.get('input:invalid').invoke('prop', 'validationMessage').should('equal', 'Please fill out this field.')
    }

    gotoLogin() {
        cy.get(this.selectors.signinLink).click()
    }

    validateLoginTitle() {
        cy.get(this.selectors.loginFormTitle).should("have.text", "Login")
    }

    validateRegistrationTitle() {
        cy.get(this.selectors.registrationFormTitle).should("have.text", "Dummy Registration Form")
    }

    fillLoginForm(userUsername,userPassword) {
        cy.get(this.selectors.usernameLoginField).type(userUsername)
        cy.get(this.selectors.passwordLoginField).type(userPassword)
    }

    clickLogin() {
        cy.get(this.selectors.loginButton).click()
    }
}