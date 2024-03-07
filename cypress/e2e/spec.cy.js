describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it
    cy.get('.action-email').type('fake@email.com')

    //  Verify that the value has been updated
    cy.get('.action-email').should('have.value', 'fake@email.com')
  })
})

// Write a real test
// A solid test generally covers 3 phases:

// Set up the application state.
// Take an action.
// Make an assertion about the resulting application state.
// You might also see this phrased as "Given, When, Then", or "Arrange, Act, Assert". But the idea is: First you put the application into a specific state, then you take some action in the application that causes it to change, and finally you check the resulting application state.

// Today, we'll take a narrow view of these steps and map them cleanly to Cypress commands:

// Visit a web page.
// Query for an element.
// Interact with that element.
// Assert about the content on the page.