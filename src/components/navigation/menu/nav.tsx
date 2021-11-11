import React from "react";
import "./nav.scss";
import NavComponent from "./menuElement";
import { ReactComponent as Trades } from "./icons/currTrades.svg";
import { ReactComponent as Admin } from "./icons/administration.svg";
import { ReactComponent as Home } from "./icons/Home.svg";
import { ReactComponent as Notifications } from "./icons/notifications.svg";
import { ReactComponent as Trade } from "./icons/trade.svg";
import { ReactComponent as User } from "./icons/user.svg";
import { routeNames } from "../../../routes";

interface IProps {
  startPage?: boolean;
}

const Navbar: React.FC<IProps> = ({ startPage }) => {
  return (
    <nav className={startPage ? "page_frame_nav_hidden" : "page_frame_nav"}>
      <ul className="page_frame_nav_list">
        <NavComponent to={routeNames.START} icon={<Home />}>
          Главная
        </NavComponent>
        <NavComponent to={routeNames.EXCHANGE} icon={<Trade />}>
          Начать обмен
        </NavComponent>
        <NavComponent to={routeNames.TRADES} icon={<Trades />}>
          Мои обмены
        </NavComponent>
        <NavComponent to={routeNames.PROFILE} icon={<User />}>
          Личные данные
        </NavComponent>
        <NavComponent to={routeNames.START} icon={<Notifications />}>
          Уведомления
        </NavComponent>
        <NavComponent to={routeNames.START} icon={<Admin />}>
          Связаться с администрацией
        </NavComponent>
      </ul>
    </nav>
  );
};

export default Navbar;
