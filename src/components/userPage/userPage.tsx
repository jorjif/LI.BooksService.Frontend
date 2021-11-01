import { Paper, Box } from "@material-ui/core";
import React, { useState } from "react";
import UserData from "./components/userData";
import { ReactComponent as Pencil } from "./pencil.svg";
import avatar from "./avatar.png";
import "./userPage.scss";
import EditData from "./components/changeData";
import { useAppSelector } from "../../app/hooks/hooks";

const UserPage: React.FC = () => {
  const [isChanged, setChanged] = useState(false);
  const userName = useAppSelector((state) => state.userData.userName);
  const startChanging = () => {
    setChanged(!isChanged);
  };
  return (
    <Paper elevation={3} className="page_paper">
      <Box className="page_userPage_imgBox">
        <img alt="avatar" src={avatar} />
      </Box>
      <Box>
        <Box component="header" sx={{ display: "flex", alignItems: "center" }}>
          <h1 className="page_userPage_header">{userName}</h1>
          <Pencil onClick={startChanging} className="page_userPage_edit" />
        </Box>
        {isChanged ? <EditData /> : <UserData />}
      </Box>
    </Paper>
  );
};

export default UserPage;
