describe("HomePage.jsx", () => {
  it("will confirm Home page Content", () => {
      cy.visit('/')

      cy.get('HomePage').should("exist")
      cy.get('#home=page > h1').should("exist").should("have.text", "Watch Rick and Morty")
  })
})