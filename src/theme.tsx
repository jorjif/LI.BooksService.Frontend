import { createTheme } from '@material-ui/core'

const theme = createTheme({
  palette: {
    primary: {
      main: '#606c38'
    },
    background: {
      paper: '#fefae0',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      }
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
        variant: 'standard',
        fullWidth: true,
      }
    },
  }
})

export default theme
