import React from "react";
import "./pageFrame.scss";
import Header from "../navigation/header/header";
import Navbar from "../navigation/menu/nav";

const PageFrame: React.FC = () => {
  return (
    <div className="page_frame_bg">
      <Header />
      <Navbar />
    </div>
  );
};

export default PageFrame;
