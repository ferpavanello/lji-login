import React from 'react'
import './LoginWrapper.css'
import LoginForm from './../login-form/LoginForm'
import SignUp from './../sign-up/SignUp'

export default function Loginrapper ({ formToRender }) {
  return (
    <div>
      <h1 className="login-header">Login to continue</h1>
      <LoginForm />
      <SignUp formToRender={formToRender} />
    </div>
  )
}
