"use client";
import React from 'react';
import Envelope from '../components/Envelope';

export default function HomePage() {
  return (
   <div className="max-w-6xl mx-auto my-10 p-10 rounded-2xl shadow-xl border-[6px] border-[#96A480] relative overflow-hidden romantic-bg-container">

      <div className="absolute inset-0 bg-[#FBEAD6]/70 z-0"></div>
      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#C2D0C8] opacity-40 rounded-tl-2xl z-10"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#C2D0C8] opacity-40 rounded-br-2xl z-10"></div>

      <header className="text-center mb-10 relative z-10">
        <span className="text-xs tracking-[0.4em] text-[#98B8B9] uppercase block mb-3 font-light italic">
        </span>
        <h1 className="font-[family-name:var(--font-fleur)] text-9xl text-[#C87D87] drop-shadow-sm leading-none py-4">
          My Portfolio
        </h1>
      </header>

      <Envelope />

     <footer className="mt-10 text-center border-t border-[#6B7556] pt-6 relative z-10">
      <p className="font-serif font-bold text-xl text-[#C87D87] tracking-[0.2em] uppercase mb-6">
        ✦ Yours Truly, Asiyah Shaikh ✦
      </p>
      
      <div className="mt-2 text-[#98B8B9] text-2xl"></div>
    </footer>
   </div>
  );
};
