	

	11-04-2024	Cypress Timeouts and Debugging


		
		1. Parent

			The commands we call using the cy object are the parent commands

				- visit
				- get
				- url
				- title
				- wrap()

				@example

			Cypress.command.add('methodName', (callBack) => {

			})

		2. Child

			Child commands are the commands that we can chain any CYp[ress command

				- should
				- type, click ( all the action commands )
				- next
				- find
				- then

			Cypress.command.add('methodName', { prevSubject: true } ,(subject) => {

			})

		3. Dual

			The commands that are parent and child at the same time.

				- contains()
				- screenshot()
				- scrollTo()
				- wait()


			Cypress.command.add('methodName', { prevSubject: 'optional' } ,(subject) => {

			})


		4. Overwriting

			This helps programmer to overwrite the functionality of any Cypress command we have.




		CLI ( Command Line Interface )

			Running tests using the CLI gives user flexibility to run tests in any configuration they want.

			E.g.

				- headless or headed
				- browser type
				- using any configuration
				- running any specific test file



			- npx cypress run

				* Electron
				* headless

			FLAGS:

			* --headed		=> Runs the tests in the browser mode
			* --browser		=> Defines the browser you want to use (--browser chrome)
			* --config 		=> You can change any option you want per run from the config file
			* --spec 		=> Allows you to choose specific test you want to run
			* --env 		=> It gives you option to overwrite the option you have in the env object


			// Run the tests in chrome browser with headed mode using chromewebsecurity false and specfic test file


			npx cypress run --browser chrome --headed --config chromeWebSecurity=false --spec "path/path/test.cy.js"

			"scripts": {
				"test": "npx cypress run",
				"test:file": "node blabla.js"
			}

			How can i run the "test" script ?

				npm t
				npm test


				npm run test:file


				npm t --headed   	WRONG

				npm t 			=> npm script
				--headed		=> Cypress CLI

				npm t -- --headed 	CORRECT