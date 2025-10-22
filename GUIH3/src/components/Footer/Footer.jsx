import React from "react";
import NewsletterBg from "C:\\Users\\Z6APT\\GUIH3\\GUIH3\\src\\assets\\images\\Supporting-Key-Visual-05-light-green-compressed.svg";
import { Counter } from "../ClickCounter/ClickCounter";

export const Footer = ({ FooterText = "Footer" }) => {
  return (
    <section className="relative mt-36 h-[400px] w-full overflow-hidden">
      <img
        src={NewsletterBg}
        alt="Decorative background"
        className="absolute inset-0 w-full h-full object-cover z-1 py-0 opacity-20"
      />
      <div className="absolute top-0 left-0 z-20 px-72 mt-6">
          <Counter />
        </div>
      <div className="relative z-10 max-w-6xl mx-auto h-full px-6 py-12 flex flex-col md:flex-row items-center justify-between z-2 text-[#233142]">
     
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl md:text-4xl text-[#fff] font-bold mb-4">
            Aksel Binderup Kristensen
          </h2>
          <a className="inline-block  text-[#e3e3e3] font-semibold px-0   transition-colors">
            20 år gammel
          </a>
        </div>

        <p className="text-lg md:text-xl text-[#fff] max-w-md">
          Mine Hobbier er blandt andet fitness, musik, samt at tjekke efter gode
          tilbud på skyr og hakket kylling.
        </p>
      </div>
    </section>
  );
};
