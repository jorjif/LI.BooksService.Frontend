import React from "react";
import { Link } from "react-router-dom";

interface props {
  icon: React.ReactNode;
  children: string;
  to: string;
}

const NavComponent: React.FC<props> = ({ icon, children, to }) => {
  return (
    <li className="page_frame_nav_list_element">
      <Link to={to}>
        <div className="page_frame_nav_list_element_wrapper">
          <div className="page_frame_nav_list_element_icon">{icon}</div>
          <div className="page_frame_nav_list_element_text">{children}</div>
        </div>
      </Link>
    </li>
  );
};

export default NavComponent;
