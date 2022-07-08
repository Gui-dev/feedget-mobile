import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ArrowLeft } from 'phosphor-react-native'
import { captureScreen } from 'react-native-view-shot'
import * as FileSystem from 'expo-file-system'

import { FeedbackType } from './../Widget'
import { ScreenshotButton } from './../ScreenshotButton'
import { feedbackTypes } from './../../utils/feedbackTypes'

import styles from './style'
import { theme } from '../../theme'
import Button from '../Button'
import { api } from '../../services/api'

interface FormProps {
  feedbackType: FeedbackType
  onFeedbackCanceled: () => void
  onFeedbackSent: () => void
}

export const Form = ({ feedbackType, onFeedbackCanceled, onFeedbackSent }: FormProps) => {
  const feedbackTypeInfo = feedbackTypes[feedbackType]
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)

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

  const handleSendFeedback = async () => {
    if (isSendingFeedback) return

    try {
      setIsSendingFeedback(true)
      const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, {
        encoding: 'base64'
      })

      await api.post('/feedbacks', {
        type: feedbackType,
        comment,
        screenshot: `data:image/png;base64,${screenshotBase64}`
      })
      setComment('')
      onFeedbackSent()
    } catch (error) {
      console.log(error)
    } finally {
      setIsSendingFeedback(false)
    }
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
        value={comment}
        onChangeText={setComment}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          screenshot={screenshot}
          onTakeShot={handleScreenshot}
          onRemoveShot={handleRemoveScreenshot}
        />
        <Button
          isLoading={isSendingFeedback}
          onPress={handleSendFeedback}
        />
      </View>
    </View>
  )
}
