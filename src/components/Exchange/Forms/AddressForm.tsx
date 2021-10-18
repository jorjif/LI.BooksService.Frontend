import { Field } from 'formik'
import { Grid, TextField, Paper, Typography } from '@material-ui/core'

import { IFormInitialVallues } from '../FormModel/formInitialValues'
import { IErrors } from '../FormModel/validate'

import { ReactComponent as CarImg } from './assets/Car.svg'

interface props {
  errors: IErrors
  touched: IFormInitialVallues
}

const AddressForm: React.FC<props> = ({ errors, touched }) => {
	return (
		<Grid container sx={{ height: '100%' }}>
			<Grid item xs={12} sm={6} pr={2}
				sx={{
					height: 'inherit',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}
			>
				<Paper
						elevation={0}
						sx={{
							p: 5,
							background: 'linear-gradient(#606c38, #9caf5e)',
							textAlign: 'center',
							color: 'white',
						}}
					>
						<Typography variant="h5">
							Вы заполняли адрес доставки при регистрации, но сейчас можете изменить его и сделать кому то сюрприз :)
						</Typography>
					</Paper>

					<CarImg style={{ width: 'fit-content' }} />
			</Grid>

			<Grid item xs={12} sm={6} pl={2} sx={{ height: 'inherit' }}>
				<Grid container spacing={2}>
				<Grid item sm={3}>
						<Field
							as={TextField}
							name="zipCode"
							label="Индекс *"
							variant="standard"
							fullWidth
							error={touched.zipCode && !!errors.zipCode}
							helperText={touched.zipCode && !!errors.zipCode ? errors.zipCode : ' '}
						/>
					</Grid>

					<Grid item sm={9}>
						<Field
							as={TextField}
							name="city"
							label="Город *"
							variant="standard"
							fullWidth
							error={touched.city && !!errors.city}
							helperText={touched.city && !!errors.city ? errors.city : ' '}
						/>
					</Grid>
				
					<Grid item sm={6}>
						<Field
							as={TextField}
							name="street"
							label="Улица *"
							variant="standard"
							fullWidth
							error={touched.street && !!errors.street}
							helperText={touched.street && !!errors.street ? errors.street : ' '}
						/>
					</Grid>
					
					<Grid item sm={2}>
						<Field
							as={TextField}
							name="structure"
							label="Стр."
							variant="standard"
							fullWidth
							error={touched.structure && !!errors.structure}
							helperText={touched.structure && !!errors.structure ? errors.structure : ' '}
						/>
					</Grid>
					
					<Grid item sm={2}>
						<Field
							as={TextField}
							name="house"
							label="Дом *"
							variant="standard"
							fullWidth
							error={touched.house && !!errors.house}
							helperText={touched.house && !!errors.house ? errors.house : ' '}
						/>
					</Grid>

					<Grid item sm={2}>
						<Field
							as={TextField}
							name="apartment"
							label="Кв."
							variant="standard"
							fullWidth
							error={touched.apartment && !!errors.apartment}
							helperText={touched.apartment && !!errors.apartment ? errors.apartment : ' '}
						/>
					</Grid>

					<Grid item sm={7} mt={4}>
						<Field
							as={TextField}
							name="surname"
							label="Фамилия *"
							variant="standard"
							fullWidth
							error={touched.surname && !!errors.surname}
							helperText={touched.surname && !!errors.surname ? errors.surname : ' '}
						/>
					</Grid>
					
					<Grid item sm={5} mt={4}>
						<Field
							as={TextField}
							name="name"
							label="Имя *"
							variant="standard"
							fullWidth
							error={touched.name && !!errors.name}
							helperText={touched.name && !!errors.name ? errors.name : ' '}
						/>
					</Grid>

					<Grid item sm={12}>
						<Field
							as={TextField}
							name="patronymic"
							label="Отчество"
							variant="standard"
							fullWidth
							error={touched.patronymic && !!errors.patronymic}
							helperText={touched.patronymic && !!errors.patronymic ? errors.patronymic : ' '}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default AddressForm
