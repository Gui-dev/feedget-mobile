import React from 'react'
import { Text, View } from 'react-native'

import { Option } from '../Option'
import { Copyright } from '../Copyright'

import { FeedbackType } from './../Widget'
import { feedbackTypes } from './../../utils/feedbackTypes'

import styles from './style'

interface OptionsProps {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void
}

export const Options = ({ onFeedbackTypeChanged }: OptionsProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu feedback</Text>

      <View style={styles.options}>
        { Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <Option
              key={key}
              title={value.title}
              image={value.image}
              onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
            />
          )
        }) }

      </View>

      <Copyright />
    </View>
  )
}
