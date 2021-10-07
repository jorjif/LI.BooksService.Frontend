import { Box } from "@material-ui/system";
import React from "react";
import TextInput from "../customInputs/TextInput";

const RegisterInput: React.FC = () => {
  const boxStyle: Object = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const inputProps: Object = {
    size: "small",
    variant: "standard",
    margin: "dense",
    fullWidth: true,
  };
  const doubleBox: Object = {
    flex: 1,
  };
  const doubleBoxLeft: Object = {
    ...doubleBox,
    marginRight: "16px",
  };
  return (
    <Box sx={{ maxWidth: "560px" }} component="form" noValidate>
      <Box sx={boxStyle}>
        <TextInput label="Фамилия" required {...inputProps} />
      </Box>
      <Box sx={boxStyle}>
        <Box sx={doubleBoxLeft}>
          <TextInput label="Имя" required {...inputProps} />
        </Box>
        <Box sx={doubleBox}>
          <TextInput label="Отчество" {...inputProps} />
        </Box>
      </Box>
      <Box sx={boxStyle}>
        <Box sx={doubleBoxLeft}>
          <TextInput label="Город" required {...inputProps} />
        </Box>
        <Box sx={doubleBox}>
          <TextInput label="Индекс" required {...inputProps} />
        </Box>
      </Box>
      <Box sx={boxStyle}>
        <Box sx={{ flex: 4 }}>
          <TextInput label="Улица" required {...inputProps} />
        </Box>
        <Box sx={{ flex: 1, m: "8px" }}>
          <TextInput label="Стр." {...inputProps} />
        </Box>
        <Box sx={{ flex: 1, m: "8px" }}>
          <TextInput label="Дом" required {...inputProps} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <TextInput label="Кв." {...inputProps} />
        </Box>
      </Box>
      <Box sx={boxStyle}>
        <TextInput label="E-mail" type="email" required fullWidth {...inputProps} />
      </Box>
      <Box sx={boxStyle}>
        <Box sx={doubleBoxLeft}>
          <TextInput label="Логин" size="small" required {...inputProps} />
        </Box>
        <Box sx={doubleBox}>
          <TextInput label="Пароль" type="password" required {...inputProps} />
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterInput;
