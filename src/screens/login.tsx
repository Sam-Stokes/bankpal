import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { YStack, Text, Input, Button } from 'tamagui'

const LoginScreen = () => {
  const navigation = useNavigation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // Here you will add your login logic
    navigation.navigate('Home')
  }

  return (
    <YStack flex={1} justifyContent="center" alignItems="center" space="$4">
      <Text size="$4">Login</Text>
      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        width={200}
        height={40}
        borderWidth={1}
        padding={10}
      />
      <Input
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        width={200}
        height={40}
        borderWidth={1}
        padding={10}
      />
      <Button onPress={handleLogin} title="Login" />
    </YStack>
  )
}

export default LoginScreen
