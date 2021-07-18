import React, { useState } from 'react'
import { Button, Link } from '@material-ui/core'
import EmailField from './../email-field/EmailField'
import PasswordField from './../password-field/PasswordField'

export default function RegisterForm ({ formToRender }) {
  const [registerData, setRegisterData] = useState({});

  function formSubmit(event) {
    event.preventDefault();
    console.log('registerData', registerData)
  }

  function collectData (data) {
    setRegisterData({ ...registerData, ...data })
  }

  return (
    <form onSubmit={formSubmit}>
      <Link href="#" className="register" onClick={event => {
        event.preventDefault()
        formToRender('LoginForm')
      }}>
        Back to login
      </Link>
      <EmailField collectData={collectData} />
      <PasswordField collectData={collectData} />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Register
      </Button>
    </form>
  )
}