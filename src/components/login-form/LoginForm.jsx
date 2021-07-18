import React, { useState } from 'react'
import './LoginForm.css'
import { Button, FormControlLabel, Checkbox, Link } from '@material-ui/core'
import EmailField from './../email-field/EmailField'
import PasswordField from './../password-field/PasswordField'

export default function LoginForm() {
  const [rememberMe, setRememberMe] = useState(false)

  function formSubmit(data) {
    console.log('data', data)
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        formSubmit(event)
      }}
    >
      <EmailField />
      <PasswordField />
      <FormControlLabel
        control={
          <Checkbox
            checked={rememberMe}
            onChange={(event) => {
              setRememberMe(event.target.checked)
            }}
            name="rememberMe"
            color="primary"
          />
        }
        label="Remember me"
      />
      <Link href="#" className="forgot-password" onClick={event => event.preventDefault()}>
        Forgot Password?
      </Link>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </form>
  )
}
