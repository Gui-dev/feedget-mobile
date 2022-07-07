import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import successImage from './../../assets/success.png'
import styles from './style'

export const Success = () => {
  return (
    <View style={styles.container}>
      <Image source={successImage} style={styles.image}/>
      <Text style={styles.title}>
        Agradecemos o feedback
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>
    </View>
  )
}
