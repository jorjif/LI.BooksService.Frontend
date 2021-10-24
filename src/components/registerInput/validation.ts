import { IRegisterData } from "./registerInput";

interface IAdressErrors {
  city?: string;
  street?: string;
  building?: string;
  buildingNum?: string;
  apartament?: string;
  index?: string;
}
interface IErrors {
  firstName?: string;
  lastName?: string;
  patronymic?: string;
  adress?: IAdressErrors[];
  mail?: string;
  login?: string;
  password?: string;
}

export const registerValidation = (values: IRegisterData) => {
  const errors: any = { adress: [] };
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
  values.adress.forEach((adress, index) => {
    errors.adress[index] = {};
    if (!adress.index) {
      errors.adress[index].index = "Введите индекс";
    } else if (!/^\d{6}$/.test(adress.index)) {
      errors.adress[index].index = "6 цифр";
    }
    if (!adress.city) {
      errors.adress[index].city = "Введите город";
    } else if (!/^[А-ЯЁа-яё]{0,15}$/.test(adress.city)) {
      errors.adress[index].city = "до 15 букв";
    }
    if (!adress.street) {
      errors.adress[index].street = "Введите улицу";
    } else if (!/^[А-ЯЁа-яё]+(.*-?)[А-ЯЁа-яё]+(.{1,25})$/.test(adress.street)) {
      errors.adress[index].street = "до 25 букв и дефиса";
    }
    if (!adress.buildingNum) {
      errors.adress[index].buildingNum = "Введите номер дома";
    } else if (!/^\d{1,3}[А-ЯЁа-яё]?$/.test(adress.buildingNum)) {
      errors.adress[index].buildingNum = "до 2 цифр";
    }
    if (!/^\d{0,3}$/.test(adress.apartament)) {
      errors.adress[index].apartament = "до 3 цифр";
    }
    if (!/^\d{0,1}[А-ЯЁа-яё]?$/.test(adress.building)) {
      errors.adress[index].building = "до 2зн";
    }
  });

  return errors;
};
