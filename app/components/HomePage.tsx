import React from 'react';

export default function HomePage() {
  return (
   <div className="max-w-2xl mx-auto my-10 p-10 rounded-2xl shadow-xl border-[6px] border-double border-[#D1AE6D] relative overflow-hidden romantic-bg-container">

      <div className="absolute inset-0 bg-[#FBEAD6]/70 z-0"></div>
      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#C2D0C8] opacity-40 rounded-tl-2xl z-10"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#C2D0C8] opacity-40 rounded-br-2xl z-10"></div>

      <header className="text-center mb-10 relative z-10">
        <span className="text-xs tracking-[0.4em] text-[#98B8B9] uppercase block mb-3 font-light italic">
        </span>
      <h1 className="font-[family-name:var(--font-fleur)] text-7xl text-[#C87D87] drop-shadow-sm leading-none py-4">
          My Portfolio
        </h1>
      </header>

      <div className="bg-[#FBEAD6]/80 p-8 rounded-2xl backdrop-blur-md border border-[#E2C2C6] italic relative z-10 shadow-inner">
       <p className="font-[family-name:var(--font-smoochSans)] text-1xl text-[#000000] leading-relaxed text-center">
          Welcome to my digital garden. It is a truly a pleasure to have you.
          Please, make yourself at home and wander through these curated corners; I hope the view is worth your stay.
        </p>
      </div>

     <footer className="mt-10 text-center border-t border-[#6B7556] pt-6 relative z-10">
      <p className="font-serif font-bold text-xl text-[#C87D87] tracking-[0.2em] uppercase">
        ✦ Yours Truly, Asiyah Shaikh ✦
      </p>
      <div className="mt-2 text-[#98B8B9] text-2xl"></div>
    </footer>
   </div>
  );
};
