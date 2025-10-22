import React from "react";

export const Header = ({ HeaderText = "Header" }) => {
  return (
    <div className="bg-[#1F614E] text-white text-6xl md:text-7xl font-bold px-12 py-8 w-full text-center tracking-wide border-b-4 border-[#FFC37D] shadow-lg">
      {HeaderText}
    </div>
  );
};