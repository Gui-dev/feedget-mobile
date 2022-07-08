import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ArrowLeft } from 'phosphor-react-native'
import { captureScreen } from 'react-native-view-shot'

import { FeedbackType } from './../Widget'
import { ScreenshotButton } from './../ScreenshotButton'
import { feedbackTypes } from './../../utils/feedbackTypes'

import styles from './style'
import { theme } from '../../theme'
import Button from '../Button'

interface FormProps {
  feedbackType: FeedbackType
  onFeedbackCanceled: () => void
  onFeedbackSent: () => void
}

export const Form = ({ feedbackType, onFeedbackCanceled, onFeedbackSent }: FormProps) => {
  const feedbackTypeInfo = feedbackTypes[feedbackType]
  const [screenshot, setScreenshot] = useState<string | null>(null)

  const handleScreenshot = () => {
    captureScreen({
      format: 'jpg',
      quality: 0.8
    })
      .then(uri => setScreenshot(uri))
      .catch(error => console.log(error))
  }

  const handleRemoveScreenshot = () => {
    setScreenshot(null)
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity
          onPress={onFeedbackCanceled}
        >
          <ArrowLeft size={24} color={theme.colors.text_secondary} weight="bold"/>
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image
            source={feedbackTypeInfo.image}
            style={styles.image}
          />
          <Text style={styles.title}>{feedbackTypeInfo.title}</Text>
        </View>
      </View>

      <TextInput
        style={styles.input}
        autoCorrect={false}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo"
        placeholderTextColor={theme.colors.text_secondary}
        multiline
      />

      <View style={styles.footer}>
        <ScreenshotButton
          screenshot={screenshot}
          onTakeShot={handleScreenshot}
          onRemoveShot={handleRemoveScreenshot}
        />
        <Button isLoading={false}/>
      </View>
    </View>
  )
}
