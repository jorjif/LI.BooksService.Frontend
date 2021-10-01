import React from "react";
import "./pageFrame.scss";
import Header from "../navigation/header/header";

const PageFrame: React.FC = () => {
  return (
    <div className="page_frame_bg">
      <Header />
    </div>
  );
};

export default PageFrame;
