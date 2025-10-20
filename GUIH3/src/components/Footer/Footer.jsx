import React from "react";
import "./Footer.css"; // relative path to your CSS file

export const Footer = ({ FooterText }) => {
  return (
    <div className="Footer">
      <h3>{FooterText}</h3>
    </div>
  );
};