import React from 'react'
import { mount } from '@cypress/react'
import PasswordField from './../../src/components/password-field/PasswordField'

describe('PasswordField', () => {
  it('Shows information', () => {
    mount(<PasswordField collectData={() => {}} />)

    const testContent = 'user password'
    cy.get('#password')
      .type(testContent)
      .should('have.value', testContent)
  })

  it('Executes collecData each time when conent is changed', () => {
    let count = 0
    mount(<PasswordField collectData={() => count++} />)

    const testContent = 'good password'
    cy.get('#password')
      .type(testContent)
      .then(() => {
        expect(count).to.be.eq(testContent.length)
      })
  })

  it('It does not show the typed caracters, it should has filed type as password', () => {
    mount(<PasswordField collectData={() => {}} />)
    cy.get('#password').should('have.attr', 'type', 'password')
  })
})
