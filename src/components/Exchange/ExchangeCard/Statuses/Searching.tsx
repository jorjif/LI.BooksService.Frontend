import { Box, Typography, CircularProgress } from '@material-ui/core'

const Searching = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%',
      justifyContent: 'space-evenly'
    }}
  >
    <Typography variant="h4" color="primary">
       Ищем подходящие варианты...
    </Typography>

    <CircularProgress size={120}/>
  </Box>
)

export default Searching
