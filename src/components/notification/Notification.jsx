import React from 'react'
import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

export default function Notification ({ notificationInfo, setNotificationInfo }) {
  const { message, severity, openNotification=false } = notificationInfo

  /**
   * Handles with the closing of the notification
   */
  function handleClose () {
    setNotificationInfo({ openNotification: false })
  }
  
  return (
    <Snackbar className="notification" open={openNotification} autoHideDuration={4000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  )
}
