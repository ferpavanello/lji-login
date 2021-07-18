import React, { useState } from 'react'
import './FormWrapper.css'
import LoginWrapper from './../login-wrapper/LoginWrapper'
import RegisterWrapper from './../register-wrapper/RegisterWrapper'
import RecoveryWrapper from './../recovery-wrapper/RecoveryWrapper'

export default function FormWrapper () {
  const [formToRender, setFormToRender] = useState('Login')

  function formComponent () {
    switch (formToRender) {
      case 'Register':
        return <RegisterWrapper formToRender={setFormToRender} />
      case 'Recovery':
        return <RecoveryWrapper formToRender={setFormToRender} />
      default:
        return <LoginWrapper formToRender={setFormToRender} />
    }
  }

  return (
    <div className="form-wrapper">
      {formComponent()}
    </div>
  )
}
