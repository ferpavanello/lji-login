import React, { useState } from 'react'
import { Button, Link, TextField } from '@material-ui/core'
import NameField from './../name-field/NameField'
import EmailField from './../email-field/EmailField'
import apiRequest from './../../utils/apiRequest'

/**
 * @typedef RecoveryData
 * @property { string } [name]
 * @property { string } [email]
 */

export default function RecoveryForm ({ setFormToRender, setNotificationInfo }) {
  const [recoveryData, setRecoveryData] = useState({})
  const [userPassword, setUserPassword] = useState('')
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
   * Sends a query to the GraphQL API and notificate the user according to this
   * @returns { void }
   */
  async function formSubmit () {
    if (!isValidForm()) {
      sendNotification('Verify the form fields', 'error')
      return
    }

    const query = {
      name: 'userByFields',
      body: `{
        userByFields(filter: {
          name:"${recoveryData.name}",
          email:"${recoveryData.email}"
        }) {
          password
        }
      }`
    }
    const user = await apiRequest(query) || {}
    setUserPassword(user.password || '')
    if (user.password) {
      sendNotification('User was found', 'success')
    } else {
      sendNotification('User not found', 'error')
    }
  }

  /**
   * Concats the stored recovery data with the new
   * @param { RecoveryData } data
   */
  function collectData (data) {
    setRecoveryData({ ...recoveryData, ...data })
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
