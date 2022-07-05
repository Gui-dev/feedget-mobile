import React from 'react'
import { View, ActivityIndicator } from 'react-native'

import { theme } from './../../theme'
import styles from './style'

export const Load: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.brand} />
    </View>
  )
}
