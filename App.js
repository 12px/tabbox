import * as React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from './navigation/Home'
import Pins from './navigation/Pins'
import List from './navigation/List'
import Slip from './navigation/Slip'
import Tabs from './navigation/Tabs'
import Card from './navigation/Card'

import styles from './constants/styles'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={ Home } />
        <Drawer.Screen name="Pins" component={ Pins } />
        <Drawer.Screen name="List" component={ List } />
        <Drawer.Screen name="Slip" component={ Slip } />
        <Drawer.Screen name="Tabs" component={ Tabs } />
        <Drawer.Screen name="Card" component={ Card } />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
