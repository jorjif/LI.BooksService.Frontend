import { Box } from "@material-ui/system";
import React from "react";

export interface ITradeItem {
  number: number;
  bookName: string;
  author: string;
  status: string;
  creationDate: Date;
  lastUpdate: Date;
}

export const flexSize = (flex: number) => ({
  flex: flex,
});

const TradeItem: React.FC<ITradeItem> = ({
  number,
  bookName,
  author,
  status,
  creationDate,
  lastUpdate,
}) => {
  return (
    <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
      <Box className="page_tradePage_cathegory" sx={flexSize(2)}>
        {number}
      </Box>
      <Box className="page_tradePage_cathegory" sx={flexSize(6)}>
        {bookName}
      </Box>
      <Box className="page_tradePage_cathegory" sx={flexSize(7)}>
        {author}
      </Box>
      <Box className="page_tradePage_cathegory" sx={flexSize(4)}>
        {status}
      </Box>
      <Box className="page_tradePage_cathegory" sx={flexSize(2)}>
        {creationDate.toLocaleDateString()}
      </Box>
      <Box className="page_tradePage_cathegory" sx={flexSize(2)}>
        {lastUpdate.toLocaleDateString()}
      </Box>
    </Box>
  );
};

export default TradeItem;
