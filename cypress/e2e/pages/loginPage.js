


class LoginPage {

    getUserNameField(){
       return cy.get('#username')
    }
    getPasswordField(){
       return cy.get('#password')
    }
    getLoginButton(){
       return cy.get('#login_btn')
    }
    getSuccessMessage(){
       return cy.get('#success_lgn')
    }
    getForgotPasswordLink(){
      return cy.get('[href="/frontend/project-2"]')
    }
    getLogoutButton(){
      return cy.get('#logout')
    }
    getVisitProject2(){
      return cy.visit('https://techglobal-training.com/frontend/project-2')
    }
    logInto(username, password){
       this.getUserNameField().type(username)
       this.getPasswordField().type(password)
       this.getLoginButton().click()
    }
    logout(){
      this.getLogoutButton().click()
    }

    forgotPaswword(){
      return cy.get('#login_btn').next()
    }

    submitButton(){
      return cy.get('#submit')
    }

    errorMessage(){
      return cy.get('#error_message')
    }
   }
   
   export default LoginPage