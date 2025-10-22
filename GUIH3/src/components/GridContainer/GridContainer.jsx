import React from "react";
import ShaqPortrait from 'C:\\Users\\Z6APT\\GUIH3\\GUIH3\\src\\assets\\images\\Lidl432025-1_38_1702x1286_4969x3153_zoom.jpg'
import { Card } from "../Card/Card";

export const GridContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {[...Array(9)].map((_, idx) => (
        <Card
          key={idx}
          title={`titel ${idx + 1}`}
          price={`pris: ${67 * (idx + 1)}`}
          description="beskrivelse"
          buttonText="Køb"
          image={ShaqPortrait}
        />
      ))}
    </div>
  );
};
