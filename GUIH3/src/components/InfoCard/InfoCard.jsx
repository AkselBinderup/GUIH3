import React from "react";

export const InfoCard = ({ title = "Liste:", items }) => {
  return (
    <div className="bg-[#1F614E] p-8 w-full md:w-1/3">
      <h3 className="text-3xl md:text-4xl font-large mb-6 leading-relaxed  tracking-wide">{title}</h3>
      <ul className=" space-y-4 text-xl font-medium leading-relaxed  md:text-2xl">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
