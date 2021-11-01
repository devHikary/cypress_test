/// <reference types="cypress" />

describe('login', () => {
  const pathname = 'http://localhost:3000/'
  it('Deve informar os campos e avançar', () =>{
    cy.visit(pathname);
    cy.get('input[name="nome"]').type('Karina')
    cy.get('input[name="saldo"]').type('300')

    cy.get('.MuiButton-label').click()

    cy.location('pathname').should('eq', '/feira')
  });
});
