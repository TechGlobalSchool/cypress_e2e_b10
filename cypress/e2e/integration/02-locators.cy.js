/// <reference types="cypress"/>

describe("CSS Locators", () => {
  it("Understanding CSS Syntax - Locating using tags", () => {
    cy.visit("https://www.techglobal-training.com/frontend/html-elements");

    cy.get("button");

    cy.get("h3");

    cy.get("li");

    cy.get("input");
  });

  it("Understanding CSS Syntax - Locating class and ID", () => {
    cy.visit("https://www.techglobal-training.com/frontend/html-elements");


    cy.get('#checkbox-button-group')

    cy.get('.checkbox')

    // class="nadja_tugba youseff jibril kareem maria alina david timur bermet"
  });

  it("Understanding CSS Syntax - Locating web elements using multiple selectors", () => {
    cy.visit("https://www.techglobal-training.com/frontend/html-elements");

    
    cy.get('label.checkbox.is-inline')
  });

  it("Understanding CSS Syntax - Locating child, descendant, adjacent web element", () => {
    cy.visit("https://www.techglobal-training.com/frontend/html-elements");

    /**
     * Child Selector ( > ) *
     * 
     * Description: Targets direct children of a specified parent element.
     */

    cy.get('#checkbox-button-group > h3')

    cy.get('#checkbox-button-group > div > #apple_check > #checkbox_1')

    cy.get('#checkbox-button-group > div > .checkbox > #checkbox_1.mr-2')
  });
});
