import React from 'react'
import { mount } from '@cypress/react'
import Notification from './../../src/components/notification/Notification'

describe('SignUp', () => {
  it('Shows alert when openNotification is true', () => {
    const notificationInfo = {
      message: 'Its here',
      severity: 'success',
      openNotification: true
    }
    mount(<Notification notificationInfo={notificationInfo} />)
    cy.get('.notification').should('be.visible')
  })
})
