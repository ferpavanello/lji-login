import React, { useState } from 'react'
import { TextField } from '@material-ui/core'

export default function EmailField ({ collectData }) {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState({ message: '', isValid: true })

  /**
   * Checks if email is valid
   * @param { string } content 
   * @returns { boolean }
   */
  function isValidEmail (content) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(content)
  }

  /**
   * Makes content validation and sets the possible errors
   * @param { Event } event
   * @returns { void }
   */
  function emailValidation (event){
    const emailContent = event.target.value;
    if (!isValidEmail(emailContent)) {
      setEmailError({
        isValid: false,
        message: 'This is not a valid email.'
      })
      return
    }
    setEmailError({ isValid: true, message: '' })
    setEmail(emailContent)
    collectData({ email: emailContent })
  }

  return (
    <TextField
      value={email}
      onChange={(event) => {
        setEmail(event.target.value)
      }}
      onBlur={emailValidation}
      error={!emailError.isValid}
      helperText={emailError.message}
      id="email"
      name="email"
      label="Email"
      type="email"
      required
      variant="outlined"
      margin="normal"
      fullWidth
    />
  )
}
