import React from "react";
import "./header.scss";
import Logo from "./logo/logo";
import UserPill from "./userPill/pill";

interface IProps {
  startPage?: boolean;
}

const Header: React.FC<IProps> = ({ startPage }) => {
  return (
    <header className="page_frame_header">
      <Logo />
      <UserPill startPage={startPage} />
    </header>
  );
};

export default Header;
