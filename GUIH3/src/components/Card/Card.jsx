import React from "react";

export const Card = ({ title, price, description, buttonText, image }) => {
  return (
    <div className="bg-white text-[#233142] rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
        <p className="mb-1">{price}</p>
        <p className="mb-4">{description}</p>
        <button className="bg-[#1F614E] text-[#e3e3e3] px-4 py-2 rounded hover:bg-[#14463A] transition-colors">
          {buttonText}
        </button>
      </div>
    </div>
  );
};
