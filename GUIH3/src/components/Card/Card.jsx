import React from 'react';

export const Card = ({ title, price, description, buttonText, image }) => {
  return (
    <div className="flex flex-col items-center border p-4">
       <img src={image} alt="Eksempelbillede" className="w-32 h-32 mb-2 object-cover" />
      <h2>{title}</h2>
      <p>{price}</p>
      <p>{description}</p>
      <button className="bg-blue-500 text-white px-2 py-1 mt-2 hover:bg-blue-600">{buttonText}</button>
    </div>
  );
};
