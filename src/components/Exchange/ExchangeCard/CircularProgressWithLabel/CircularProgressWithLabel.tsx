import { Box, CircularProgress, CircularProgressProps, Typography } from '@material-ui/core'

const CircularProgressWithLabel = (props: CircularProgressProps & { value: number }) => (
  <Box sx={{ position: 'relative', display: 'inline-flex' }}>
    <CircularProgress
      variant="determinate"
      size={60}
      thickness={2}
      {...props}
    />
    <Box
      sx={{
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="h6"
        component="div"
        color="primary"
      >{`${Math.round(props.value)}%`}</Typography>
    </Box>
  </Box>
)

export default CircularProgressWithLabel
