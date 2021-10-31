import { Box, Pagination } from "@material-ui/core";
import React from "react";
import { CustomTabs, CustomTab } from "../../customInputs/tabs";
import { TextInputStyled } from "../../customInputs/TextInput";

interface IProps {
  children: React.ReactNode;
  filter: number;
  setFilter: Function;
}

const TradeMenu: React.FC<IProps> = ({ children, filter, setFilter }) => {
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
          alignItems: "flex-end",
        }}
      >
        <TextInputStyled size="small" fullWidth={false} />
        <CustomTabs value={filter} textColor="inherit" onChange={handleFilterChange}>
          <CustomTab label="Все" />
          <CustomTab label="Идет обмен" />
          <CustomTab label="Завершенные" />
        </CustomTabs>
      </Box>
      {children}
      <Pagination
        shape="rounded"
        count={1}
        sx={{ alignSelf: "center", marginTop: "2rem" }}
      />
    </Box>
  );
};

export default TradeMenu;
