import React, { useState } from 'react'
import { Button, Input, View } from 'tamagui'

const LoginScreen = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // Implement login logic
  }

  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoComplete="username"
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoComplete="password"
      />
      <Button onPress={handleLogin}>Login</Button>
    </View>
  )
}

export default LoginScreen
