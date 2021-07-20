import React, { useState } from 'react'
import './FormWrapper.css'
import LoginWrapper from './../login-wrapper/LoginWrapper'
import RegisterWrapper from './../register-wrapper/RegisterWrapper'
import RecoveryWrapper from './../recovery-wrapper/RecoveryWrapper'
import Notification from './../notification/Notification'

export default function FormWrapper () {
  const [formToRender, setFormToRender] = useState('Login')
  const [notificationInfo, setNotificationInfo] = useState({});

  /**
   * Switchs between forms (Login, Register and Recovery) according to 'formToRender' state
   * @returns { ReactElement }
   */
  function formComponent () {
    switch (formToRender) {
      case 'Register':
        return <RegisterWrapper setFormToRender={setFormToRender} setNotificationInfo={setNotificationInfo} />
      case 'Recovery':
        return <RecoveryWrapper setFormToRender={setFormToRender} setNotificationInfo={setNotificationInfo} />
      default:
        return <LoginWrapper setFormToRender={setFormToRender} setNotificationInfo={setNotificationInfo} />
    }
  }

  return (
    <div className="form-wrapper">
      {formComponent()}
      <Notification notificationInfo={notificationInfo} setNotificationInfo={setNotificationInfo} />
    </div>
  )
}
