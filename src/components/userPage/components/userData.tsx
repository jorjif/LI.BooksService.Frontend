import React from "react";
import { Box } from "@material-ui/system";
import { IRegisterData } from "../../registerInput/registerInput";

export const boilerplate: IRegisterData = {
  lastName: "Иванов",
  firstName: "Иван",
  patronymic: "Иванович",
  index: "980707",
  city: "Краснодар",
  street: "Красная",
  buildingNum: "178",
  apartament: "3",
  mail: "dfdgfd@gf.trt",
  building: "",
  login: "Asdafasdaf",
  password: "",
};

const {
  lastName,
  firstName,
  patronymic,
  index,
  city,
  street,
  buildingNum,
  building,
  mail,
  apartament,
} = boilerplate;

const UserData: React.FC = () => {
  const userData = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <Box>
      <Box sx={userData}>
        <h1 className="page_userPage_subHeader">Фамилия:</h1>
        <div>{lastName}</div>
      </Box>
      <Box sx={userData}>
        <h1 className="page_userPage_subHeader">Имя:</h1>
        <div>{firstName}</div>
      </Box>
      <Box sx={userData}>
        <h1 className="page_userPage_subHeader">Отчество:</h1>
        <div>{patronymic}</div>
      </Box>
      <Box sx={userData}>
        <h1 className="page_userPage_subHeader">Адрес:</h1>
        <div>
          г.{city} ул.{street} д.{buildingNum} {building ? `стр.${building} ` : ""}
          {apartament ? `кв. ${apartament}` : ""}
        </div>
      </Box>
      <Box sx={userData}>
        <h1 className="page_userPage_subHeader">Индекс:</h1>
        <div>{index}</div>
      </Box>
      <Box sx={userData}>
        <h1 className="page_userPage_subHeader">E-Mail:</h1>
        <div>{mail}</div>
      </Box>
    </Box>
  );
};

export default UserData;
