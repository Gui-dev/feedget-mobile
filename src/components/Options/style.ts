import { StyleSheet } from 'react-native'
// import { getBottomSpace } from 'react-native-iphone-x-helper'
import { theme } from '../../theme'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
    marginBottom: 32
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 48,
    width: '100%'
  }
})

export default styles
