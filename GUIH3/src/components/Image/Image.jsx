import React from 'react'
import ShaqPortrait from 'C:\\Users\\Z6APT\\GUIH3\\GUIH3\\src\\assets\\images\\Lidl432025-1_38_1702x1286_4969x3153_zoom.jpg' 



export const Image = () => {
  return (
    <img
      src={ShaqPortrait}
      alt="Portrait"
      className="w-80 h-80 md:w-96 md:h-96 object-cover border-2 border-[#FFC37D] shadow-xl"
    />
  );
};
