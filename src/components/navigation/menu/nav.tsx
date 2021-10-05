import React from "react";
import "./nav.scss";
import NavComponent from "./menuElement";
import { ReactComponent as Trades } from "./icons/currTrades.svg";
import { ReactComponent as Admin } from "./icons/administration.svg";
import { ReactComponent as Home } from "./icons/Home.svg";
import { ReactComponent as Notifications } from "./icons/notifications.svg";
import { ReactComponent as Trade } from "./icons/trade.svg";
import { ReactComponent as User } from "./icons/user.svg";

interface IProps {
  startPage?: boolean;
}

const Navbar: React.FC<IProps> = ({ startPage }) => {
  return (
    <nav className={startPage ? "page_frame_nav_hidden" : "page_frame_nav"}>
      <ul className="page_frame_nav_list">
        <NavComponent icon={<Home />}>Главная</NavComponent>
        <NavComponent icon={<Trade />}>Начать обмен</NavComponent>
        <NavComponent icon={<Trades />}>Мои обмены</NavComponent>
        <NavComponent icon={<User />}>Личные данные</NavComponent>
        <NavComponent icon={<Notifications />}>Уведомления</NavComponent>
        <NavComponent icon={<Admin />}>Связаться с администрацией</NavComponent>
      </ul>
    </nav>
  );
};

export default Navbar;
