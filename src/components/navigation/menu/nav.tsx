import React from "react";
import "./nav.scss";
import NavComponent from "./menuElement";
import { ReactComponent as Trades } from "./icons/currTrades.svg";
import { ReactComponent as Admin } from "./icons/administration.svg";
import { ReactComponent as Home } from "./icons/Home.svg";
import { ReactComponent as Notifications } from "./icons/notifications.svg";
import { ReactComponent as Trade } from "./icons/trade.svg";
import { ReactComponent as User } from "./icons/user.svg";

const Navbar: React.FC = () => {
  return (
    <nav className="page_frame_nav">
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
