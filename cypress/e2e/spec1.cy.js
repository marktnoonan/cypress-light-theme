describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.log('hi')
  })
  it('fails', () => {
    cy.wrap(false).should('be.true')
  })
})