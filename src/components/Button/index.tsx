import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { theme } from '../../theme'

import styles from './style'

interface ButtonProps extends TouchableOpacityProps {
  isLoading: boolean
}

const Button = ({ isLoading, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      {
        isLoading
          ? <ActivityIndicator size="large" color={theme.colors.text_on_brand_color}/>
          : <Text style={styles.title}>Enviar feedback</Text>
      }
    </TouchableOpacity>
  )
}

export default Button
