import React from "react";
import { Box } from "@material-ui/system";
import { flexSize } from "./tradeItem";

const TradeListHeader: React.FC = () => {
  return (
    <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
      <Box
        className="page_tradePage_cathegory page_tradePage_header"
        sx={flexSize(2)}
      >
        Номер
      </Box>
      <Box
        className="page_tradePage_cathegory page_tradePage_header"
        sx={flexSize(6)}
      >
        Название книги
      </Box>
      <Box
        className="page_tradePage_cathegory page_tradePage_header"
        sx={flexSize(7)}
      >
        Автор
      </Box>
      <Box
        className="page_tradePage_cathegory page_tradePage_header"
        sx={flexSize(4)}
      >
        Статус
      </Box>
      <Box
        className="page_tradePage_cathegory page_tradePage_header"
        sx={flexSize(2)}
      >
        Дата создания
      </Box>
      <Box
        className="page_tradePage_cathegory page_tradePage_header"
        sx={flexSize(2)}
      >
        Дата обновления
      </Box>
    </Box>
  );
};

export default TradeListHeader;
