import { Box, Pagination, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
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
        <Tabs value={filter} onChange={handleFilterChange}>
          <Tab label="Все" />
          <Tab label="Идет обмен" />
          <Tab label="Завершенные" />
        </Tabs>
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
