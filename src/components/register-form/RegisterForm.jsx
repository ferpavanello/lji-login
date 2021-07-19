import React, { useState } from 'react'
import { Button, Link } from '@material-ui/core'
import NameField from './../name-field/NameField'
import EmailField from './../email-field/EmailField'
import PasswordField from './../password-field/PasswordField'

export default function RegisterForm ({ setFormToRender, setNotificationInfo }) {
  const [registerData, setRegisterData] = useState({});

  async function formSubmit(event) {
    event.preventDefault();

    const data = JSON.stringify({
      query: `
        mutation {
          createUser(newUser: {
            name: "${registerData.name}",
            email: "${registerData.email}",
            password: "${registerData.password}"
          }) {
            name
            email
            password
            attempts
          }
        }`
    })
  
    const response = await fetch(
      'https://lji-login-api.herokuapp.com',
      {
        method: 'post',
        body: data,
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': data.length,
          'User-Agent': 'Node',
        },
      }
    )
  
    const bodyJson = await response.json()
    const user = bodyJson.data && bodyJson.data.createUser
    if (user) {
      console.log('success', user);
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
