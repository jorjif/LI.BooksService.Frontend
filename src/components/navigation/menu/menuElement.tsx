import React from "react";

interface props {
  icon: React.ReactNode;
  children: string;
}

const NavComponent: React.FC<props> = ({ icon, children }) => {
  return (
    <li className="page_frame_nav_list_element">
      <div className="page_frame_nav_list_element_wrapper">
        <div className="page_frame_nav_list_element_icon">{icon}</div>
        <div className="page_frame_nav_list_element_text">{children}</div>
      </div>
    </li>
  );
};

export default NavComponent;
