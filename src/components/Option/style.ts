import { StyleSheet } from 'react-native'
// import { getBottomSpace } from 'react-native-iphone-x-helper'
import { theme } from '../../theme'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    marginHorizontal: 8,
    height: 112,
    width: 104,
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 8
  },
  image: {
    height: 40,
    width: 40
  },
  title: {
    fontSize: 14,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
    marginTop: 8
  }
})

export default styles
