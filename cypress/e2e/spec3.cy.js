describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.log('hi')
  })
  context('passes but longer and nested', () => {
    it('is innner thing', () => {
      context('when it is more nested', () => {
        cy.wrap(true).should('be.true')
      })
    })
  })
})