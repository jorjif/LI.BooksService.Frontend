import React from "react";
import "./pageFrame.scss";
import Header from "../navigation/header/header";
import Navbar from "../navigation/menu/nav";
import classNames from "classnames";

interface props {
  children?: React.ReactNode;
  startPage?: boolean;
}

const PageFrame: React.FC<props> = ({ children, startPage }) => {
  const mainStyle = classNames({
    page_frame_main: !startPage,
    page_frame_main_startPage: startPage,
  });
  return (
    <div className="page_frame_bg">
      <Header startPage={startPage} />
      <Navbar startPage={startPage} />
      <main className={mainStyle}>{children}</main>
    </div>
  );
};

export default PageFrame;
