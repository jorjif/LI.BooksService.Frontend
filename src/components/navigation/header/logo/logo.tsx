import React from "react";
import "./logo.scss";
import { ReactComponent as BookLogo } from "./book-logo.svg";

const Logo: React.FC = () => {
  return (
    <div className="page_frame_header_logo">
      <div className="page_frame_header_logo_icon">
        <BookLogo />
      </div>
      <h1 className="page_frame_header_logo_name">Book exchange</h1>
    </div>
  );
};

export default Logo;
