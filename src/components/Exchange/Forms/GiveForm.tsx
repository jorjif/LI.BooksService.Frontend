import { Grid } from '@material-ui/core'

import TextInput from '../Fields/TextInput'
import Categories from '../Fields/Categories'

import { ReactComponent as CarImg } from './assets/Car.svg'

const GiveForm: React.FC = () => (
  <Grid container sx={{ height: '100%' }}>
    <Grid item xs={12} sm={6} pr={2} sx={{ height: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Grid container columnSpacing={2} rowSpacing={2}>
        <Grid item sm={12}>
          <TextInput name="bookName" label="Название книги *" />  
        </Grid>

        <Grid item sm={7}>
          <TextInput name="authorSurname" label="Фамилия автора *" />
        </Grid>

        <Grid item sm={5}>
          <TextInput name="authorName" label="Имя автора *" />
        </Grid>

        <Grid item sm={8}>
          <TextInput name="isbn" label="ISBN" />
        </Grid>

        <Grid item sm={4}>
          <TextInput name="yearPublishing" label="Год издания *" />
        </Grid>
      </Grid>

      <CarImg style={{ width: 'fit-content' }} />
    </Grid>

    <Grid item xs={12} sm={6} pl={2} sx={{ height: 'inherit' }}>
      <Categories type='giveCategories' />
    </Grid>
  </Grid>
)

export default GiveForm
