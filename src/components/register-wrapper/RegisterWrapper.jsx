import React from 'react'
import FormTitle from './../form-title/FormTitle'
import RegisterForm from './../register-form/RegisterForm'

export default function RegisterWrapper ({ setFormToRender, setNotificationInfo }) {
  return (
    <div>
      <FormTitle content="Register"/>
      <RegisterForm setFormToRender={setFormToRender} setNotificationInfo={setNotificationInfo} />
    </div>
  )
}
