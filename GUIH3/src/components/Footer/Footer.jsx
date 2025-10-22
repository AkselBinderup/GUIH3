import React from "react";
import "./Footer.css";

export const Footer = ({ FooterText="Footer" }) => {
  return (
    <div className="text-white text-3xl md:text-4xl font-semibold bg-[#1F614E] px-6 py-4 w-full text-center ">
      {FooterText}
    </div>
  );
};
