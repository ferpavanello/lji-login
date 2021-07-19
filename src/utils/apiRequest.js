export default async function apiRequest (query) {
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
  return bodyJson.data && bodyJson.data[query.name]
}
