import React from "react";
import "./pageFrame.scss";
import Header from "../navigation/header/header";
import Navbar from "../navigation/menu/nav";

interface props {
  children?: React.ReactNode;
}

const PageFrame: React.FC<props> = ({ children }) => {
  return (
    <div className="page_frame_bg">
      <Header />
      <Navbar />
      <main className="page_frame_main">{children}</main>
    </div>
  );
};

export default PageFrame;
