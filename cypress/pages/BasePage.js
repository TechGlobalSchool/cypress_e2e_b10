class BasePage {
  /* Locators */
  getLogo() {
    return cy.get('#logo')
  }

  getTestingDropdown() {
    return cy.get('#dropdown-testing')
  }

  getExercisesDropdown() {
    return cy.get('#dropdown-exercises')
  }

  getMainHeading() {
    return cy.get('#main_heading')
  }

  getMockInterviews() {
    return cy.contains('div', 'Mock Interviews')
  }

  /* Methods */
  hoverTestingDropdown() {
    this.getTestingDropdown().realHover()
  }

  /**
   * Clicks a specific option in the testing dropdown after hovering over it.
   *
   * @param {string} option - The option to click ("Frontend Testing" or "Backend Testing").
   * @throws {Error} If the option is invalid.
   */
  clickTestingDropdownOption(option) {
    this.hoverTestingDropdown()

    const optionMapping = {
      'Frontend Testing': '#frontend-option',
      'Backend Testing': '#backend-option',
    }

    const optionSelector = optionMapping[option]

    if (!optionSelector) {
      throw new Error(`Invalid option: ${option}`)
    }

    cy.get(optionSelector).realClick()

    cy.on('uncaught:exception', () => {
      return false
    })
  }
}

export default BasePage
