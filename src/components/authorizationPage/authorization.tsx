import { Button, Paper } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React from "react";
import TextInput from "../customInputs/TextInput";
import { ReactComponent as Kid } from "../mainPage/kid.svg";
import "./authorization.scss";

const AuthorizationPage: React.FC = () => {
  const inputProps: Object = {
    size: "small",
    variant: "standard",
    margin: "dense",
    fullWidth: true,
    required: true,
  };

  const boxStyles: Object = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };
  return (
    <Paper className="page_authPage_paper" elevation={3}>
      <Kid className="page_authPage_icon" />
      <Box sx={boxStyles}>
        <h1 className="page_authPage_h1">Кингомен</h1>
        <h2 className="page_authPage_h2">Авторизация</h2>
        <Box>
          <TextInput label="Логин" {...inputProps} />
          <TextInput label="Пароль" type="password" {...inputProps} />
        </Box>
        <Button variant="contained" className="page_authPage_button">
          Войти
        </Button>
        <div className="page_authPage_link">Не помню Пароль</div>
      </Box>
    </Paper>
  );
};

export default AuthorizationPage;
