import { IRegisterData } from "./registerInput";

interface IErrors {
  firstName?: string;
  lastName?: string;
  patronymic?: string;
  city?: string;
  street?: string;
  building?: string;
  buildingNum?: string;
  apartament?: string;
  index?: string;
  mail?: string;
  login?: string;
  password?: string;
}

export const registerValidation = (values: IRegisterData) => {
  const errors: IErrors = {};
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
  if (!/^[А-ЯЁа-яё]{0,25}$/.test(values.patronymic)) {
    errors.patronymic = "Только кириллица, не больше 25 букв";
  }
  if (!values.mail) {
    errors.mail = "Введите email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.mail)) {
    errors.mail = "Некорректный email";
  }
  if (!values.login) {
    errors.login = "Введите логин";
  } else if (/[+=-><]/.test(values.login)) {
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
  if (!values.index) {
    errors.index = "Введите индекс";
  } else if (!/^\d{6}$/.test(values.index)) {
    errors.index = "6 цифр";
  }
  if (!values.city) {
    errors.city = "Введите город";
  } else if (!/^[А-ЯЁа-яё]{0,15}$/.test(values.patronymic)) {
    errors.city = "до 15 букв";
  }
  if (!values.street) {
    errors.street = "Введите улицу";
  } else if (!/^[А-ЯЁа-яё]+(.*-?)[А-ЯЁа-яё]+(.{1,25})$/.test(values.street)) {
    errors.street = "до 25 букв и дефиса";
  }
  if (!values.buildingNum) {
    errors.buildingNum = "Введите номер дома";
  } else if (!/^\d{1,3}[А-ЯЁа-яё]?$/.test(values.buildingNum)) {
    errors.buildingNum = "до 2 цифр";
  }
  if (!/^\d{0,3}$/.test(values.apartament)) {
    errors.apartament = "до 3 цифр";
  }
  if (!/^\d{0,1}[А-ЯЁа-яё]?$/.test(values.building)) {
    errors.building = "до 2зн";
  }
  return errors;
};
