/// <reference types="cypress"/>

describe('Debugging', () => {
  beforeEach(() => {
    cy.clickCard('HTML Elements')
  })

  it('cy.wait() - Hard Wait', () => {

    cy.get('#checkbox_1').check()

    // cy.wait(10000)

    cy.get('#checkbox_2').check()
  })

  it('cy.pause() - Debugging use pauge', () => {

    cy.visit(`${Cypress.env('SITE_URL')}/frontend`)
    cy.clickCard('Login Function')

    cy.get('#username').type(Cypress.env('UI_USERNAME'))

    // cy.pause()

    cy.get('#password').type(Cypress.env('UI_PASSWORD'))
    
    cy.get('#login_btn').click()

    cy.get('#success_lgn').should('be.visible')
  })

  it('cy.debug() - Debugging use debug', () => {

    cy.visit(`${Cypress.env('SITE_URL')}/frontend`)
    cy.clickCard('Login Function')

    cy.get('#username').type(Cypress.env('UI_USERNAME'))

    cy.get('#password').type(Cypress.env('UI_PASSWORD'))
    
    cy.get('#login_btn').click()

    // cy.debug()

    cy.get('#success_lgn').should('be.visible')

  })
})