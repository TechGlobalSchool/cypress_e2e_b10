/// <reference types="cypress"/>

// This is describe test block that holds group of tests
describe('My First Tests', () => {

  // This is it test block that holds individual test
  it('Visit TechGlobal training app homepage', () => {

    cy.visit('https://techglobal-training.com/')

    // Command to refresh your current url
    cy.reload();

    cy.visit('https://techglobal-training.com/frontend')

    // Navigate back on the webpage
    // cy.go('back')
    cy.go(-1)

    // Navigate forward on the webpage
    // cy.go('forward')
    cy.go(1)

    cy.title().should('eq', 'TechGlobal Training | Home')

    cy.url().should('contain', 'https://www.techglobal-training.com/')
  })

  it('My First Test', () => {

    // expect(true).to.equal(false)

    cy.visit('https://techglobal-training.com/frontend')

    // cy.get('#logo').click()
    // cy.get('#logo').should('be.visible')

    cy.get('#logo').click().should('be.visible')

    /// 'burak' === 'burak'

    /// logo === 'burak
  })
})