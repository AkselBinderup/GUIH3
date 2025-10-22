import React from 'react';

export const Card = ({ title, price, description, buttonText, image }) => {
    return (
      <div className="flex flex-col items-center border shadow-lg p-6 w-80 bg-white font-sans">
        <img 
          src={image} 
          alt="Eksempelbillede" 
          className="w-full h-48 mb-4 object-cover"
        />
        <h2 className="text-xl text-[black] uppercase font-large mb-2">{title}</h2>  
        <p className="text-[black] font-normal uppercase mb-2">{price}</p>  
        <p className="text-gray-700 text-center font-normal uppercase mb-4">{description}</p> 
        <button className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 font-bold uppercase">
          {buttonText}
        </button>
      </div>
    );
  };