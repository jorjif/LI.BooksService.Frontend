import { Box } from "@material-ui/system";
import React from "react";
import TextInput from "../customInputs/TextInput";
import { IAdressData } from "./adress";

export interface IRegisterData {
  firstName: string;
  lastName: string;
  secondName: string;
  adress: Array<IAdressData>;
  email: string;
  userName: string;
  password: string;
}

export const registerInitValues: IRegisterData = {
  firstName: "",
  lastName: "",
  secondName: "",
  email: "",
  userName: "",
  password: "",
  adress: [],
};

const RegisterInput: React.FC = () => {
  const boxStyle: Object = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
  };

  const doubleBox: Object = {
    flex: 1,
  };
  const doubleBoxLeft: Object = {
    ...doubleBox,
    marginRight: "16px",
  };
  return (
    <Box>
      <Box sx={{ maxWidth: "560px" }}>
        <Box sx={boxStyle}>
          <TextInput label="Фамилия" name="lastName" required />
        </Box>
        <Box sx={boxStyle}>
          <Box sx={doubleBoxLeft}>
            <TextInput label="Имя" name="firstName" required />
          </Box>
          <Box sx={doubleBox}>
            <TextInput label="Отчество" name="secondName" />
          </Box>
        </Box>

        <Box sx={boxStyle}>
          <TextInput label="E-mail" type="email" required name="email" />
        </Box>
        <Box sx={boxStyle}>
          <Box sx={doubleBoxLeft}>
            <TextInput label="Логин" name="userName" required/>
          </Box>
          <Box sx={doubleBox}>
            <TextInput label="Пароль" type="password" name="password" required />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterInput;
