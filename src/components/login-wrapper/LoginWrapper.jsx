import React from 'react'
import FormTitle from './../form-title/FormTitle'
import LoginForm from './../login-form/LoginForm'
import SignUp from './../sign-up/SignUp'

export default function Loginrapper ({ formToRender }) {
  return (
    <div>
      <FormTitle content="Login to continue" />
      <LoginForm formToRender={formToRender} />
      <SignUp formToRender={formToRender} />
    </div>
  )
}
