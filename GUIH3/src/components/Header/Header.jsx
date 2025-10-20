import React from "react";
import './Header.css'; 

export const Header = ({HeaderText}) => {
  return (
    <div className="Header">
      <h2>{HeaderText}</h2>
    </div>
  );
};
