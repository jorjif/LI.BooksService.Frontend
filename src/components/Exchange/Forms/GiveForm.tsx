import { Field } from 'formik'
import { Grid, TextField } from '@material-ui/core'

import Categories from '../../Categories/Categories'

import { IFormInitialVallues } from '../FormModel/formInitialValues'
import { IErrors } from '../FormModel/validate'

import { ReactComponent as CarImg } from './assets/Car.svg'

interface props {
  errors: IErrors
  touched: IFormInitialVallues
}

const GiveForm: React.FC<props> = ({ errors, touched }) => {
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
				<Grid container columnSpacing={2} rowSpacing={2}>
					<Grid item sm={12}>
						<Field
							as={TextField}
							name="bookName"
							label="Название книги *"
							variant="standard"
							fullWidth
							error={touched.bookName && !!errors.bookName}
							helperText={touched.bookName && !!errors.bookName ? errors.bookName : ' '}
						/>
					</Grid>
				
					<Grid item sm={7}>
						<Field
							as={TextField}
							name="authorSurname"
							label="Фамилия автора *"
							variant="standard"
							fullWidth
							error={touched.authorSurname && !!errors.authorSurname}
							helperText={touched.authorSurname && !!errors.authorSurname ? errors.authorSurname : ' '}
						/>
					</Grid>
					
					<Grid item sm={5}>
						<Field
							as={TextField}
							name="authorName"
							label="Имя автора *"
							variant="standard"
							fullWidth
							error={touched.authorName && !!errors.authorName}
							helperText={touched.authorName && !!errors.authorName ? errors.authorName : ' '}
						/>
					</Grid>
					
					<Grid item sm={8}>
						<Field
							as={TextField}
							name="isbn"
							label="ISBN"
							variant="standard"
							fullWidth
							error={touched.isbn && !!errors.isbn}
							helperText={touched.isbn && !!errors.isbn ? errors.isbn : ' '}
						/>
					</Grid>

					<Grid item sm={4}>
						<Field
							as={TextField}
							name="yearPublishing"
							label="Год издания *"
							variant="standard"
							fullWidth
							error={touched.yearPublishing && !!errors.yearPublishing}
							helperText={touched.yearPublishing && !!errors.yearPublishing ? errors.yearPublishing : ' '}
						/>
					</Grid>
				</Grid>

				<CarImg style={{ width: 'fit-content' }} />
			</Grid>
		
			<Grid item xs={12} sm={6} pl={2} sx={{ height: 'inherit' }}>
				<Categories type='giveCategories' />
			</Grid>
		</Grid>
	)
}

export default GiveForm
