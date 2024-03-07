describe("template spec", () => {
  it('passes', () => {
    cy.visit("http://localhost:5174/")

    cy.get('h1').should("exist")
    // ('contain', 'Watch Rick and Morty Here!')
    // cy.get('#home-page > h2').should("exist").should("have.text", "Watch Rick and Morty")
  })
})
