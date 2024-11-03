/// <reference types="cypress"/>

describe("Handling Multiple Windows", () => {
  beforeEach(() => {
    cy.clickCard("Multiple Windows");
  });

  it("Tabs", () => {
    cy.get("#microsoft").should("have.attr", "target", "_blank");

    cy.get("#microsoft").invoke("removeAttr", "target").click();

    // cy.url().should('contains', 'microsoft')
  });

  /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Multiple Windows" card
   * Click on the "Apple" link
   * Validate that the child window title is "Apple"
   * Navigate back to main page
   * Validate title contains "techglobal"
   */

  it("Test Case", () => {

    cy.get('#apple').invoke('removeAttr', 'target').click()
    cy.title().should('contain', 'Apple')

    cy.go(-1)

    cy.title().then((title) => {
      cy.wrap(title.toLowerCase()).should('contain', 'techglobal')
    })
  });
});
