import { Paper } from "@material-ui/core";
import React, { useState } from "react";
import "./trade.scss";
import TradeItem, { ITradeItem } from "./components/tradeItem";
import TradeListHeader from "./components/tradeListHeader";
import TradeMenu from "./components/tradeMenu";
import { useGetUserRequestsQuery } from "../../app/store/api/apiSlice";
import { useAppSelector } from "../../app/hooks/hooks";

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
      return trade.status === 2;
    case tradesFilter.COMPLETE:
      return trade.status === 3;
    default:
      return true;
  }
};

const TradeList: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState(0);
  const id = useAppSelector((store) => store.auth.id);
  const { data, isSuccess } = useGetUserRequestsQuery(id);
  console.log(data);

  return (
    <Paper elevation={3} className="page_paper_column">
      <TradeMenu filter={statusFilter} setFilter={setStatusFilter}>
        <TradeListHeader />
        {isSuccess
          ? data
              .filter((trade: ITradeItem) => filterSwitch(trade, statusFilter))
              .map((elem: ITradeItem) => (
                <TradeItem {...elem} key={elem.exchangeListId} />
              ))
          : null}
      </TradeMenu>
    </Paper>
  );
};

export default TradeList;
