import { Button, Paper } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { ReactComponent as Kid } from "./assets/kid.svg";
import { ReactComponent as Books } from "./assets/books.svg";
import React from "react";
import { Link } from "react-router-dom";
import { routeNames } from "../../../routes";

const MainPageLogged: React.FC = () => {
  const buttonsStyle: Object = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <Paper className="page_paper_column">
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <Link to={routeNames.PROFILE}>
          <Box sx={buttonsStyle}>
            <Kid />
            <h1 className="page_mainPage_h1">Мой профиль</h1>
          </Box>
        </Link>

        <Link to={routeNames.TRADES}>
          <Box sx={buttonsStyle}>
            <Books />
            <h1 className="page_mainPage_h1">Мои обмены</h1>
          </Box>
        </Link>
      </Box>
      <Box>
        <Link to={routeNames.EXCHANGE}>
          <Button sx={{ width: "100%" }}>НАЧАТЬ ОБМЕН</Button>
        </Link>
      </Box>
    </Paper>
  );
};

export default MainPageLogged;
