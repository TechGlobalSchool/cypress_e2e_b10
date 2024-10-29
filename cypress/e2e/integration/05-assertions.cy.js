/// <reference types="cypress"/>

describe("Assertions", () => {
  beforeEach(() => {
    // This will fail if the page doesn't send text/html with a 200 status
    cy.visit("https://www.techglobal-training.com/frontend");
    cy.contains(".card", "HTML Elements").click();
  });

  it("Default Assertions", () => {
    cy
      // There is a default assertion that
      // this button must exist in the DOM before proceeding
      .get("#register_button")
      // since Cypress internally checks if the web element on the dom tree or not
      // we don't really need to do the below assertion
      .should("be.visible")
      // before we issuing the click, the button must be "actionable"
      // it can not be covered, disabled, or hidden from the view.
      .click();

    // This will fail because submit button is disabled
    // cy.get('.mt-3 + .mt-3 + button').click()
  });

  it("Implicit Assertions", () => {
    cy.get("#main_heading").should("be.visible");

    // Using implicit assertions, assertion wont fail right away, instead
    // it waits specific amount of time and retries again and again
    // and if condition is still false, it fails.
    // cy.get('#main_heading').should('not.be.visible')

    // cy.get('#main_heading').should('eq', 'HTML Elements')
    // <label> === 'HTML Elements'

    cy.get("#main_heading").should("have.text", "HTML Elements");

    cy.get("#main_heading").should("contain.text", "Elements");
    cy.get("#main_heading").should("include.text", "Elements");

    // cy.get('#main_heading').should('contain', 'Elements')
    // cy.get('#main_heading').should('include', 'Elements')

    cy.url().should("include", "techglobal");
    cy.url().should("contain", "techglobal");

    cy.title().should("eq", "TechGlobal Training | HTML Elements");

    /**
     * IMPORTANT NOTE
     *
     * Chainers like eq, include, SHOULD NOT be used against the web elements. Web elements comes as a direct object
     * and you must use 'have.text', 'include.text', or 'contain' as a chainer
     *
     * @example
     * cy.get('#main_heading').should('eq', 'HTML Elements')           => WRONG
     * cy.get('#main_heading').should('include', 'HTML Elements')      => WRONG
     *
     * cy.title().should('eq', 'TechGlobal Training | HTML Elements')  => TRUE
     */

    cy.get("#main_heading").then(($el) => {
      cy.log(typeof $el);

      const ele = $el.text();
      cy.wrap(ele).should("eq", "HTML Elements");
    });

    // have.attr chainer checks the element attribute property
    // it can get 2, or 3 arguments, and we can validate if element has specific attribute, and the value of it
    cy.get("#main_heading").should("have.attr", "id");
    cy.get("#main_heading").should("have.attr", "id", "main_heading");

    cy.get("#checkbox_1").should("have.attr", "type", "checkbox");

    // have.length chainer validates how many web element our locator returns
    cy.get('[data-identifier*="e"]').should("have.length", 7);
    cy.get('[data-identifier*="e"]').should("have.length.greaterThan", 6);
    cy.get('[data-identifier*="e"]').should("have.length.gte", 7);

    cy.get('[data-identifier*="e"]').should("have.length.lessThan", 8);
    cy.get('[data-identifier*="e"]').should("have.length.lte", 7);

    // be.enabled checks if element is interactable
    cy.get("#checkbox_1").should("be.enabled");

    const userName = "Bermet Saiakbaeva";

    // have.value checks if input like text, or dropdown has the given value
    cy.get("#text_input1").type(userName).should("have.value", userName);

    // be.checked checks if the INPUT type or radiobox or checkbox is checked
    cy.get("#checkbox_1").check().should("be.checked");

    // check the css attribute and value
    cy.get("#main_heading").should("have.css", "color");

    cy.get("#main_heading")
      .should("have.css", "color", "rgb(105, 105, 105)")
      .and("have.text", "HTML Elements")
      .and("be.visible");

    /**
     * 1. Navigate to "https://www.techglobal-training.com/frontend/project-4"
     * 2. Click on Add Product Button > Model Opens
     * 3. Close the model and validate model is not visible
     */

    cy.visit("https://www.techglobal-training.com/frontend/project-4");

    cy.get("#add_product_btn").click();

    cy.get(".delete").click();

    cy.get(".modal-card").should("not.exist");
  });

  it("Explicit Assertions", () => {
    expect(true).to.equal(true);
    // expect(cy.url()).to.equal(cy.url())

    cy.get("#main_heading").should("have.text", "HTML Elements");

    // expect(cy.get("#main_heading")).to.eq(cy.get("#main_heading"))

    cy.get("#main_heading").then(($el) => {
      cy.log($el);
      expect($el).to.eq($el);

      cy.log($el.text());
      cy.log($el.length);
      cy.log($el.attr("id"));
      cy.log($el.css("color"));

      cy.wrap($el).should("have.text", "HTML Elements");
      cy.wrap($el.text()).should("eq", "HTML Elements");
    });

    /**
     * NOTE: invoke() or without invoke is preference. Has no performance difference or benefit one over the another.
     *
     * Only advantage of retreiving the property right after the query of an element is flexibility.
     */

    cy.get("#main_heading")
      .invoke("text")
      .then((text) => {
        cy.log(typeof text);
        cy.log(text.toUpperCase().trim() + " retrieved property");
      });

    // Explicit assertion to check element equals, includes exist and length
    cy.get("#main_heading").then(($el) => {
      const ele = $el.text();

      cy.log(ele.toUpperCase().trim() + " retrieved property");

      expect(ele).equal("HTML Elements");
      expect(ele).to.equal("HTML Elements");
      expect(ele).to.eq("HTML Elements");
      expect(ele).to.equals("HTML Elements");

      expect(ele).to.include("Elements");

      expect($el).to.exist;

      expect($el).to.have.length(1);
      expect($el).to.have.length.above(0);
    });

    // check element attribute
    cy.get("#main_heading")
      .invoke("attr", "id")
      .then((attr) => {
        cy.log(typeof attr);

        expect(attr).to.eq("main_heading");
      });

    cy.get("#main_heading").then(($el) => {
      const attr = $el.attr("id");
      expect(attr).to.eq("main_heading");
    });

    // check if radio button or checkbox is checked
    // or check if element is visible, or enabled
    cy.get("#checkbox_1").then(($el) => {
      expect($el).to.be.visible;
      expect($el).to.be.enabled;
      expect($el).not.to.be.checked;
    });

    cy.get("#main_heading").should("have.css", "color", "rgb(105, 105, 105)");

    // Retrieve and validate the CSS
    cy.get("#main_heading").then(($el) => {
      const css = $el.css("color");
      expect(css).to.eq("rgb(105, 105, 105)");
    });

    cy.get("#main_heading").then(($el) => {
      const ele = $el.text();
      expect(ele).to.equal("HTML Elements");

      cy.wrap(ele).should("eq", "HTML Elements");
      cy.wrap(ele).should("includes", "Elements");

      cy.wrap($el).should("include.text", "HTML Elements");
      cy.wrap($el).should("have.text", "HTML Elements");
    });
  });

  it("each() - interacting with multiple web elements", () => {
    const arr = ["Hello World!", "I like automation testing!"];

    for (let i = 0; i < arr.length; i++) {
      cy.get('[data-identifier="Paragraphs"] > p')
        .eq(i)
        .should("have.text", arr[i]);
    }

    cy.get('[data-identifier="Paragraphs"] > p').each(($el, index) => {
      cy.log(index);
      // cy.log($el.length)
      cy.log($el.text());

      cy.wrap($el)
        .should("have.text", arr[index])
        .and("be.visible")
        .and("have.length", 1);
    });

    /**
     * 1. On the Html Elements page
     * 2. From the "Headings" section, locate both "Programming Languages" and "Automation Tools" web elements
     * 3. Validate their texts with expected text
     * 4. Validate these elements are visible.
     */

    const headings = ["Programming Languages", "Automation Tools"];

    cy.get('[data-identifier="Headings"] > h4').each(($el, index) => {
      cy.wrap($el).should("have.text", headings[index]).and("be.visible");
    });

    /**
     * 1. On the Html Elements page
     * 2. From the "Checkboxes" section, locate all checkboxes
     * 3. Validate their texts with expected text
     * 4. Validate checkboxes are visible, and enabled
     */

    const exp = ["Apple", "Microsoft", "Tesla"];

    cy.get("#checkbox-button-group div").each(($el, index) => {
      cy.wrap($el).find("label").should("have.text", exp[index]);
      cy.wrap($el).find("input").should("be.visible").and("be.enabled");
    });
  });

  it("Assertion Practices", () => {
    /**
     * 1. Go to https://techglobal-training.com/frontend
     * 2. Navigate to 'Html Elements' card
     *
     * 3. From the "Text Inputs" section
     * 4. Validate text input 1 and text input 2 is enabled
     * 5. Validate text input 1 and text input 2 is not required
     * 6. Enter your name and last name
     */

    // cy.get('#text_input1').should('be.enabled');
    // cy.get('#text_input2').should('be.enabled');

    // cy.get('#text_input1').should('not.have.attr', 'required');
    // cy.get('#text_input2').should('not.have.attr', 'required');

    // cy.get('#text_input1').type('John');
    // cy.get('#text_input2').type('Doe');

    const names = ["Tech", "Global"];

    cy.get('[id^="text_input"]').each(($el, index) => {
      cy.wrap($el)
        .should("be.enabled")
        .type(names[index])
        .and("not.have.attr", "required");
    });

    /**
     * 1. Go to https://techglobal-training.com/frontend
     * 2. Navigate to 'Html Elements' card
     *
     * 3. From the "Date Inputs" section
     * 4. Validate date input 1 and date input 2 is enabled
     * 5. Validate date input 1 and date input 2 is is not required
     * 6. Enter dates for both date input 1 and date input 2
     * 7. Validate value is changed to given dates.
     */

    const dates = ["11/20/2022", "11/20/2021"];

    cy.get('[id^="date_input"]').each(($el, index) => {
      cy.wrap($el)
        .clear()
        .type(`${dates[index]}{enter}`)
        .should("have.value", dates[index])
        .and("be.enabled")
        .and("not.have.attr", "required");
    });

    /**
     * 1. Go to https://techglobal-training.com/frontend
     * 2. Navigate to 'Html Elements' card
     *
     * 3. From the "Dropdowns" section
     * 4. Validate dropdown 1 and dropdown 2 is enabled
     * 6. Enter Microsoft for dropdown 1 and Apple for dropdown 2
     * 7. Validate options are selected
     */

    const dropdowns = ['Microsoft', 'Apple']

    cy.get('[id^="company_dropdown"]').each(($el, index) => {
      // cy.wrap($el).should('be.enabled').select(dropdowns[index])
      // .and('have.value', dropdowns[index])

      expect($el).to.be.enabled

      cy.wrap($el).select(dropdowns[index])
      cy.wrap($el).should('have.value', dropdowns[index])
      // expect($el).have.value(dropdowns[index])
      // cy.wrap($el).find('option:selected').invoke('text').then((text) => {
      //   expect(text).to.equal(dropdowns[index])
      // })
    })

    cy.get('#company_dropdown1, #company_dropdown2  ').each(($el, index) => {
      cy.wrap($el).should('be.enabled').select(dropdowns[index])
      .find('option:selected').and('have.text', dropdowns[index])
    })
  });
});
