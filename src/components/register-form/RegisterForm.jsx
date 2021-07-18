import React from 'react'
import { Button } from '@material-ui/core'
import EmailField from './../email-field/EmailField'
import PasswordField from './../password-field/PasswordField'

export default function RegisterForm ({ collectData }) {
  return (
    <form
      onSubmit={() => {}}
    >
      <EmailField collectData={collectData} />
      <PasswordField collectData={collectData} />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Register
      </Button>
    </form>
  )
}