import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    height: 40,
    width: 40,
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 4
  },
  image: {
    height: 40,
    width: 40
  },
  removeIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0
  }
})

export default styles
