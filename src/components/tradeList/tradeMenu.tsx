import { Box, Tab, Tabs } from "@material-ui/core";
import React from "react";
import TextInput from "../customInputs/TextInput";

/*function tabProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}*/
interface IProps {
  children: React.ReactNode;
}

const TradeMenu: React.FC<IProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <h1 className="page_tradePage_h1">Мои обмены</h1>
      <Box
        sx={{
          display: "flex",
          marginBottom: "1rem",
          justifyContent: "space-between",
        }}
      >
        <TextInput size="small" />
        <Tabs>
          <Tab label="Все" />
          <Tab label="Идет обмен" />
          <Tab label="Завершенные" />
        </Tabs>
      </Box>
      {children}
    </Box>
  );
};

export default TradeMenu;
