import { StyleSheet } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { theme } from '../../theme'

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 16,
    bottom: getBottomSpace() + 16,
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    width: 48,
    backgroundColor: theme.colors.brand,
    borderRadius: 24
  },
  modal: {
    paddingBottom: getBottomSpace() + 16,
    backgroundColor: theme.colors.surface_primary
  },
  indicator: {
    width: 56,
    backgroundColor: theme.colors.text_primary
  }
})

export default styles
