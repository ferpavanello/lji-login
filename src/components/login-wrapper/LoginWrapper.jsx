import React from 'react'
import FormTitle from './../form-title/FormTitle'
import LoginForm from './../login-form/LoginForm'
import SignUp from './../sign-up/SignUp'

export default function Loginrapper ({ setFormToRender, setNotificationInfo }) {
  return (
    <div>
      <FormTitle content="Login to continue" />
      <LoginForm setFormToRender={setFormToRender} setNotificationInfo={setNotificationInfo} />
      <SignUp setFormToRender={setFormToRender} />
    </div>
  )
}
