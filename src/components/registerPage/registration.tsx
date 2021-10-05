import { Paper } from "@material-ui/core";
import React from "react";
import "./registration.scss";
import { ReactComponent as Kid } from "../mainPage/kid.svg";
import { Box } from "@material-ui/system";

const Registration: React.FC = () => {
  const boxStyles: Object = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };
  return (
    <Paper elevation={3} className="page_mainPage_paper">
      <Kid className="page_mainPage_icon" />
      <Box sx={boxStyles}>
        <h1>Книгомен</h1>
        <h2>Регистрация</h2>
      </Box>
    </Paper>
  );
};

export default Registration;
