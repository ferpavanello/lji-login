import React, { useState } from 'react'
import { Button, Link, TextField } from '@material-ui/core'
import NameField from './../name-field/NameField'
import EmailField from './../email-field/EmailField'

export default function RecoveryForm ({ setFormToRender, setNotificationInfo }) {
  const [recoveryData, setRecoveryData] = useState({})
  const [userPassword, setUserPassword] = useState('')

  async function formSubmit(event) {
    event.preventDefault();

    const data = JSON.stringify({
      query: `{
        userByFields(filter: {
          name:"${recoveryData.name}",
          email:"${recoveryData.email}"
        }) {
          password
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
    const user = bodyJson.data && bodyJson.data.userByFields
    if (user && user.password) {
      setUserPassword(user.password)
      console.log(user)
    }
  }

  function collectData (data) {
    setRecoveryData({ ...recoveryData, ...data })
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
