/// <reference types="cypress"/>

describe("Handling Alerts", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend");
    cy.clickCard("Alerts");
  });

  it("Handling the Warning Alert", () => {

    cy.on('window:alert', (str) => {
      console.log(`My warning alert text content is: ${str}`)
      expect(str).to.equal('You are on TechGlobal Training application.')
    })

    cy.get("#warning_alert").click()
  });

  it("Handling the Confirmation Alert", () => {

    cy.on('window:confirm', (str) => {
      // expect(str).to.equal('Would you like to stay on TechGlobal Training application?')

      return false
    })  

    cy.get("#confirmation_alert").click()
  });
})