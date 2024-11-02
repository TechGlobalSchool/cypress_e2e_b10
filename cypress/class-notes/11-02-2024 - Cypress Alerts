	

	11-02-2024	Cypress Alerts


		ALERTS AND DIALOGS

			- Warning		=> It's a dialogue with OK button
			- Confirmation	=> Its with 2 options, okay and cancel
			- Prompt		=> It requires input from the user



		Cypress by default handles Warning and Confirmation alerts by clicking the OK.

		What about the Prompt ?

		Cypress doesn't handle the prompt alert, because it requires input from the user, and since Cypress doesn't know what is this input, they rather not to handle it.

		How to get the text, and handle the options of an error in Cypress ?

			Using event listeners:

			cy.on()		=> Event listener in Cypress.

			Syntax to handle confirmation alert and click on the cancel button

				cy.on('window:confirm', (str) => {
					expect(str).to.equal('expected error')
					return false
				})


		IFRAMES

			How to target element in an iFrame

			1. Target the iFrame ITSELF
			2. Access the property of web element you target using its()
			3. Now you are inside the iframe, you can target the web element any child selector API.

				@example

				cy.get('iframe')
				.its('0.contentDocument.body')
				.find(webElement)


		MULTIPLE TABS

			Since Cypress architecture is built on run directly in the browser, it has same limitations that regular user have. This architecture makes Cypress use the browser as runner, and it limits its context.

			First of all, Cypress DOES NOT handle multiple tabs, instead they workaround by manipulating the web element by using JQuery.

			Cypress get advantage from this, and allows user to remove the attribute that triggers the link on the new tab ( which is target="_blank").

				@example

				cy.get(webElement).invoke('removeAttr', 'target').click()