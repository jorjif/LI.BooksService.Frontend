import { Paper, Box } from "@material-ui/core";
import React, { useState } from "react";
import UserData, { boilerplate } from "./components/userData";
import { ReactComponent as Pencil } from "./pencil.svg";
import avatar from "./avatar.png";
import "./userPage.scss";
import RegisterInput from "../registerInput/registerInput";

const UserPage: React.FC = () => {
  const [isChanged, setChanged] = useState(false);
  const startChanging = () => {
    setChanged(!isChanged);
  };

  const onSubmitBoilerplate = (value: object) => {
    console.log(value);
  };
  return (
    <Paper elevation={3} className="page_paper">
      <Box className="page_userPage_imgBox">
        <img alt="avatar" src={avatar} />
      </Box>
      <Box>
        <Box component="header" sx={{ display: "flex", alignItems: "center" }}>
          <h1 className="page_userPage_header">{boilerplate.login}</h1>
          <Pencil onClick={startChanging} />
        </Box>
        {isChanged ? (
          <RegisterInput onSubmit={(value: object) => onSubmitBoilerplate(value)}>
            Сохранить
          </RegisterInput>
        ) : (
          <UserData />
        )}
      </Box>
    </Paper>
  );
};

export default UserPage;
