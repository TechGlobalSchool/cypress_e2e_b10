import { putRequestBody } from '../../fixtures/testData.json'

describe('CRUD Operations', () => {

  let studentId

  it('Create a new student using POST', () => {

    // cy.request('POST', Cypress.env('API_ENDPOINT'), requestBody)

    const postRequestBody =  {
      DOB: '2000-01-01',
      EMAIL: 'testTechGlobal@gmail.com',
      FIRST_NAME: 'Test',
      LAST_NAME: 'User',
      INSTRUCTOR_ID: 2,
    }

    cy.request({
      method: 'POST',
      url: Cypress.env('API_ENDPOINT'),
      body:postRequestBody,
      // headers: {
      //   'content-type': 'application/json',
      //   'authorization': 'Bearer ' + Cypress.env('API_TOKEN')
      // }
    }).then((response) => {

      console.log(JSON.stringify(response.body, null, 2))


      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('STUDENT_ID')
      expect(response.body).to.have.property('FIRST_NAME', postRequestBody.FIRST_NAME)
      expect(response.body).to.have.property('LAST_NAME', postRequestBody.LAST_NAME)

      expect(response.duration).to.be.lessThan(1500)

      studentId = response.body.STUDENT_ID

      // [FIRST_NAME, 'Youseff'],
      // [LAST_NAME, 'Alselwadi']
      // console.log(JSON.stringify(Object.entries(postRequestBody), null, 2))

      // Object.entries(postRequestBody).forEach(([key, value]) => {
      //   expect(response.body[key]).to.eq(value)

      //   cy.log(response.body[key] + ' value of ' + key)
      //   cy.log(value + ' coming from the request')
      // })

      cy.validateResponse(response, postRequestBody)
    })
  })

  /**
   * Get the user you created
   * And validate your status is 200
   */

  it('Read the created student using GET', () => {

    cy.request({
      method: 'GET',
      url: `${Cypress.env('API_ENDPOINT')}/${studentId}`,
    }).then((response) => {
      console.log(JSON.stringify(response.body, null, 2))
      expect(response.status).to.eq(200)
    })
  })

  /**
   * Create a PUT request
   * Update the student that we created
   * and validate the status code is 200
   * and validate your updated request is matching with the response of your PUT request
   */

  it('Update the cretated student using PUT', () => {

    cy.request({
      method: 'PUT',
      url: `${Cypress.env('API_ENDPOINT')}/${studentId}`,
      body: putRequestBody,
    }).then((response) => {
      expect(response.status).to.eq(200)
      console.log(JSON.stringify(response.body, null, 2))
      expect(response.body.message).to.eq(
        `Successfully updated the student with the STUDENT_ID: ${studentId}`
      )})
  })

  /**
   * Send a request and GET the updated user
   * Validate its 200
   * Validate response time is under 400ms
   * and validate student firstname on the response is matching with your updated name
   */

  it('Read the updated student using GET', () => {

    cy.request({
      method: 'GET',
      url: `${Cypress.env('API_ENDPOINT')}/${studentId}`,
    }).then((response) => {
      console.log(JSON.stringify(response.body, null, 2))
      expect(response.status).to.eq(200)
      expect(response.duration).to.be.lessThan(1200)

      expect(response.body.FIRST_NAME).to.eq(putRequestBody.FIRST_NAME)
    })
  })

  /**
   * Send a request and DELETE the student
   * Validate the status code is 204
   */

  it('Delete the student using DELETE', () => {
    cy.request({
      method: 'DELETE',
      url: `${Cypress.env('API_ENDPOINT')}/${studentId}`
    }).then((response) => {
      expect(response.status).to.eq(204)
    })
  })
})