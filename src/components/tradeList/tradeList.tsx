import { Paper } from "@material-ui/core";
import React, { useState } from "react";
import "./trade.scss";
import TradeItem, { ITradeItem } from "./components/tradeItem";
import TradeListHeader from "./components/tradeListHeader";
import TradeMenu from "./components/tradeMenu";

const boilerplate: ITradeItem[] = [
  {
    number: 4641,
    bookName: "Ooga booga gromp",
    author: "grog big grog",
    status: "Завершено",
    creationDate: new Date(),
    lastUpdate: new Date(),
  },
  {
    number: 13434,
    bookName: "над пропастью во ржи",
    author: "grog big grog",
    status: "Идет обмен",
    creationDate: new Date(),
    lastUpdate: new Date(),
  },
  {
    number: 131,
    bookName: "политех лучше всех",
    author: "grog big grog bad",
    status: "Идет обмен",
    creationDate: new Date(),
    lastUpdate: new Date(),
  },
  {
    number: 221,
    bookName: "политех лучше всех",
    author: "grog big grog bad",
    status: "Завершено",
    creationDate: new Date(),
    lastUpdate: new Date(),
  },
];

enum tradesFilter {
  ALL = 0,
  IN_PROGRESS = 1,
  COMPLETE = 2,
}

const filterSwitch = (trade: ITradeItem, tradeFilter: number) => {
  switch (tradeFilter) {
    case tradesFilter.ALL:
      return true;
    case tradesFilter.IN_PROGRESS:
      return trade.status === "Идет обмен";
    case tradesFilter.COMPLETE:
      return trade.status === "Завершено";
    default:
      return true;
  }
};

const TradeList: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState(0);

  return (
    <Paper elevation={3} className="page_paper_column">
      <TradeMenu filter={statusFilter} setFilter={setStatusFilter}>
        <TradeListHeader />
        {boilerplate
          .filter((trade) => filterSwitch(trade, statusFilter))
          .map((elem) => (
            <TradeItem {...elem} />
          ))}
      </TradeMenu>
    </Paper>
  );
};

export default TradeList;
