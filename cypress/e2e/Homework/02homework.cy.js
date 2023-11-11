import LoginPage from "../pages/loginPage";

const loginPage = new LoginPage

describe("Homework02", () => {

  it("Test Case 01 Validate the login form", () => {
    cy.visit("https://techglobal-training.com/frontend/project-2");



    const testData1 = ['Please enter your username', 'Please enter your password']
    cy.get('#username, #password').parent().each((el, index) => {
      cy.wrap(el).should('have.text', testData1[index]).and('be.visible').and('not.have.attr', 'required')
    })

    cy.get('#login_btn').should('be.visible').and('be.enabled').and('have.text', 'LOGIN')
      .next().should('be.visible').and('have.text', 'Forgot Password?').should('have.attr', 'href', '/frontend/project-2')


  })
  it("Test Case 02 Validate the valid login", () => {
    cy.visit("https://techglobal-training.com/frontend/project-2");


    loginPage.logInto('TechGlobal', 'Test1234')
    cy.get('#success_lgn').next().should('be.visible').and('have.text', 'LOGOUT')
  })

  it("Test Case 03 Validate the logout", () => {
    cy.visit("https://techglobal-training.com/frontend/project-2");

    loginPage.logInto('TechGlobal', 'Test1234')
    cy.get('#logout').click()
  })

  it("Test Case 04 Validate the Forgot Password? Link and Reset Password modal", () => {
    cy.visit("https://techglobal-training.com/frontend/project-2");

    loginPage.forgotPaswword().click()
    cy.get('#modal_title, .delete').should('be.visible')
    cy.get('#email').parent().should('have.text', "Enter your email address and we'll send you a link to reset your password. ").and('be.visible')
    loginPage.submitButton().should('be.enabled').and('be.visible').and('have.text', 'SUBMIT')
  })


  it("Test Case 05 Validate the Forgot Password? Link and Reset Password modal", () => {
    cy.visit("https://techglobal-training.com/frontend/project-2");

    loginPage.forgotPaswword().click()
    cy.get('#modal_title').should('have.text', 'Reset Password')
    cy.get('.delete').click()
    cy.get('#confirmation_message').should('not.exist')
  })

  it("Test Case 06 Validate the Reset Password form submission", () => {
    cy.visit("https://techglobal-training.com/frontend/project-2");
    loginPage.forgotPaswword().click()
    cy.get('#email').type('johndoe@gmail.com')
    loginPage.submitButton().click()
    cy.get('#confirmation_message').should('have.text', 'A link to reset your password has been sent to your email address.')

  })
 


  const testData = [
    {
      describe: 'Validate the failure message is displayed as “Invalid Username entered!” above the form',
      error: 'Invalid Username entered!',
      empty: true
    },
     {
      describe: 'Validate the failure message is displayed as “Invalid Username entered!” above the form',
      username: 'John',
      password: 'Test1234',
      error: 'Invalid Username entered!',
    },
     {
      describe: 'Validate the failure message is displayed as “Invalid Password entered!” above the form',
      username: 'TechGlobal',
      password: '1234',
      error:'Invalid Password entered!'
    },
     {
      describe: 'Validate the failure message is displayed as “Invalid Username entered!” above the form',
      username: 'John',
      password: '1234',
      error: 'Invalid Username entered!'
    }
  ]
  

testData.forEach((test, index) => {

it(`Test Case 0${index + 7} -${test.describe}`, () => {
    cy.visit("https://techglobal-training.com/frontend/project-2");
if (test.empty){
  loginPage.getLoginButton().click()
  loginPage.errorMessage().contains(test.error)
}
else {
  loginPage.logInto(test.username, test.password)
  loginPage.errorMessage().contains(test.error)

}
})

  })

})
