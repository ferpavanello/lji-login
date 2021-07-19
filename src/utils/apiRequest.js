export default async function apiRequest (query, message, setNotificationInfo) {
  const data = JSON.stringify({
    query: query.body
  })

  const response = await fetch(
    'https://lji-login-api.herokuapp.com',
    {
      method: 'post',
      body: data,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        'User-Agent': 'Node',
      },
    }
  )

  const bodyJson = await response.json()
  const user = bodyJson.data && bodyJson.data[query.name]
  if (user && user.id) {
    setNotificationInfo({
      message: message.success,
      severity: 'success',
      openNotification: true
    })
    console.log(user)
    return user
  }
  setNotificationInfo({
    message: message.error,
    severity: 'error',
    openNotification: true
  })
}
