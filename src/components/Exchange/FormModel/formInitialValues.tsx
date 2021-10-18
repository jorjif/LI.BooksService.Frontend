export interface IFormInitialVallues {
  authorName?: string
  authorSurname?: string
  bookName?: string
  isbn?: string
  yearPublishing?: string
  giveCategories?: any
  getCategories?: any
  zipCode? :any
  city?: string
  street?: string
  structure?: string
  house?: string
  apartment?: string
  name?: string
  surname?: string
  patronymic?: string
}

const formInitialValues: IFormInitialVallues = {
  authorName: '',
  authorSurname: '',
  bookName: '',
  isbn: '',
  yearPublishing: '',
  giveCategories: [],
  getCategories: [],
  zipCode: '',
  city: '',
  street: '',
  structure: '',
  house: '',
  apartment: '',
  name: '',
  surname: '',
  patronymic: '',
}

export default formInitialValues
