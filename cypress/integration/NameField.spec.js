import React from 'react'
import { mount } from '@cypress/react'
import NameField from './../../src/components/name-field/NameField'

describe('NameField', () => {
  it('Shows information', () => {
    mount(<NameField collectData={() => {}} />)
    
    const testContent = 'Usuário de teste'
    cy.get('#name')
      .type(testContent)
      .should('have.value', testContent)
  })

  it('Executes collecData each time when conent is changed', () => {
    let count = 0
    mount(<NameField collectData={() => count++} />)

    const testContent = 'Testando'
    cy.get('#name')
      .type(testContent)
      .then(() => {
        expect(count).to.be.eq(testContent.length)
      })
  })
})
