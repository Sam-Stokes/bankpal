import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import DrawerNavigator from './drawer-navigator'
import Modal from '../screens/modal'

import LoginScreen from '~/screens/login'

export type RootStackParamList = {
  DrawerNavigator: undefined
  Modal: undefined
  TabNavigator: undefined
  Login: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />

        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Modal"
          component={Modal}
          options={{ presentation: 'modal', headerLeft: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
