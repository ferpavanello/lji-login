import React, { useState } from 'react'
import './LoginForm.css'
import { Button, Link } from '@material-ui/core'
import EmailField from './../email-field/EmailField'
import PasswordField from './../password-field/PasswordField'
import RemeberMe from './../remember-me/RememberMe'

export default function LoginForm({ setFormToRender, setNotificationInfo }) {
  const [loginData, setLoginData] = useState({});

  async function formSubmit(event) {
    event.preventDefault();

    const data = JSON.stringify({
      query: `{
        userByFields(filter: {
          email:"${loginData.email}",
          password:"${loginData.password}"
        }) {
          id
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
    if (user && user.id) {
      setNotificationInfo({
        message: 'User is logged',
        severity: 'success',
        openNotification: true
      })
      console.log(user)
      return
    }
    setNotificationInfo({
      message: 'Invalid password',
      severity: 'error',
      openNotification: true
    })
  }

  function collectData (data) {
    setLoginData({ ...loginData, ...data })
  }

  return (
    <form onSubmit={formSubmit}>
      <EmailField collectData={collectData} />
      <PasswordField collectData={collectData} />
      <RemeberMe collectData={collectData} />
      <Link href="#" className="forgot-password" onClick={event => {
        event.preventDefault()
        setFormToRender('Recovery')
      }}>
        Forgot Password?
      </Link>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </form>
  )
}
