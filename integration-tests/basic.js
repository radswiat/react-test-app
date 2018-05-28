describe('basic integration tests', function () {
  it('[A but tuba.] should be submitted and show as valid in results', function () {
    // go to ur;
    cy.visit('http://localhost:3000');
    cy.get('[data-e2e="pal-input"]').type('A but tuba.');
    cy.get('[data-e2e="pal-submit"]').click();
    cy.get('[data-e2e="pal-res-A but tuba.-valid"]').should('be.visible');
  });
});
