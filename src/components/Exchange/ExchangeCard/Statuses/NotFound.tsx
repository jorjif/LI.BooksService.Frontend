import { Box, Typography } from '@material-ui/core'

import { ReactComponent as BookGirlImg } from '../../assets/BookGirl.svg'

const NotFound = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'space-evenly'
    }}
  >
    <Box>
      <Typography variant="h4" gutterBottom color="primary">
        Подходящие книги не найдены :(
      </Typography>

      <Typography variant="subtitle1" gutterBottom sx={{ maxWidth: '500px' }}>
        Мы сохранили эту заявку в разделе “Мои обмены” и сообщим вам сразу как найдем подходящую книгу :)
      </Typography>
    </Box>

    <BookGirlImg style={{ alignSelf: 'center' }}/>
  </Box>
)

export default NotFound
