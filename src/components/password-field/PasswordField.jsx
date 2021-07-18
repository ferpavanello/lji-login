import React, { useState } from 'react'
import { TextField } from '@material-ui/core'

export default function PasswordField () {
  const [password, setPassword] = useState('')

  return (
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
  )
}
