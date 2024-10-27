	

	10-27-2024 Cypress Assertions


		Cypress Selector APIs

		- cy.get()
		- cy.contains()			=> Finds the element by visible text

				@example
					cy.contains('HTML Elements')
					cy.contains(locator, 'visibleText')
					cy.get('div').contains('visibleText')

		- cy.find()		=> It targets the descendant element of its subject.

				@example
					cy.get('div').find('.className')

		- next(), prev(), nextAll(), prevAll()

				These selectors helps you traverse between the web elements by their siblings.

		- parent(), parentAll(), children()

				Helps you target the parent or child of a web element.


		How to target if your locator returns multiple elements ?

				.eq()
				.first()
				.last()



		ACTION COMMANDS

			- click()
			- check(), uncheck()	=> It can be used only web elements that are <		input> and their types are either "checkbox", or "radio"

				@example

					true	-> <input type="checkbox">
					true	-> <input type="radio">
					false	-> <input type="email">
					false	-> <label for="radio"></label>

			- select()		=> It used to select values from the dropdown IF 			dropdown created using <select> html web element.

			- type()		=> Sends text inside the input bar
			- clear()		=> Clears the value in the input var