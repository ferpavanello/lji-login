import React, { useState } from 'react'
import { TextField } from '@material-ui/core'

export default function PasswordField ({ collectData }) {
  const [name, setName] = useState('')

  return (
    <TextField
      value={name}
      onChange={(event) => {
        const nameValue = event.target.value
        setName(nameValue)
        collectData({ name: nameValue })
      }}
      id="name"
      name="name"
      label="Name"
      type="name"
      required
      variant="outlined"
      margin="normal"
      fullWidth
    />
  )
}
