import React, { useState } from 'react'
import { Button, Link } from '@material-ui/core'
import NameField from './../name-field/NameField'
import EmailField from './../email-field/EmailField'
import PasswordField from './../password-field/PasswordField'
import apiRequest from './../../utils/apiRequest'

export default function RegisterForm ({ setFormToRender, setNotificationInfo }) {
  const [registerData, setRegisterData] = useState({});

  function sendNotification (message, severity) {
    setNotificationInfo({
      message,
      severity,
      openNotification: true
    })
  }

  async function formSubmit (event) {
    event.preventDefault();

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

  function collectData (data) {
    setRegisterData({ ...registerData, ...data })
  }

  return (
    <form onSubmit={formSubmit}>
      <Link href="#" onClick={event => {
        event.preventDefault()
        setFormToRender('Login')
      }}>
        Back to login
      </Link>
      <NameField collectData={collectData} />
      <EmailField collectData={collectData} />
      <PasswordField collectData={collectData} />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Register
      </Button>
    </form>
  )
}
