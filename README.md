# CypressProject02


This repository contains Cypress automated tests for the login functionality of a web application hosted on https://techglobal-training.com/frontend/project-2. The tests cover various scenarios, including form validation, successful login, logout, and password reset functionality.

Prerequisites to run this tests.

1. Make sure you have Node.js and npm installed on your machine.
2. Clone this repository to your local machine.
git clone https://github.com/YuriiBazhenov/CypressProject02
3. Navigate to the project directory.
cd CypressProject02
4. Install the project dependencies.
npm install

The following tools are used in this project:

1. JavaScript
2. Cypress
3. Test Cases

Pages
- This folder contains the loginPage.js file it defines methods and storing all web elements, which are used in this project and stands for reducing code duplication and improves test case maintenance.

Test Descriptions

Positive Test Cases:

Test Case 01 - Validate the login form
- This test case ensures that the login form is displayed correctly, and the required elements are present.

Test Case 02 - Validate the valid login
- This test case verifies that a user can successfully log in with valid credentials.

Test Case 03 - Validate the logout
- This test case checks the functionality of logging out after a successful login.

Test Case 04 - Validate the Forgot Password? Link and Reset Password modal
- This test case examines the behavior of the "Forgot Password?" link and the corresponding modal for resetting the password.

Test Case 05 - Validate the Reset Password modal close button
- This test case checks the functionality of the close button in the Reset Password modal.

Test Case 06 - Validate the Reset Password form submission
- This test case simulates the submission of the Reset Password form and checks for the confirmation message.

Negative Test Cases

Test Case 07: Validate the invalid login with empty credentials
- This test case is checking how the application handles an attempt to log in with empty credentials.

Test Case 08: Validate the invalid login with the wrong username
- In this test case, the login is attempted with a valid password but an incorrect username.

Test Case 09: Validate the invalid login with the wrong password
- In this test case, the login is attempted with a valid username but an incorrect password.

Test Case 10: Validate the invalid login with the wrong username and password
- In this test case involves an attempt to log in with both an incorrect username and an incorrect password. The expected outcome is an error message stating "Invalid Username entered!".