export const getUserDetails = async () => {
  const userToken = 'user_token_cltns8j3l000208jzeuvmgsd1'
  const appId = 'app_token_cltns8j3l000108jze2lnc7qc'

  const response = await fetch('https://api.akahu.io/v1/me', {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${userToken}`,
      'X-Akahu-ID': appId,
    }),
  })

  const data = await response.json()
  console.log('====================================')
  console.log(data)
  console.log('====================================')

  return data
}
