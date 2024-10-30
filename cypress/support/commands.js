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
  cy.contains(".card", link).click();
})

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
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })