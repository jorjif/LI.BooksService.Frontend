import { createTheme } from '@material-ui/core'

const theme = createTheme({
  palette: {
    primary: {
      main: '#606c38'
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
        fullWidth: true,
      }
    },
  }
})

export default theme
