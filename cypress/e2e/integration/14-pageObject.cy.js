/// <reference types="cypress"/>
import LoginPage from "../../pages/LoginPage";

const loginPage = new LoginPage();

describe("Login Page Test", () => {
  beforeEach(() => {
    cy.clickCard("Login Function");

    cy.fixture('example').then(function(data) {
      this.username = data.username
      this.password = data.password
    })

  });

  it("Login without POM", () => {
    cy.get("#username").type(Cypress.env("UI_USERNAME"));

    cy.get("#password").type(Cypress.env("UI_PASSWORD"));

    cy.get("#login_btn").click();

    cy.get("#success_lgn").should("be.visible");
  });

  it("Login with POM", function() {
    // loginPage.clickTestingDropdownOption("Backend Testing");

    // loginPage.userLogin(Cypress.env('UI_USERNAME'), Cypress.env('UI_PASSWORD'))
    loginPage.userLogin(this.username, this.password)
    loginPage.getSuccessMessage().should('be.visible')
  });

  /**
   * 1. Navigate to Login Project Page
   * 2. Enter the wrong username and the password
   * 3. Validate error message is "Invalid Username entered!"
   */

  it("Login with POM - Negative", () => {
    loginPage.userLogin(Cypress.env('UI_USERNAME', 'WrongUser'), Cypress.env('UI_PASSWORD', 'WrongPassword'))
    loginPage.getErrorMessage().should('have.text', "Invalid Username entered!")
  });
});
