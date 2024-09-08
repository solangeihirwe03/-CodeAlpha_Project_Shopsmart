import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'

const RootLayout = () => {
 
  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
      <Stack.Screen name='(auth)' options={{headerShown: false}}/>
      <Stack.Screen 
      name='modals/featuredProducts' 
      options={{
        presentation: 'modal',
        headerShown: false
        }}/>
    </Stack>

  )
}

export default RootLayout