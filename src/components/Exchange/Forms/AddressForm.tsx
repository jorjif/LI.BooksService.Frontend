import { Grid, Paper, Typography } from '@material-ui/core'

import TextInput from '../Fields/TextInput'

import { ReactComponent as CarImg } from './assets/Car.svg'

const AddressForm: React.FC = () => (
  <Grid container sx={{ height: '100%' }}>
    <Grid item xs={12} sm={6} pr={2} sx={{ height: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Paper elevation={0} sx={{ p: 5, background: 'linear-gradient(#606c38, #9caf5e)', textAlign: 'center', color: 'white' }}>
        <Typography variant="h5">
          Вы заполняли адрес доставки при регистрации, но сейчас можете изменить его и сделать кому то сюрприз :)
        </Typography>
      </Paper>

      <CarImg style={{ width: 'fit-content' }} />
    </Grid>

    <Grid item xs={12} sm={6} pl={2} sx={{ height: 'inherit' }}>
      <Grid container spacing={2}>
        <Grid item sm={3}>
          <TextInput name="zipCode" label="Индекс *" />
        </Grid>

        <Grid item sm={9}>
          <TextInput name="city" label="Город *" />
        </Grid>

        <Grid item sm={6}>
          <TextInput name="street" label="Улица *" />
        </Grid>

        <Grid item sm={2}>
          <TextInput name="structure" label="Стр." />
        </Grid>

        <Grid item sm={2}>
          <TextInput name="house" label="Дом *" />
        </Grid>

        <Grid item sm={2}>
          <TextInput name="apartment" label="Кв." />
        </Grid>

        <Grid item sm={7} mt={4}>
          <TextInput name="surname" label="Фамилия *" />
        </Grid>

        <Grid item sm={5} mt={4}>
          <TextInput name="name" label="Имя *" />
        </Grid>

        <Grid item sm={12}>
          <TextInput name="patronymic" label="Отчество" />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
)

export default AddressForm
