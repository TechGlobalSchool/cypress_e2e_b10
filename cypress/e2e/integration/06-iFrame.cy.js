/// <reference types="cypress"/>

describe("Handling iFrames", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend");
    cy.contains(".card", "IFrames").click();
  });

  it("iFrame", () => {

    cy.get("#form_frame")
    .its("0.contentDocument.body")
    .should('not.be.empty')
    .find('#first_name').type('myName')
  });
});
