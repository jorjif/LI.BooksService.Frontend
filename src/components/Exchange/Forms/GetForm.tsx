import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'

import Categories from '../Fields/Categories'

import { ReactComponent as CarImg } from './assets/Car.svg'

const GetForm: React.FC = () => (
  <Grid container sx={{ height: '100%' }}>
    <Grid item sm={6} pr={2} sx={{ height: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Paper elevation={0} sx={{ p: 5, background: 'linear-gradient(#606c38, #9caf5e)', textAlign: 'center', color: 'white' }}>
        <Typography variant="h5">
          Укажите свои пожелания и мы подберем вам подходящую книгу :)
        </Typography>
      </Paper>

      <CarImg style={{ width: 'fit-content' }} />
    </Grid>

    <Grid item sm={6} pl={2} sx={{ height: 'inherit' }}>
      <Categories type='getCategories' />
    </Grid>
  </Grid>
)

export default GetForm
