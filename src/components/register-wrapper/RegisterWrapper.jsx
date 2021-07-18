import React from 'react'
import FormTitle from './../form-title/FormTitle'
import RegisterForm from './../register-form/RegisterForm'

export default function RegisterWrapper ({ formToRender }) {
  return (
    <div>
      <FormTitle content="Register"/>
      <RegisterForm formToRender={formToRender} />
    </div>
  )
}
