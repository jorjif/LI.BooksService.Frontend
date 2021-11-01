import { IRegisterData } from "./registerInput";

interface IAdressErrors {
  addrCity?: string;
  addrStreet?: string;
  addrStructure?: string;
  addrHouse?: string;
  addrApart?: string;
  addrIndex?: string;
}
/*interface IErrors {
  firstName?: string;
  lastName?: string;
  secondName?: string;
  adress?: IAdressErrors[];
  mail?: string;
  login?: string;
  password?: string;
}*/

export const registerValidation = (values: IRegisterData) => {
  const errors: any = {};
  if (!values.firstName) {
    errors.firstName = "Введите имя";
  } else if (!/^[А-ЯЁа-яё]{1,25}$/.test(values.firstName)) {
    errors.firstName = "Только кириллица, не больше 25 букв";
  }
  if (!values.lastName) {
    errors.lastName = "Введите фамилию";
  } else if (!/^[А-ЯЁа-яё]{1,50}$/.test(values.lastName)) {
    errors.lastName = "Только кириллица, не больше 50 букв";
  }
  if (!/^[А-ЯЁа-яё]{0,25}$/.test(values.secondName)) {
    errors.patronymic = "Только кириллица, не больше 25 букв";
  }
  if (!values.email) {
    errors.email = "Введите email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Некорректный email";
  }
  if (!values.userName) {
    errors.login = "Введите логин";
  } else if (/[+=-><]/.test(values.userName)) {
    errors.login = "Логин не должен содержать спецсимволов";
  }
  if (!values.password) {
    errors.password = "Введите пароль";
  } else if (
    !/^(?=.*\d)(?=.*[A-Z])(?!.*[^a-zA-Z0-9@#$^+=])(.{8,})$/.test(values.password)
  ) {
    errors.password =
      "Логин должен быть от 8 символов содержать минимум 1 заглавную и цифру";
  }
  if (values.adress.length > 0) {
    //creating array for addresses
    const adressesErrors: any = [];
    values.adress.forEach((adress, index) => {
      //for each adress we creating empty object
      const adressErrors: IAdressErrors = {};
      if (!adress.addrIndex) {
        adressErrors.addrIndex = "Введите индекс";
      } else if (!/^\d{6}$/.test(adress.addrIndex)) {
        adressErrors.addrIndex = "6 цифр";
      }
      if (!adress.addrCity) {
        adressErrors.addrCity = "Введите город";
      } else if (!/^[А-ЯЁа-яё]{0,15}$/.test(adress.addrCity)) {
        adressErrors.addrCity = "до 15 букв";
      }
      if (!adress.addrStreet) {
        adressErrors.addrStreet = "Введите улицу";
      } else if (
        !/^[А-ЯЁа-яё]+(.*-?)[А-ЯЁа-яё]+(.{1,25})$/.test(adress.addrStreet)
      ) {
        adressErrors.addrStreet = "до 25 букв и дефиса";
      }
      if (!adress.addrHouse) {
        adressErrors.addrHouse = "Введите номер дома";
      } else if (!/^\d{1,3}[А-ЯЁа-яё]?$/.test(adress.addrHouse)) {
        adressErrors.addrHouse = "до 2 цифр";
      }
      if (!/^\d{0,3}$/.test(adress.addrApart)) {
        adressErrors.addrApart = "до 3 цифр";
      }
      if (!/^\d?[А-ЯЁа-яё]?$/.test(adress.addrStructure)) {
        adressErrors.addrStructure = "до 2зн";
      }
      //pushing empty object to our errors array leads to bugs in formik
      if (Object.keys(adressErrors).length > 0) adressesErrors[index] = adressErrors;
    });
    //adding empty array to errors object also break application
    if (errors.length > 0) errors.adress = adressesErrors;
  }
  return errors;
};
