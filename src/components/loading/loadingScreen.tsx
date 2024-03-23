// LoadingScreen.tsx
import React from 'react'
import { View, Text } from 'tamagui'

const LoadingScreen = () => (
  <View flex={1} justifyContent="center" alignItems="center">
    <Text>BankPal</Text>
    <Text>Loading...</Text> {/* Consider replacing this with a custom animated component */}
  </View>
)

export default LoadingScreen
