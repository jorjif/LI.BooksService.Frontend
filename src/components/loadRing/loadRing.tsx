import React from "react";
import "./loadRing.scss";

export const LoadRing: React.FC = () => {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
