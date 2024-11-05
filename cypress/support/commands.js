// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

Cypress.Commands.add('clickCard', (link) => {
  cy.contains('.card, [class*="projectCard"]', link).click();
})

Cypress.Commands.add('selectDropdownOption', (locator, option) => {
  cy.get(locator).select(option)
})

/**
 * Create a Cypress function that will name 'login'
 * 
 * This function will get 2 arguments ( email, and name )
 * 
 * It will enter the user email on Focus section and click on the submit button
 */

Cypress.Commands.add('login', (email, name) => {
  cy.get('[name="email"]').type(email)
  cy.get('.mb-3 > input').clear().type(name)
  cy.get('.mb-3 + button').click()
})

// Create a method that will validate the text of the web element

Cypress.Commands.add('textValidator', (locator, text) => {
  cy.get(locator).should('have.text', text)
})

// cy.textValidator('#main_heading', 'HTML Elements')

// /**
//  * Adds two numbers together.
//  * 
//  * @param {number} a - The first number.
//  * @param {number} b - The second number
//  * @returns {number} - The sum of the two numbers.
//  * 
//  * 
//  * @example
//  * // Returns 5
//  * add(2, 3)
//  * 
//  *  * @example
//  * // Returns 10
//  * add(7, 3)
//  */
// export function add(a, b) {
//   return a + b;
// }

// add('tech', 'global')

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//

Cypress.Commands.add('logText', { prevSubject: true }, (subject) => {
  const text = subject.text()
  cy.log(text)

  // cy.wrap(subject)
  return cy.wrap(subject)
})

// create a child function that validates the text of the web element
Cypress.Commands.add('haveText', { prevSubject: 'element' }, (subject, expectedText) => {
  cy.wrap(subject).should('have.text', expectedText)
})

// cy.get('#element').then((subject) => {
//   cy.wrap(subject).than('have.text', 'expectedText')
// })

/**
 * Create a child custom command that will validate the attribute and the value of web element 
 */ 

Cypress.Commands.add('assertAttribute', { prevSubject: 'element' } ,(subject, attribute, value) => {
  if(value === null) {
    cy.wrap(subject).should('have.attr', attribute)
  } else {
    cy.wrap(subject).should('have.attr', attribute, value)
  }
  
})

//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })