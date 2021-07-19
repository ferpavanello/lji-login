import React, { useState } from 'react'
import './LoginForm.css'
import { Button, Link } from '@material-ui/core'
import EmailField from './../email-field/EmailField'
import PasswordField from './../password-field/PasswordField'
import RemeberMe from './../remember-me/RememberMe'
import apiRequest from './../../utils/apiRequest'

export default function LoginForm({ setFormToRender, setNotificationInfo }) {
  const [loginData, setLoginData] = useState({});

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
      name: 'userLogin',
      body: `
        mutation {
          userLogin(
            email:"${loginData.email}",
            password:"${loginData.password}"
          ) {
            isBlocked
            isLoginCorrect
          }
        }`
    }
    const apiResponse = await apiRequest(query)
    console.log('apiResponse', apiResponse)
    if (apiResponse.isBlocked) {
      sendNotification('User is blocked', 'error')
    } else if (apiResponse.isLoginCorrect) {
      sendNotification('User is logged', 'success')
    } else {
      sendNotification('Invalid password', 'error')
    }
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
