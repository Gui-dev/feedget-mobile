import React from 'react'
import { Text, View } from 'react-native'

import { Option } from '../Option'
import { Copyright } from '../Copyright'

import { feedbackTypes } from './../../utils/feedbackTypes'

import styles from './style'

export const Options = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu feedback</Text>

      <View style={styles.options}>
        { Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <Option key={key} title={value.title} image={value.image}/>
          )
        }) }

      </View>

      <Copyright />
    </View>
  )
}
