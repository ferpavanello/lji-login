import React from 'react'
import FormTitle from './../form-title/FormTitle'
import RecoveryForm from './../recovery-form/RecoveryForm'

export default function PasswordRecoveryWrapper ({ setFormToRender, setNotificationInfo }) {
  return (
    <div>
      <FormTitle content="Password recovery"/>
      <RecoveryForm setFormToRender={setFormToRender} setNotificationInfo={setNotificationInfo} />
    </div>
  )
}
