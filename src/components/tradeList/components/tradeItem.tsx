import { Box } from "@material-ui/system";
import React from "react";

export interface ITradeItem {
  exchangeListId: number;
  bookName: string;
  autor: string;
  status: number;
  createDate: Date;
  updateDate: Date;
}

const enum requestStatus {
  NEW = 1,
  IN_PROCESS = 2,
  CLOSED = 3,
}

const statusSwitch = (tradeFilter: number) => {
  switch (tradeFilter) {
    case requestStatus.NEW:
      return "Опубликована";
    case requestStatus.IN_PROCESS:
      return "Идет обмен";
    case requestStatus.CLOSED:
      return "Обмен завершен";
    default:
      return "Статус неизвестен";
  }
};

export const flexSize = (flex: number) => ({
  flex: flex,
});

const TradeItem: React.FC<ITradeItem> = ({
  exchangeListId,
  bookName,
  autor: author,
  status,
  createDate,
  updateDate,
}) => {
  return (
    <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
      <Box
        className="page_tradePage_cathegory"
        sx={{ ...flexSize(2), minWidth: "49.8px" }}
      >
        {exchangeListId}
      </Box>
      <Box className="page_tradePage_cathegory" sx={flexSize(6)}>
        {bookName}
      </Box>
      <Box className="page_tradePage_cathegory" sx={flexSize(7)}>
        {author}
      </Box>
      <Box className="page_tradePage_cathegory" sx={flexSize(4)}>
        {statusSwitch(status)}
      </Box>
      <Box className="page_tradePage_cathegory" sx={flexSize(2)}>
        {new Date(createDate).toLocaleDateString()}
      </Box>
      <Box className="page_tradePage_cathegory" sx={flexSize(2)}>
        {new Date(updateDate).toLocaleDateString()}
      </Box>
    </Box>
  );
};

export default TradeItem;
