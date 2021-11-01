/// <reference types="cypress" />

describe('login', () => {
  it('Deve informar o nome', () =>{
    cy.visit('http://localhost:3000/');
    cy.get('input[name="nome"]').type('Karina')
  });
});