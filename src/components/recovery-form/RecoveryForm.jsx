import React, { useState } from 'react'
import { Button, Link } from '@material-ui/core'
import NameField from './../name-field/NameField'
import EmailField from './../email-field/EmailField'

export default function PasswordRecoveryForm ({ formToRender }) {
  const [recoveryData, setRecoveryData] = useState({});

  function formSubmit(event) {
    event.preventDefault();
    console.log('recoveryData', recoveryData)
  }

  function collectData (data) {
    setRecoveryData({ ...recoveryData, ...data })
  }

  return (
    <form onSubmit={formSubmit}>
      <Link href="#" onClick={event => {
        event.preventDefault()
        formToRender('Login')
      }}>
        Back to login
      </Link>
      <NameField collectData={collectData} />
      <EmailField collectData={collectData} />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        See password
      </Button>
    </form>
  )
}
