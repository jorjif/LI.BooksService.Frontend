import React from "react";
import "./nav.scss";
import NavComponent from "./menuElement";
import { ReactComponent as ShareBook } from "./icons/giveBook.svg";
import { ReactComponent as GetBook } from "./icons/getBook.svg";
import { ReactComponent as Trades } from "./icons/currTrades.svg";
import { ReactComponent as Archive } from "./icons/archive.svg";
import { ReactComponent as Rating } from "./icons/rating.svg";
import { ReactComponent as Admin } from "./icons/administration.svg";
const Navbar: React.FC = () => {
  return (
    <nav className="page_frame_nav">
      <ul className="page_frame_nav_list">
        <NavComponent icon={<ShareBook />}>Хочу поделиться</NavComponent>
        <NavComponent icon={<GetBook />}>Хочу получить</NavComponent>
        <NavComponent icon={<Trades />}>Текущие обмены</NavComponent>
        <NavComponent icon={<Archive />}>Архив</NavComponent>
        <NavComponent icon={<Rating />}>Рейтинг</NavComponent>
        <NavComponent icon={<Admin />}>Связаться с администрацией</NavComponent>
      </ul>
    </nav>
  );
};

export default Navbar;
