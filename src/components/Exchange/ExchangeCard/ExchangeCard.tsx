import { Box, Grid, Card, CardMedia, CardContent, Avatar, Typography } from '@material-ui/core'
import { useFormikContext } from 'formik'

import { IFormInitialValues } from '../Model/formIinitialValues'

import NotFound from './Statuses/NotFound'
import Searching from './Statuses/Searching'
import Selection from './Statuses/Selection'

import { ReactComponent as CarImg } from '../assets/Car.svg'
import avatar from '../assets/user-1.jpg'

const ExchangeCard = () => {
  const { values } = useFormikContext<IFormInitialValues>()

  return (
    <Grid container sx={{ height: '100%' }}>
      <Grid item xs={12} sm={6} pr={2} sx={{ height: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'column', justifyContent: 'center' }}>
          <Card variant="outlined" sx={{ display: 'flex' }}>
            <CardMedia
              component="img"
              sx={{ width: 200 }}
              image={avatar}
              alt="User"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom component="div">
                  Хочу обменять
                </Typography>
                <Typography variant="h6" component="div">
                  {values.authorName} {values.authorSurname}
                </Typography>
                <Typography variant="h4" gutterBottom component="div">
                  {values.bookName}
                </Typography>
                <Typography variant="subtitle1" component="div">
                  {values.isbn}
                </Typography>
                <Typography variant="subtitle1" component="div">
                  {values.yearPublishing} год
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Box>

        <CarImg style={{ width: 'fit-content' }} />
      </Grid>

      <Grid item xs={12} sm={6} pl={2} sx={{ height: 'inherit' }}>
        <Selection />
      </Grid>
    </Grid>
  )
}

export default ExchangeCard
