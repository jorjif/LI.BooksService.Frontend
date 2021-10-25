import { ILogin } from "./authorization";

interface IError {
  password?: string;
  login?: string;
}

export const validation = ({ password, login }: ILogin) => {
  const errors: IError = {};
  if (!password) {
    errors.password = "Введите пароль";
  } else if (
    !/^(?=.*\d)(?=.*[A-Z])(?!.*[^a-zA-Z0-9@#$^+=])(.{8,})$/.test(password)
  ) {
    errors.password =
      "Пароль должен быть от 8 символов содержать минимум 1 заглавную и цифру";
  }
  if (!login) {
    errors.login = "Введите логин";
  } else if (
    /[+=-><]/.test(login)
    //!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(login)
  ) {
    errors.login = "Логин не должен содержать спецсимволов";
  }

  return errors;
};
