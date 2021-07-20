import React from 'react'
import { mount } from '@cypress/react'
import App from './../../src/App'

describe('SignUp', () => {
  it('Shows login image', () => {
    mount(<App />)
    cy.get('.app-wrapper .login-image').should('be.visible')
  })

  it('Shows the form wrapper', () => {
    mount(<App />)
    cy.get('.app-wrapper .form-wrapper').should('be.visible')
  })
})
