import { IFormInitialVallues } from './formInitialValues'

export interface IErrors {
  bookName?: string
  authorSurname?: string
  authorName?: string
	isbn?: string
  yearPublishing?: string
  giveCategories?: string
  getCategories?: string
  city?: string
  street?: string
  house?: string
}

const validate = [
	( values: IFormInitialVallues ) => {
		const errors: IErrors = {}
		
		if (!values.bookName) {
			errors.bookName = 'Укажите название книги'
		} else if (!/^[0-9a-zA-Zа-яёА-ЯЁ"'-.,]{1,50}$/.test(values.bookName)) {
			errors.bookName = 'Только кириллица и латиница, цифры, кавычки, тире, знаки препинания, до 50 знаков'
		}

		if (!values.authorSurname) {
			errors.authorSurname = 'Укажите фамилию автора'
		} else if (!/^[a-zA-Zа-яёА-ЯЁ]{1,50}$/.test(values.authorSurname)) {
			errors.authorSurname = 'Только кириллица и латиница, до 50 знаков'
		}
	
		if (!values.authorName) {
			errors.authorName = 'Укажите имя автора'
		} else if (!/^[a-zA-Zа-яёА-ЯЁ]{1,20}$/.test(values.authorName)) {
			errors.authorName = 'Только кириллица и латиница, до 20 знаков'
		}
	
		if (values.isbn && !/^[0-9-]{1,13}$/.test(values.isbn)) {
			errors.isbn = 'Только цифры и тире, до 13 знаков'
		}

		if (!values.yearPublishing) {
			errors.yearPublishing = 'Укажите год издания'
		}else if (!/^[0-9]{4}$/.test(values.yearPublishing)) {
			errors.yearPublishing = '4 цифры'
		}

		if (values.giveCategories.length === 0) {
			errors.giveCategories = '* Укажите минимум одну категорию'
		}
	
		return errors
	},

	( values: IFormInitialVallues ) => {
		const errors: IErrors = {}
		
		if (values.getCategories.length === 0) {
			errors.getCategories = '* Укажите минимум одну категорию'
		}

		return errors
	},

	( values: IFormInitialVallues ) => {
		const errors: IErrors = {}
		
		if (!values.city) {
			errors.city = 'Укажите город'
		}
	
		if (!values.street) {
			errors.street = 'Укажите улицу'
		}
	
		if (!values.house) {
			errors.house = 'Укажите номер дома'
		}
	
		return errors
	}
]

export default validate
