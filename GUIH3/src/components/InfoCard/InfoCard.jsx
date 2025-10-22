import React from "react";
export const InfoCard = ({ title = "Liste:", items }) => {
  return (
    <div className="bg-[#1F614E] p-8 w-full md:w-1/2 text-white border-2 border-[#FFC37D]">
      <h3 className="text-4xl font-bold mb-6 tracking-wide">{title}</h3>
      <ul className="list-disc list-inside space-y-4 text-2xl">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
