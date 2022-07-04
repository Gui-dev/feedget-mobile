import React from 'react'
import { Image, ImageProps, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import styles from './style'

interface OptionProps extends TouchableOpacityProps {
  title: string
  image: ImageProps
}

export const Option = ({ title, image, ...rest }: OptionProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      {/* @ts-ignore  */}
      <Image source={image} style={styles.image}/>
      <Text
        style={styles.title}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}
