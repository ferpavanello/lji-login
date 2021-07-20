import React from 'react'
import { mount } from '@cypress/react'
import NameField from './../src/components/name-field/NameField'

describe('NameField', () => {
  it('Shows information', () => {
    mount(<NameField collectData={() => {}} />)
    // now use standard Cypress commands
    const testContent = 'Usuário de teste'
    cy.get('#name')
      .type(testContent)
      .should('have.value', testContent)
  })
})
