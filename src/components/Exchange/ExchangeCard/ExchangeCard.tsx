import { Grid, Avatar, Typography } from '@material-ui/core'
import { useFormikContext, FormikProps } from 'formik'

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
      <Grid item xs={12} sm={5} pr={2} sx={{ height: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid item sm={6}>
            <Avatar
              alt="User"
              src={avatar}
              sx={{ width: 200, height: 200 }}
            />
          </Grid>

          <Grid item sm={6}>
            <Typography variant="subtitle1" gutterBottom component="div">
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
          </Grid>
        </Grid>

        <CarImg style={{ width: 'fit-content' }} />
      </Grid>

      <Grid item xs={12} sm={7} pl={2} sx={{ height: 'inherit' }}>
        
      </Grid>
    </Grid>
  )
}

export default ExchangeCard
