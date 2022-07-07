import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 24
  },
  header: {
    flexDirection: 'row',
    marginVertical: 16
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 24
  },
  image: {
    marginRight: 8,
    height: 24,
    width: 24
  },
  title: {
    fontSize: 20,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary
  },
  input: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.text_primary,
    padding: 12,
    marginBottom: 8,
    height: 112,
    borderWidth: 1,
    borderColor: theme.colors.stroke,
    borderRadius: 4
  },
  footer: {
    flexDirection: 'row',
    marginTop: 8
  }
})

export default styles
