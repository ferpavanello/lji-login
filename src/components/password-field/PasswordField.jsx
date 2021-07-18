import React, { useState } from 'react'
import { TextField } from '@material-ui/core'

export default function PasswordField ({ collectData }) {
  const [password, setPassword] = useState('')

  return (
    <TextField
      value={password}
      onChange={(event) => {
        const passwordValue = event.target.value
        setPassword(passwordValue)
        collectData({ password: passwordValue })
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
  )
}
