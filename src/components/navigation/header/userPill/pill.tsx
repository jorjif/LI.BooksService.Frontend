import React from "react";
import "./pill.scss";
import { ReactComponent as Exit } from "./exit-logo.svg";
import defaultImg from "./user-icon.png";
import { Link } from "react-router-dom";
import { routeNames } from "../../../../routes";

interface props {
  startPage?: boolean;
  image?: string;
}

const UserPill: React.FC<props> = ({ startPage, image }) => {
  const userName: string = "user_name";
  return (
    <div className="page_frame_header_pill">
      <div className="page_frame_header_pill_content">
        {startPage ? (
          <div className="page_frame_header_pill_content_login">
            <Link to={routeNames.LOGIN}>
              <div>Войти</div>
            </Link>
          </div>
        ) : (
          <div className="page_frame_header_pill_content_profile">
            <div className="page_frame_header_pill_content_profile_img">
              <img alt="Avatar" src={image ? image : defaultImg} />
            </div>
            <div className="page_frame_header_pill_content_profile_user">
              <div className="page_frame_header_pill_content_profile_user_name">
                {userName}
              </div>
              <div className="page_frame_header_pill_content_profile_user_exit">
                <div>Выход</div>
                <Exit />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserPill;
