import { Paper } from "@material-ui/core";
import React from "react";
import "./trade.scss";
import TradeItem, { ITradeItem } from "./tradeItem";
import TradeListHeader from "./tradeListHeader";
import TradeMenu from "./tradeMenu";

const TradeList: React.FC = () => {
  const boilerplate: ITradeItem[] = [
    {
      number: 4641,
      bookName: "Ooga booga gromp",
      author: "grog big grog",
      status: "complete",
      creationDate: new Date(),
      lastUpdate: new Date(),
    },
    {
      number: 13434,
      bookName: "над пропастью во ржи",
      author: "grog big grog",
      status: "complete",
      creationDate: new Date(),
      lastUpdate: new Date(),
    },
    {
      number: 221,
      bookName: "политех лучше всех",
      author: "grog big grog bad",
      status: "Обмен завершен",
      creationDate: new Date(),
      lastUpdate: new Date(),
    },
  ];
  return (
    <Paper elevation={3} className="page_paper_column">
      <TradeMenu>
        <TradeListHeader />
        {boilerplate.map((elem) => (
          <TradeItem {...elem} />
        ))}
      </TradeMenu>
    </Paper>
  );
};

export default TradeList;
