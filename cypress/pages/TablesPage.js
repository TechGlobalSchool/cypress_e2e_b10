import BasePage from './BasePage'

class TablesPage extends BasePage {
  getCompanyTableHeaders() {
    return cy.get('.header')
  }
}

export default TablesPage
