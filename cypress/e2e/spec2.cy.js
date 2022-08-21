describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io")
    cy.log("hi")
  })
  it("fails", () => {
    cy.wrap(false).should("be.true")
  })

  var i = 0
  it(
    "is flaky",
    {
      retries: {
        openMode: 2,
      },
    },
    () => {
      cy.wrap(i === 1).should("be.true")
      i++
    }
  )
})
