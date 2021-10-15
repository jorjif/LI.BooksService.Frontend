import { Box, Pagination, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import { CustomTabs, CustomTab } from "../customInputs/tabs";
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
  const [filter, setFilter] = useState(0);
  const handleFilterChange = (event: React.SyntheticEvent, newFilter: number) => {
    setFilter(newFilter);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <h1 className="page_tradePage_h1">Мои обмены</h1>
      <Box
        sx={{
          display: "flex",
          marginBottom: "2rem",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <TextInput size="small" />
        <CustomTabs value={filter} textColor="inherit" onChange={handleFilterChange}>
          <CustomTab label="Все" />
          <CustomTab label="Идет обмен" />
          <CustomTab label="Завершенные" />
        </CustomTabs>
      </Box>
      {children}
      <Pagination
        shape="rounded"
        count={10}
        sx={{ alignSelf: "center", marginTop: "2rem" }}
      />
    </Box>
  );
};

export default TradeMenu;
