/// <reference types="cypress"/>

describe("File Download & File Upload", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend");
    cy.clickCard("File Download & Upload");
  });
  const fileName = "SampleText.txt";

  it("File Download", () => {
    

    cy.get("#file_download").click();

    cy.readFile(`cypress/downloads/${fileName}`);
  });

    /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "File Upload" card
   * Send the path of the file as keys to the "Choose File" input box
   * Click on the "UPLOAD" button
   * Validate the result message equals "You Uploaded 'SampleText.txt'"
   */

  it("File Upload", () => {
    
    cy.get('#file_upload').selectFile(`cypress/downloads/${fileName}`)

    // cy.get('#file_upload').selectFile([`cypress/downloads/${fileName}1`, `cypress/downloads/${fileName}2`])

    // cy.get('#file_upload').selectFile(`cypress/downloads/${fileName}`, { action: 'drag-drop' })

    cy.get('#file_submit').realClick()

    cy.get('#result').should('have.text', `You uploaded ${fileName}`)
  });
});
