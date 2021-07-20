/**
 * @typedef User
 * @property { string } [id]
 * @property { string } [name]
 * @property { string } [email]
 * @property { string } [password]
 * @property { number } [attempts]
 */

/**
 * @typedef UserStatus
 * @property { boolean } [isBlocked]
 * @property { boolean } [isLoginCorrect]
 */

/**
 * Makes a request to the GraphQL API
 * @param { QueryInfo } query 
 * @returns { User | UserStatus | null }
 */
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
