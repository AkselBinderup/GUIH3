import React from "react";
export const Header = ({ HeaderText = "Header" }) => {
  return (
    <div className="w-full text-center px-12 py-8 text-5xl md:text-6xl font-bold tracking-wide text-[#e3e3e3] bg-[#1F614E] border-b-4 border-[#FFC37D] shadow-lg">
      {HeaderText}
    </div>
  );
};