import React from "react";
import { Box } from "@material-ui/system";

export const boilerplate = {
  lastName: "Иванов",
  firstName: "Иван",
  patronymic: "Иванович",
  adress: [
    {
      index: "980707",
      city: "Краснодар",
      street: "Красная",
      buildingNum: "178",
      apartament: "3",
      building: "",
    },
  ],
  mail: "dfdgfd@gf.trt",
  login: "Asdafasdaf",
  password: "",
};

const { lastName, firstName, patronymic, adress, mail } = boilerplate;

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
          г.{adress[0].city} ул.{adress[0].street} д.{adress[0].buildingNum}
          {adress[0].building ? `стр.${adress[0].building} ` : ""}
          {adress[0].apartament ? `кв. ${adress[0].apartament}` : ""}
        </div>
      </Box>
      <Box sx={userData}>
        <h1 className="page_userPage_subHeader">Индекс:</h1>
        <div>{adress[0].index}</div>
      </Box>
      <Box sx={userData}>
        <h1 className="page_userPage_subHeader">E-Mail:</h1>
        <div>{mail}</div>
      </Box>
    </Box>
  );
};

export default UserData;
