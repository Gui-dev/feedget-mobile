import 'react-native-gesture-handler'
import React from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Inter_400Regular, Inter_500Medium, useFonts } from '@expo-google-fonts/inter'

import Widget from './src/components/Widget'
import { Load } from './src/components/Load'
import { theme } from './src/theme'

export default function App () {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  })

  if (!fontsLoaded) {
    return <Load />
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background
      }}
    >
      <StatusBar style="light" backgroundColor="transparent" translucent />
      {/* @ts-ignore */}
      <Widget />
    </View>
  )
}
