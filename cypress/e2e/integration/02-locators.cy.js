/// <reference types="cypress"/>

describe('CSS Locators', () => {
  it('Understanding CSS Syntax - Locating using tags', () => {
    cy.visit('https://www.techglobal-training.com/frontend/html-elements')

    cy.get('button')

    cy.get('h3')

    cy.get('li')

    cy.get('input')
  })

  it('Understanding CSS Syntax - Locating class and ID', () => {
    cy.visit('https://www.techglobal-training.com/frontend/html-elements')


    cy.get('#checkbox-button-group')

    cy.get('.checkbox')

    // class="nadja_tugba youseff jibril kareem maria alina david timur bermet"
  })

  it('Understanding CSS Syntax - Locating web elements using multiple selectors', () => {
    cy.visit('https://www.techglobal-training.com/frontend/html-elements')

    
    cy.get('label.checkbox.is-inline')
  })

  it('Understanding CSS Syntax - Locating child, descendant, adjacent web element', () => {
    cy.visit('https://www.techglobal-training.com/frontend/html-elements')

    /**
     * Child Selector ( > ) *
     * 
     * Description: Targets direct children of a specified parent element.
     */

    cy.get('#checkbox-button-group > h3')

    cy.get('#checkbox-button-group > div > #apple_check > #checkbox_1')

    cy.get('#checkbox-button-group > div > .checkbox > #checkbox_1.mr-2')


    /**
     * Descendant Selector ( space ) *
     * 
     * Description: Targets elements nested anywhere within a specific parent.
     */

    cy.get('#checkbox-button-group #checkbox_1')

    // cy.get('#checkbox-button-group > div > #microsoft_check')
    cy.get('#checkbox-button-group #microsoft_check')
    cy.get('div #microsoft_check')

    cy.get('div #unordered_list')

    cy.get('#ordered_list #ordered_list_item1')


    // Locates the immediate sibling of #unordered_list_item1, and after li
    cy.get('#ordered_list #ordered_list_item1 + li + li')

    // Locates the all the NEXT siblings of #unordered_list_item1
    cy.get('#ordered_list #ordered_list_item1 ~li')


    /**
     * Grouping Selectros ( , ) *
     * 
     * Description: Combines multiple selectors into one rule set, 
     * allowing you to style different elements with the same set of styles.
     */

    cy.get('#register_button, #main_header_container + button')

    cy.get('#text_input1, #facebook_link').should('be.visible')

    // cy.get('#text_input1').should('be.visible')
    // cy.get('#facebook_link').should('be.visible')

    /**
     * 1. Navigate to TechGlobal frontend Html Elements Page
     * 2. Validate  "Enter Text Here" input bar is visible
     * 3. Validate "Facebook" link is visible
     */
  })


  it('Locating the element using Attribute Selectors', () => {
    cy.visit('https://www.techglobal-training.com/frontend/html-elements')

    // These are proper way to locate the class and id
    cy.get('#checkbox-button-group')
    cy.get('.checkbox')


    cy.get('[id="checkbox-button-group"]')
    // cy.get('[class="class"]')

    cy.get('[data-identifier="Headings"]')
    cy.get('[value="Apple"]')
    cy.get('[type="checkbox"]')

    // cy.get('#company_dropdown1 > option[value="Apple"]')
    // cy.get('[id="company_dropdown1] > option[value="Apple"]')
  })

  it('Test Case', () => {

    /**
   * TEST CASE 1
   * Go to https://techglobal-training.com/frontend/dynamic-elements
   * Locate the below box is displayed
   * Box 1
   *
   * TEST CASE 2
   * Go to https://techglobal-training.com/frontend/dynamic-elements
   * Locate the below box is displayed
   * Box 2
   */



    /**
   * @example:
   * [class="className"] 
   * [id="idName"]
   * [value="Apple"]
   * 
   * [id="box_1_xCfW"]
   *
   * contains     => [id*="box_1_"]
   * starts-with  => [id^="box_1_"]
   * ends-with    => [id$="box_1_"]
   */

    cy.visit('https://techglobal-training.com/frontend/dynamic-elements')

    cy.get('[id^="box_1_"]').should('be.visible')
    cy.get('[id*="box_2_"]').should('be.visible')

    // cy.get('[id^="box_1_"], [id*="box_2_"]')

  // cy.get('[id^="box_"]')
  })

  it('Pseudo Classes', () => {

    cy.visit('https://www.techglobal-training.com/frontend/html-elements')

    cy.get('#ordered_list > li:first-child')
    cy.get('#ordered_list > li:last-child')
    cy.get('#ordered_list > li:nth-child(2)')

    // cy.get('input:checked')

    cy.get('#microsoft_check input').check()

    cy.get('input:checked')

    cy.get('input:not(#checkbox_1)')
    cy.get('input:not(input:checked)')

    cy.get('.checkbox:where(#apple_check, #microsoft_check)')
  })
})
