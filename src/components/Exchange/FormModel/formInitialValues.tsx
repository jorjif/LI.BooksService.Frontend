export interface IFormInitialVallues {
  authorName?: string
  authorSurname?: string
  bookName?: string
  isbn?: string
  yearPublishing?: string
  giveCategories?: any
  getCategories?: any
  city?: string
  street?: string
  structure?: string
  house?: string
  apartment?: string
}

const formInitialValues: IFormInitialVallues = {
  authorName: '',
  authorSurname: '',
  bookName: '',
  isbn: '',
  yearPublishing: '',
  giveCategories: [],
  getCategories: [],
  city: '',
  street: '',
  structure: '',
  house: '',
  apartment: '',
}

export default formInitialValues
