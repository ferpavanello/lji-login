import React, { useState } from 'react'
import './LoginForm.css'
import { Button, Link } from '@material-ui/core'
import EmailField from './../email-field/EmailField'
import PasswordField from './../password-field/PasswordField'
import RemeberMe from './../remember-me/RememberMe'
import apiRequest from './../../utils/apiRequest'

/**
 * @typedef LoginData
 * @property { string } [email]
 * @property { string } [password]
 * @property { boolean } [rememberMe]
 */

export default function LoginForm({ setFormToRender, setNotificationInfo }) {
  const [loginData, setLoginData] = useState({})

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
   * Sends a mutation to the GraphQL API and notificate the user according to this
   * @param { Event } event form event
   */
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
    if (apiResponse.isBlocked) {
      sendNotification('User is blocked', 'error')
    } else if (apiResponse.isLoginCorrect) {
      sendNotification('User is logged', 'success')
    } else {
      sendNotification('Invalid password', 'error')
    }
  }

  /**
   * Concats the stored login data with the new
   * @param { LoginData } data
   */
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
