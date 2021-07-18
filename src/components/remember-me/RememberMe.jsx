import React, { useState } from 'react'
import { FormControlLabel, Checkbox } from '@material-ui/core'

export default function RememberMe ({ collectData }) {
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={rememberMe}
          onChange={(event) => {
            const rememberMeValue = event.target.checked
            setRememberMe(rememberMeValue)
            collectData({ rememberMe: rememberMeValue })
          }}
          name="rememberMe"
          color="primary"
        />
      }
      label="Remember me"
    />
  )
}