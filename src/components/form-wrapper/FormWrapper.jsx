import React, { useState } from 'react'
import './FormWrapper.css'
import LoginWrapper from './../login-wrapper/LoginWrapper'
import RegisterWrapper from './../register-wrapper/RegisterWrapper'

export default function FormWrapper () {
  const [formToRender, setFormToRender] = useState('Login')

  function formComponent () {
    switch (formToRender) {
      case 'Register':
        return <RegisterWrapper formToRender={setFormToRender} />
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
