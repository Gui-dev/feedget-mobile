import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ArrowLeft } from 'phosphor-react-native'

import { FeedbackType } from './../Widget'
import { ScreenshotButton } from './../ScreenshotButton'
import { feedbackTypes } from './../../utils/feedbackTypes'

import styles from './style'
import { theme } from '../../theme'
import Button from '../Button'

interface FormProps {
  feedbackType: FeedbackType
}

export const Form = ({ feedbackType }: FormProps) => {
  const feedbackTypeInfo = feedbackTypes[feedbackType]

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity>
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
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo"
        placeholderTextColor={theme.colors.text_secondary}
        multiline
      />

      <View style={styles.footer}>
        <ScreenshotButton
          screenshot="https://github.com/Gui-dev.png"
          onTakeShot={() => {}}
          onRemoveShot={() => {}}
        />
        <Button isLoading={false}/>
      </View>
    </View>
  )
}
