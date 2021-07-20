import React from 'react'
import { mount } from '@cypress/react'
import SignUp from './../../src/components/sign-up/SignUp'

describe('SignUp', () => {
  it('Executes setFormToRender when registrer link is clicked', () => {
    let isSetFormExecuted = false
    mount(<SignUp setFormToRender={() => {isSetFormExecuted = true}} />)
    cy.get('.signup-wrapper .register').trigger('click')
      .then(() => {
        expect(isSetFormExecuted).to.be.true
      })
  })
})
