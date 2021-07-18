import React, { useState } from 'react'
import './FormWrapper.css'
import LoginWrapper from './../login-wrapper/LoginWrapper'
import RegisterForm from './../register-form/RegisterForm'

export default function FormWrapper () {
  const [formToRender, setFormToRender] = useState('LoginWrapper')

  function formComponent () {
    switch (formToRender) {
      case 'RegisterForm':
        return <RegisterForm formToRender={setFormToRender} />
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
