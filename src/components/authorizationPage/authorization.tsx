import { Paper } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React from "react";
import { ReactComponent as Kid } from "../mainPage/kid.svg";
import AuthForm from "./authForm";
import "./authorization.scss";

export interface ILogin {
  password: string;
  userName: string;
}

const AuthorizationPage: React.FC = () => {
  const boxStyles: Object = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };
  return (
    <Paper className="page_paper" elevation={3}>
      <Kid className="page_authPage_icon" />
      <Box sx={boxStyles}>
        <h1 className="page_authPage_h1">Кингомен</h1>
        <h2 className="page_authPage_h2">Авторизация</h2>
        <AuthForm />
        <div className="page_authPage_link">Не помню Пароль</div>
      </Box>
    </Paper>
  );
};

export default AuthorizationPage;
