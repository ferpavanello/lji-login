import React from 'react'
import FormTitle from './../form-title/FormTitle'
import RecoveryForm from './../recovery-form/RecoveryForm'

export default function PasswordRecoveryWrapper ({ formToRender }) {
  return (
    <div>
      <FormTitle content="Password recovery"/>
      <RecoveryForm formToRender={formToRender} />
    </div>
  )
}
