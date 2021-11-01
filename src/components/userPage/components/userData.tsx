import React from "react";
import { Box } from "@material-ui/system";
import {
  useGetUserQuery,
  useGetAdressForUserPageQuery,
} from "../../../app/store/api/apiSlice";
import { useAppSelector } from "../../../app/hooks/hooks";
import { LoadRing } from "../../loadRing/loadRing";

const UserData: React.FC = () => {
  const id = useAppSelector(({ auth }) => auth.id);
  const { data, isSuccess } = useGetUserQuery(id);
  const userAddresses = useGetAdressForUserPageQuery(id);
  const userData = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  if (isSuccess && userAddresses.isSuccess) {
    const { lastName, firstName, secondName, email, rating } = data;

    return (
      <Box>
        <Box sx={userData}>
          <h1 className="page_userPage_subHeader">Ваш рейтинг:</h1>
          <div>{rating}</div>
        </Box>
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
          <div>{secondName}</div>
        </Box>
        {userAddresses ? (
          <Box sx={userData}>
            <h1 className="page_userPage_subHeader">Адрес:</h1>
            <div>
              г.{userAddresses.data.addrCity} ул.{userAddresses.data.addrStreet} д.
              {userAddresses.data.addrHouse}
              {userAddresses.data.addrBuilding
                ? `стр.${userAddresses.data.addrBuilding} `
                : ""}
              {userAddresses.data.addrApart
                ? `кв. ${userAddresses.data.addrApart}`
                : ""}
            </div>
          </Box>
        ) : null}
        <Box sx={userData}>
          <h1 className="page_userPage_subHeader">Индекс:</h1>
          <div>{userAddresses.data.addrIndex}</div>
        </Box>
        <Box sx={userData}>
          <h1 className="page_userPage_subHeader">E-Mail:</h1>
          <div>{email}</div>
        </Box>
      </Box>
    );
  }
  return <LoadRing />;
};

export default UserData;
