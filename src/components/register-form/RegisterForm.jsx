import React, { useState } from 'react'
import { Button, Link } from '@material-ui/core'
import NameField from './../name-field/NameField'
import EmailField from './../email-field/EmailField'
import PasswordField from './../password-field/PasswordField'
import apiRequest from './../../utils/apiRequest'

/**
 * @typedef RegisterData
 * @property { string } [name]
 * @property { string } [email]
 * @property { string } [password]
 */

export default function RegisterForm ({ setFormToRender, setNotificationInfo }) {
  const [registerData, setRegisterData] = useState({})
  const [formValidation, setFormValidation] = useState({})

  /**
   * Triggers the event to change the notification content
   * @param { string } message
   * @param { string } severity
   */
  function sendNotification (message, severity) {
    setNotificationInfo({
      message,
      severity,
      openNotification: true
    })
  }

  /**
   * Check if form has some error
   * @returns { boolean }
   */
  function isValidForm () {
    return Object.keys(formValidation).every(key => formValidation[key])
  }

  /**
   * Sends a mutation to the GraphQL API and notificate the user according to this
   * @returns { void }
   */
  async function formSubmit () {
    if (!isValidForm()) {
      sendNotification('Verify the form fields', 'error')
      return
    }

    const query = {
      name: 'createUser',
      body: `
        mutation {
          createUser(newUser: {
            name: "${registerData.name}",
            email: "${registerData.email}",
            password: "${registerData.password}"
          }) {
            id
          }
        }`
    }
    const user = await apiRequest(query) || {}
    if (user.id) {
      sendNotification('User has been registered', 'success')
    } else {
      sendNotification('Error to register the user', 'error')
    }
  }

  /**
   * Concats the stored recovery data with the new
   * @param { RegisterData } data
   */
  function collectData (data) {
    setRegisterData({ ...registerData, ...data })
  }

  return (
    <form onSubmit={event => {
      event.preventDefault()
      formSubmit()
    }}>
      <Link href="#" onClick={event => {
        event.preventDefault()
        setFormToRender('Login')
      }}>
        Back to login
      </Link>
      <NameField collectData={collectData} />
      <EmailField collectData={collectData} setFormValidation={setFormValidation} />
      <PasswordField collectData={collectData} />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Register
      </Button>
    </form>
  )
}
