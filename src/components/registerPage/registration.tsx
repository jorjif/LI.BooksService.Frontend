import { Button, Paper } from "@material-ui/core";
import React from "react";
import "./registration.scss";
import { ReactComponent as Kid } from "../mainPage/kid.svg";
import { Box } from "@material-ui/system";
import RegisterInput from "../registerInput/registerInput";
import "../mainPage/mainPage.scss";

const Registration: React.FC = () => {
  const boxStyles: Object = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  return (
    <Paper elevation={3} className="page_registerPage_paper">
      <Kid className="page_registerPage_icon" />
      <Box sx={boxStyles}>
        <h1 className="page_registerPage_h1">Книгомен</h1>
        <h2 className="page_regiserPage_h2">Регистрация</h2>
        <RegisterInput />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            m: "8px 0",
          }}
        >
          <Button variant="contained" className="page_registerPage_button">
            Зарегистрироваться
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default Registration;
