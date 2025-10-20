import React from "react";

export const InfoCard = ({ title, items }) => {
  return (
    <div>
      <p>{title}</p>
        {items.map((item, index) => (
        
        <p key={index}>- {item}</p>
      
      ))}
    </div>
  );
};
