// https://on.cypress.io/api

describe('My First Test', () => {
  it('create and delete a note', () => {
    cy.visit('/')
    cy.contains('nav', 'Notes')
    cy.contains('nav', 'New Note')
    cy.visit('/new-note')
    cy.contains('label', 'New Note')
    cy.get('textarea').type('Hello, World')
    cy.get('button').click()
    cy.get('button').click()
  })
})
