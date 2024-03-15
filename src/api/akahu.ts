export const getUserDetails = async () => {
  const response = await fetch('https://api.akahu.io/v1/me', {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${userToken}`,
      'X-Akahu-ID': appId,
    }),
  })

  const data = await response.json()

  return data
}
