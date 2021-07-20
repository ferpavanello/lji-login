import React from 'react'
import { mount } from '@cypress/react'
import EmailField from './../../src/components/email-field/EmailField'

describe('EmailField', () => {
  it('Shows information', () => {
    mount(<EmailField collectData={() => {}} />)

    const testContent = 'teste@teste.com'
    cy.get('#email')
      .type(testContent)
      .should('have.value', testContent)
  })

  it('Has email field type', () => {
    mount(<EmailField collectData={() => {}} />)
    cy.get('#email').should('have.attr', 'type', 'email')
  })

  it('Shows error when it is typed an invalid email', () => {
    mount(<EmailField collectData={() => {}} setFormValidation={() => {}} />)
    cy.get('#email').type('invalid-email.com').blur()
    cy.get('#email-helper-text').should('have.text', 'This is not a valid email.')
  })
})
