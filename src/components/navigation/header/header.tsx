import React from "react";
import "./header.scss";
import Logo from "./logo/logo";
import UserPill from "./userPill/pill";

const Header: React.FC = () => {
  return (
    <header className="page_frame_header">
      <Logo />
      <UserPill logged />
    </header>
  );
};

export default Header;
