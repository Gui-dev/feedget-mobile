import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  image: {
    marginTop: 42,
    marginBottom: 10,
    height: 36,
    width: 36
  },
  title: {
    fontSize: 20,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
    marginBottom: 10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 56,
    paddingHorizontal: 24,
    height: 40,
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 4
  },
  buttonTitle: {
    fontSize: 14,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary
  }
})

export default styles
