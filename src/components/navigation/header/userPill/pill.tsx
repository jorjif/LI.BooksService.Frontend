import React from "react";
import "./pill.scss";
import { ReactComponent as Exit } from "./exit-logo.svg";

interface props {
  logged?: boolean;
}

const UserPill: React.FC<props> = ({ logged }) => {
  const userName: string = "user name";
  return (
    <div>
      <div>
        {logged ? (
          <div>Войти</div>
        ) : (
          <div>
            <div>
              <img alt="userAvatar" />
            </div>
            <div>
              <div>{userName}</div>
              <div>
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
