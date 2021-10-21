import { IFormInitialValues } from './formIinitialValues'

const validate = [
  ( values: IFormInitialValues ) => {
    const errors: IFormInitialValues = {}

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
    } else if (!/^[0-9]{4}$/.test(values.yearPublishing)) {
      errors.yearPublishing = '4 цифры'
    }

    if (values.giveCategories.length === 0) {
      errors.giveCategories = '* Укажите минимум одну категорию'
    }

    return errors
  },

  ( values: IFormInitialValues ) => {
    const errors: IFormInitialValues = {}

    if (values.getCategories.length === 0) {
      errors.getCategories = '* Укажите минимум одну категорию'
    }

    return errors
  },

  ( values: IFormInitialValues ) => {
    const errors: IFormInitialValues = {}

    if (!values.zipCode) {
      errors.zipCode = 'Укажите индекс'
    } else if (!/^[0-9]{6}$/.test(values.zipCode)) {
      errors.zipCode = '6 цифр'
    }

    if (!values.city) {
      errors.city = 'Укажите город'
    } else if (!/^[а-яёА-ЯЁ]{1,50}$/.test(values.city)) {
      errors.city = 'Только кириллица, до 50 знаков'
    }

    if (!values.street) {
      errors.street = 'Укажите улицу'
    } else if (!/^[а-яёА-ЯЁ]{1,50}$/.test(values.street)) {
      errors.street = 'Только кириллица, до 50 знаков'
    }

    if (values.structure && !/^[0-9а-яёА-ЯЁ]{1,4}$/.test(values.structure)) {
      errors.structure = 'Только цифры и кириллица, до 4 знаков'
    }

    if (!values.house) {
      errors.house = 'Укажите номер дома'
    } else if (!/^[0-9а-яёА-ЯЁ]{1,4}$/.test(values.house)) {
      errors.house = 'Только цифры и кириллица, до 4 знаков'
    }

    if (values.apartment && !/^[0-9а-яёА-ЯЁ]{1,4}$/.test(values.apartment)) {
      errors.apartment = 'Только цифры и кирилица, до 4 знаков'
    }

    if (!values.surname) {
      errors.surname = 'Укажите фамилию'
    } else if (!/^[а-яёА-ЯЁ]{1,50}$/.test(values.surname)) {
      errors.surname = 'Только кириллица, до 50 знаков'
    }

    if (!values.name) {
      errors.name = 'Укажите имя'
    } else if (!/^[а-яёА-ЯЁ]{1,20}$/.test(values.name)) {
      errors.name = 'Только кириллица, до 20 знаков'
    }

    if (values.patronymic && !/^[а-яёА-ЯЁ]{1,50}$/.test(values.patronymic)) {
      errors.patronymic = 'Только кирилица, до 50 знаков'
    }

    return errors
  }
]

export default validate
