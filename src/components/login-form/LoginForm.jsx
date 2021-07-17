import React, { useState } from 'react'
import './LoginForm.css'
import { TextField, Button, FormControlLabel, Checkbox, Link } from '@material-ui/core'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState({ message: '', isValid: true })
  const [rememberMe, setRememberMe] = useState(false)

  function isValidEmail (content) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email)
  }

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
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        console.log(this.state)
      }}
    >
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
      <TextField
        value={password}
        onChange={(event) => {
          setPassword(event.target.value)
        }}
        id="password"
        name="password"
        label="Password"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
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