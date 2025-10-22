import React, { useState, useEffect } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const plusMedEn = () => setCount(count + 1);
  const nulstilHvisDuVilVæreSåVenlig = () => setCount(0);

  useEffect(() => {
    console.log("Count er blevet opdateret til:", count);
    document.title = count + " skyr";
  }, [count]);

  
  return (
    <div className="flex justify-between items-center gap-4 text-lg md:text-xl w-full">
      <p>Du har {count} dkk at købe skyr for</p>
      <div className="flex gap-2">
        <button
          onClick={plusMedEn}
          className="bg-[#FFC37D] text-[#233142] px-4 py-2 hover:bg-[#E6B963] transition-colors"
        >
          Klik mig
        </button>
        <button
          onClick={nulstilHvisDuVilVæreSåVenlig}
          className="bg-[#FFC37D] text-[#233142] px-4 py-2 hover:bg-[#E6B963] transition-colors"
        >
          Nulstil
        </button>
      </div>
    </div>
  );
}  
