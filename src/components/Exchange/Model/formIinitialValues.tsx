export interface IFormInitialValues {
  bookName?: string;
  authorName?: string;
  authorSurname?: string;
  isbn?: string;
  yearPublishing: string;
  giveCategories?: any;
  getCategories?: any;
  zipCode?: string;
  city?: string;
  street?: string;
  structure?: string;
  house?: string;
  apartment?: string;
  name?: string;
  surname?: string;
  patronymic?: string;
}

const formInitialValues: IFormInitialValues = {
  authorName: "",
  authorSurname: "",
  bookName: "",
  isbn: "",
  yearPublishing: "",
  giveCategories: [],
  getCategories: [],
  zipCode: "",
  city: "",
  street: "",
  structure: "",
  house: "",
  apartment: "",
  name: "",
  surname: "",
  patronymic: "",
};

export default formInitialValues;
