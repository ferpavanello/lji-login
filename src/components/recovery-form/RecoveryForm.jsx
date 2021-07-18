import React, { useState } from 'react'
import { Button, Link, TextField } from '@material-ui/core'
import NameField from './../name-field/NameField'
import EmailField from './../email-field/EmailField'

export default function PasswordRecoveryForm ({ formToRender }) {
  const [recoveryData, setRecoveryData] = useState({})
  const [userPassword, setUserPassword] = useState('')

  async function formSubmit(event) {
    event.preventDefault();

    const data = JSON.stringify({
      query: `{
        userByNameEmail(name:"${recoveryData.name}", email:"${recoveryData.email}") {
          name
          email
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
    const user = bodyJson.data && bodyJson.data.userByNameEmail
    if (user) {
      setUserPassword(user.password)
      console.log(user);
    }
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
      <TextField
        value={userPassword}
        id="userPassword"
        name="userPassword"
        label="Password"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        disabled
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        See password
      </Button>
    </form>
  )
}
