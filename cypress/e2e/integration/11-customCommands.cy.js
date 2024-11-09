/// <reference types="cypress"/>


describe("File Download & File Upload", () => {
  beforeEach(() => {
    cy.clickCard("HTML Elements");
  });

  it('Parent Command', () => {
    /* Parent Commands */
    // cy.get()
    // cy.url()
    // cy.title()
    // cy.visit()
    // cy.window()
    // cy.on()

    cy.selectDropdownOption('#company_dropdown1', 'Apple')

    cy.login('randomEmail@gmail.com', 'TechGlobal')
  })

  it('Child Command', () => {
    /* Child Commands */
    // cy.should()
    // cy.find()
    // all the action commands

    cy.get('#main_heading').logText()

    cy.get('#main_heading').then((subject) => {
      const text = subject.text()
      cy.log(text)
    })

    cy.get('#main_heading').haveText('HTML Elements')

    cy.get('#main_heading').logText().haveText('HTML Elements')

    cy.log(Cypress.env('SITE_URL'))
    cy.log(Cypress.env('UI_USERNAME'))
    cy.log(Cypress.env('UI_PASSWORD'))

    // Next Test - If you want to overwrite
    cy.log(Cypress.env('SITE_URL', 'https://www.google.com/'))
  })

  // it.only('Test Server', () => {
  //   cy.visit('http://127.0.0.1:5500/index.html')
  // })
})