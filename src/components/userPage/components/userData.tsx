import React from "react";
import { Box } from "@material-ui/system";
import { useGetUserQuery } from "../../../app/store/api/apiSlice";
import { useAppSelector } from "../../../app/hooks/hooks";

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
  userName: "Asdafasdaf",
  password: "",
};

const UserData: React.FC = () => {
  const id = useAppSelector(({ auth }) => auth.id);
  const { data, isSuccess } = useGetUserQuery(id);
  console.log(data);
  const userData = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const { lastName, firstName, secondName, userAddresses, email, rating } = data;

  return (
    <Box>
      <Box sx={userData}>
        <h1 className="page_userPage_subHeader">Фамилия:</h1>
        <div>{isSuccess ? lastName : null}</div>
      </Box>
      <Box sx={userData}>
        <h1 className="page_userPage_subHeader">Имя:</h1>
        <div>{isSuccess ? firstName : null}</div>
      </Box>
      <Box sx={userData}>
        <h1 className="page_userPage_subHeader">Отчество:</h1>
        <div>{isSuccess ? secondName : null}</div>
      </Box>
      {/*userAddresses ? (
        <Box sx={userData}>
          <h1 className="page_userPage_subHeader">Адрес:</h1>
          <div>
            г.{userAddresses[0].city} ул.{adress[0].street} д.{adress[0].buildingNum}
            {adress[0].building ? `стр.${adress[0].building} ` : ""}
            {adress[0].apartament ? `кв. ${adress[0].apartament}` : ""}
          </div>
          )
        </Box>
      ) : null*/}
      <Box sx={userData}>
        <h1 className="page_userPage_subHeader">Индекс:</h1>
        <div>{}</div>
      </Box>
      <Box sx={userData}>
        <h1 className="page_userPage_subHeader">E-Mail:</h1>
        <div>{isSuccess ? email : null}</div>
      </Box>
    </Box>
  );
};

export default UserData;
